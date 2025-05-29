'use client';

import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import ProtectedRoute from '@/components/ProtectedRoute';
import Loading from '@/components/Loading';

export default function ProfilePage() {
  const { user, loading } = useAppSelector(state => state.auth);
  const { enrolledCourses, courses } = useAppSelector(state => state.course);

  // Get details of enrolled courses
  const myCoursesDetails = courses.filter(course => enrolledCourses.includes(course.id));

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-100 py-8">
        <div className="max-w-screen-lg mx-auto px-4">
          {loading ? (
            <Loading message="Loading profile..." />
          ) : (
            <>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 h-20 w-20 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mr-4">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">{user?.name}</h1>
                    <p className="text-gray-500">{user?.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="text-gray-800">{user?.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800">{user?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Role</p>
                    <p className="text-gray-800 capitalize">{user?.role}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Enrolled Courses</p>
                    <p className="text-gray-800">{enrolledCourses.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
                
                {myCoursesDetails.length > 0 ? (
                  <div className="space-y-4">
                    {myCoursesDetails.map(course => (
                      <div key={course.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-gray-800">{course.title}</h3>
                          <span className="text-sm bg-blue-100 text-blue-800 py-1 px-3 rounded-full">
                            In Progress
                          </span>
                        </div>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-blue-500 h-2.5 rounded-full" 
                              style={{ width: '0%' }}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">0% complete</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">You are not enrolled in any courses yet.</p>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </ProtectedRoute>
  );
}
