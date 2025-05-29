import { Course } from "@/types/course";

/**
 * Service for interacting with the courses API
 */
export const CourseService = {
  /**
   * Fetch all courses or filter by search term
   * 
   * @param searchQuery - Optional search term
   * @returns Promise resolving to Course array
   */
  async getCourses(searchQuery?: string): Promise<Course[]> {
    try {
      const url = searchQuery
        ? `/api/courses?search=${encodeURIComponent(searchQuery)}`
        : '/api/courses';
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  },
    /**
   * Get a single course by ID
   * 
   * @param id - The course ID
   * @returns Promise resolving to a Course
   */
  async getCourseById(id: string): Promise<Course> {
    try {
      const response = await fetch(`/api/courses/${id}`);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error(`Error fetching course ${id}:`, error);
      throw error;
    }
  }
};
