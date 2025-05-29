// Test script for the courses API endpoint
import { Course } from "@/types/course";

async function testCoursesApi() {
  console.log("Testing courses API...");
  
  // Test getting all courses
  try {
    console.log("\n1. Fetching all courses:");
    const allCoursesResponse = await fetch("http://localhost:3000/api/courses");
    if (!allCoursesResponse.ok) {
      throw new Error(`HTTP error! status: ${allCoursesResponse.status}`);
    }
    const allCourses = await allCoursesResponse.json() as Course[];
    console.log(`Found ${allCourses.length} courses`);
    console.log("First course:", allCourses[0]?.title);
    
    // Store first course ID for individual course test
    const firstCourseId = allCourses[0]?.id;
    
    // Test individual course endpoint if we have courses
    if (firstCourseId) {
      try {
        console.log(`\n1a. Fetching individual course with ID: ${firstCourseId}`);
        const courseResponse = await fetch(`http://localhost:3000/api/courses/${firstCourseId}`);
        if (!courseResponse.ok) {
          throw new Error(`HTTP error! status: ${courseResponse.status}`);
        }
        const course = await courseResponse.json() as Course;
        console.log("Individual course details:");
        console.log(`- Title: ${course.title}`);
        console.log(`- Instructor: ${course.instructor}`);
        console.log(`- Duration: ${course.duration}`);
        console.log(`- Prerequisites: ${course.prerequisites.join(", ")}`);
      } catch (error) {
        console.error(`Error fetching individual course (${firstCourseId}):`, error);
      }
      
      // Test non-existent course ID
      try {
        const nonExistentId = "non-existent-id";
        console.log(`\n1b. Testing non-existent course ID: ${nonExistentId}`);
        const notFoundResponse = await fetch(`http://localhost:3000/api/courses/${nonExistentId}`);
        console.log(`Status code: ${notFoundResponse.status}`);
        const errorData = await notFoundResponse.json();
        console.log("Response:", errorData);
      } catch (error) {
        console.error("Error testing non-existent course:", error);
      }
    }
  } catch (error) {
    console.error("Error fetching all courses:", error);
  }
  
  // Test searching for specific courses
  try {
    console.log("\n2. Searching for 'React' courses:");
    const searchResponse = await fetch("http://localhost:3000/api/courses?search=react");
    if (!searchResponse.ok) {
      throw new Error(`HTTP error! status: ${searchResponse.status}`);
    }
    const searchResults = await searchResponse.json() as Course[];
    console.log(`Found ${searchResults.length} courses matching 'React'`);
    searchResults.forEach((course) => {
      console.log(`- ${course.title}: ${course.shortDescription}`);
    });
  } catch (error) {
    console.error("Error searching for courses:", error);
  }
  
  // Test handling invalid endpoint
  try {
    console.log("\n3. Testing error handling (invalid endpoint):");
    const errorResponse = await fetch("http://localhost:3000/api/invalid");
    console.log(`Status code: ${errorResponse.status}`);
    const errorData = await errorResponse.json().catch(() => ({ message: "No JSON response" }));
    console.log("Response:", errorData);
  } catch (error) {
    console.error("Error testing invalid endpoint:", error);
  }
}

// Check if script is running in browser environment
if (typeof window !== 'undefined') {
  testCoursesApi();
} else {
  console.log("This script should be run in a browser environment");
}

export {};
