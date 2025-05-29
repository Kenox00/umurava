// This script can be run from Node.js to test the API endpoints
import fetch from 'node-fetch';

async function testApi() {
  const baseUrl = 'http://localhost:3000/api';
  
  console.log('Employee Training Portal API Test');
  console.log('===============================\n');
  
  // Test all courses endpoint
  try {
    console.log('Testing GET /api/courses');
    const response = await fetch(`${baseUrl}/courses`);
    const data = await response.json();
    
    if (response.ok) {
      console.log(`Success: Retrieved ${data.length} courses`);
      console.log('Sample course:', JSON.stringify(data[0], null, 2));
    } else {
      console.error(`Error: ${response.status}`, data);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
  
  console.log('\n-------------------------------\n');
  
  // Test search endpoint
  try {
    const searchTerm = 'typescript';
    console.log(`Testing GET /api/courses?search=${searchTerm}`);
    const response = await fetch(`${baseUrl}/courses?search=${searchTerm}`);
    const data = await response.json();
    
    if (response.ok) {
      console.log(`Success: Found ${data.length} courses matching "${searchTerm}"`);
      if (data.length > 0) {
        console.log('Matching courses:');
        data.forEach((course: any) => {
          console.log(` - ${course.title}`);
        });
      }
    } else {
      console.error(`Error: ${response.status}`, data);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
  
  console.log('\nTests completed.');
}

// Run the tests
testApi().catch(console.error);
