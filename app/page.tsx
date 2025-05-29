'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchCourses } from '@/redux/slices/courseSlice';
import CourseCard from '@/components/CourseCard';
import SearchBar from '@/components/SearchBar';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';

export default function Home() {
  const dispatch = useAppDispatch();
  const { courses, loading, error, searchQuery } = useAppSelector((state) => state.course);
  const [categoryFilter, setCategoryFilter] = React.useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  // Extract unique categories from course titles for filtering
  const categories = React.useMemo(() => {
    const allCategories = new Set<string>();
    courses.forEach(course => {
      // Extract potential category from title (before "with" or first word)
      const category = course.title.split(' ')[0];
      if (category) allCategories.add(category);
    });
    return Array.from(allCategories).sort();
  }, [courses]);

  // Filter courses based on search query and category
  const filteredCourses = React.useMemo(() => {
    let filtered = courses;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter(course => 
        course.title.startsWith(categoryFilter)
      );
    }
    
    return filtered;
  }, [courses, searchQuery, categoryFilter]);

  return (
    <main className="bg-slate-100 py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="bg-blue-600 text-white rounded-lg p-6 mb-8 shadow-md">
          <h1 className="text-3xl font-bold mb-2">Employee Training Portal</h1>
          <p className="text-blue-100">Browse available courses and enhance your skills</p>
        </div>
        
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Find a Course</h2>
          <SearchBar />
        </div>
        
        {/* Error Message */}
        {error && (
          <ErrorMessage message="Error loading courses. Please try again." />
        )}
        
        {/* Loading State */}
        {loading && <Loading message="Loading courses..." />}
        
        {/* Courses Grid */}
        {!loading && !error && (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-500">
                {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
              </p>
              {searchQuery && (
                <button
                  onClick={() => dispatch({ type: 'course/setSearchQuery', payload: '' })}
                  className="text-sm text-blue-500 hover:underline flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear search
                </button>
              )}
            </div>
            
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500 text-lg">No courses match your search criteria.</p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
