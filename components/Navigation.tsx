'use client';

import Link from 'next/link';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { logout } from '@/redux/slices/authSlice';

const Navigation: React.FC = () => {
  const { enrolledCourses } = useAppSelector((state) => state.course);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  const handleLogout = async () => {
    // @ts-ignore (AppDispatch typing issue with thunks)
    await dispatch(logout());
    router.push('/login');
  };
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-screen-lg mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-blue-600 hover:text-blue-700">
            Training Portal
          </Link>
          <div className="flex space-x-4 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Courses
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <Link 
                    href="/my-courses" 
                    className="text-gray-700 hover:text-blue-600 flex items-center"
                  >
                    My Courses
                    {enrolledCourses.length > 0 && (
                      <span className="ml-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {enrolledCourses.length}
                      </span>
                    )}
                  </Link>
                </div>
                  <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none">
                    <span className="mr-1">
                      {user?.name ? user.name.split(' ')[0] : 'Account'}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link 
                      href="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
