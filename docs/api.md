# Employee Training Portal API Documentation

This document outlines the API endpoints available for the Employee Training Portal.

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### Get All Courses

Returns all available training courses.

- **URL:** `/courses`
- **Method:** `GET`
- **URL Parameters:** None
- **Query Parameters:**
  - `search` (optional): Filter courses by title or description

#### Success Response:

- **Code:** 200 OK
- **Content Example:**

```json
[
  {
    "id": "course-001",
    "title": "React Fundamentals",
    "shortDescription": "Learn the basics of React development",
    "fullDescription": "This comprehensive course covers React from the ground up...",
    "duration": "8 hours",
    "prerequisites": ["Basic JavaScript", "HTML & CSS"],
    "instructor": "Sara Johnson"
  },
  // Additional courses...
]
```

#### Error Response:

- **Code:** 500 Internal Server Error
- **Content Example:**

```json
{
  "error": "Failed to fetch courses"
}
```

### Get Course by ID

Returns a specific course by its ID.

- **URL:** `/courses/:id`
- **Method:** `GET`
- **URL Parameters:**
  - `id`: The ID of the course to retrieve

#### Success Response:

- **Code:** 200 OK
- **Content Example:**

```json
{
  "id": "course-001",
  "title": "React Fundamentals",
  "shortDescription": "Learn the basics of React development",
  "fullDescription": "This comprehensive course covers React from the ground up...",
  "duration": "8 hours",
  "prerequisites": ["Basic JavaScript", "HTML & CSS"],
  "instructor": "Sara Johnson"
}
```

#### Error Responses:

- **Code:** 404 Not Found
- **Content Example:**

```json
{
  "error": "Course with ID course-999 not found"
}
```

- **Code:** 500 Internal Server Error
- **Content Example:**

```json
{
  "error": "Failed to fetch course"
}
```

## Error Handling

All API endpoints will return appropriate HTTP status codes and JSON responses with error messages when issues occur.

## Data Models

### Course

```typescript
interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  prerequisites: string[];
  instructor: string;
}
```

## Authentication

Authentication is not implemented in Phase 1 of the application.

## Future Endpoints (Planned for Phase 2)

- User enrollment in courses
- Course completion tracking
- User progress statistics
