'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchCourseById } from '@/redux/slices/courseSlice';
import EnrollButton from '@/components/EnrollButton';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import NavBreadcrumb from '@/components/NavBreadcrumb';
import Link from 'next/link';

interface CoursePageProps {
  params: {
    id: string;
  };
}

const CoursePage: React.FC<CoursePageProps> = ({ params }) => {
  const { id } = params;
  const dispatch = useAppDispatch();
  const { selectedCourse, loading, error } = useAppSelector((state) => state.course);

  useEffect(() => {
    dispatch(fetchCourseById(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loading message="Loading course details..." />;
  }

  if (error) {
    return (
      <div className="max-w-screen-md mx-auto p-6">
        <ErrorMessage message="Course not found. Please check the URL and try again." />
        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to All Courses
          </Link>
        </div>
      </div>
    );
  }

  if (!selectedCourse) {
    return (
      <div className="max-w-screen-md mx-auto p-6">
        <ErrorMessage message="Course not found." />
        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to All Courses
          </Link>
        </div>
      </div>
    );
  }  return (
    <main className="bg-slate-100 py-8">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <NavBreadcrumb 
              title={selectedCourse.title}
              path={[
                { name: 'Home', href: '/' },
                { name: 'Courses', href: '/' }
              ]}
            />

            <h1 className="text-2xl font-bold mb-2 text-white">{selectedCourse.title}</h1>
            <p className="text-blue-100 text-sm">{selectedCourse.shortDescription}</p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg">
              <div className="mb-2 md:mb-0">
                <span className="text-sm font-medium text-gray-500">Instructor:</span>
                <span className="ml-2 text-gray-700 font-medium">{selectedCourse.instructor}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Duration:</span>
                <span className="ml-2 text-gray-700 font-medium">{selectedCourse.duration}</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Course Description</h2>
              <p className="text-gray-700 leading-relaxed">{selectedCourse.fullDescription}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Prerequisites</h2>
              {selectedCourse.prerequisites.length > 0 ? (
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {selectedCourse.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="leading-relaxed">{prerequisite}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">No prerequisites required.</p>
              )}
            </div>
              <div className="mt-8 flex justify-center">
              <EnrollButton courseId={selectedCourse.id} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
