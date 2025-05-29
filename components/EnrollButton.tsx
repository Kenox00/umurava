'use client';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { enroll, unenroll } from '@/redux/slices/courseSlice';
import { useRouter } from 'next/navigation';

interface EnrollButtonProps {
  courseId: string;
}

const EnrollButton: React.FC<EnrollButtonProps> = ({ courseId }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const enrolledCourses = useAppSelector((state) => state.course.enrolledCourses);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  
  const isEnrolled = enrolledCourses.includes(courseId);

  const handleEnrollToggle = () => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    
    // Prevent multiple rapid clicks
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Simulate a small delay to show feedback
    setTimeout(() => {
      if (isEnrolled) {
        dispatch(unenroll(courseId));
      } else {
        dispatch(enroll(courseId));
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <button
      onClick={handleEnrollToggle}
      disabled={isLoading}
      className={`
        flex items-center justify-center rounded-md px-6 py-3 font-medium 
        transition-all duration-200 focus:outline-none focus:ring-2 
        focus:ring-offset-2 ${
        isEnrolled
          ? 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500'
          : 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500'
        } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
      `}
    >
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {isEnrolled ? 'Unenroll from Course' : 'Enroll in Course'}
    </button>
  );
};

export default EnrollButton;
