import React from 'react';
import Link from 'next/link';
import { Course } from '@/types/course';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link href={`/course/${course.id}`}>
      <div className="p-4 rounded-lg shadow-md hover:shadow-lg bg-white transition-shadow duration-300 h-full flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-gray-600 flex-grow mb-4">{course.shortDescription}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">
            Duration: {course.duration}
          </span>
          <span className="text-sm text-gray-500 italic">
            By {course.instructor}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
