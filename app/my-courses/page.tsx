'use client';

import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { fetchCourses } from '@/redux/slices/courseSlice';
import CourseCard from '@/components/CourseCard';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function MyCourses() {
  const dispatch = useAppDispatch();
  const { courses, enrolledCourses, loading, error } = useAppSelector((state) => state.course);

  useEffect(() => {
    // Fetch all courses if they haven't been loaded yet
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [dispatch, courses.length]);

  // Filter courses to only show enrolled ones
  const myCourses = courses.filter(course => enrolledCourses.includes(course.id));

  if (loading && courses.length === 0) {
    return <Loading message="Loading your courses..." />;
  }

  if (error) {
    return (
      <div className="max-w-screen-lg mx-auto p-4">
        <ErrorMessage message="Failed to load courses. Please try again." />
      </div>
    );
  }
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-100">
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Courses</h1>
            <p className="text-gray-600">Manage your enrolled courses</p>
          </div>

          {myCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h2 className="text-xl font-semibold mb-2 text-gray-700">You haven't enrolled in any courses yet</h2>
              <p className="text-gray-500 mb-6">Browse our available courses and enroll to get started</p>
              <Link 
                href="/" 
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
