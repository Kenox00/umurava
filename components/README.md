# Employee Training Portal Components

This directory contains reusable UI components used throughout the Employee Training Portal application.

## Core Components

### `CourseCard.tsx`

Displays a preview card for a course with title, short description, and duration.

Props:
- `course`: A Course object with all course details

### `EnrollButton.tsx`

A button component for enrolling/unenrolling from courses that connects to Redux state.

Props:
- `courseId`: The ID of the course to enroll in

### `SearchBar.tsx`

A search input component for filtering courses, with a clear button.

### `NavBreadcrumb.tsx`

Navigation breadcrumb component for showing the current page location.

Props:
- `title`: Current page title
- `path`: Array of breadcrumb links with name and href

### `Loading.tsx`

A spinner component for loading states.

Props:
- `message`: Optional custom loading message

### `ErrorMessage.tsx`

Component for displaying error messages.

Props:
- `message`: The error message to display

### `Footer.tsx`

Page footer component with copyright and links.

### `Navigation.tsx`

Top navigation bar with links to main sections and enrolled course count.

## Usage Example

```tsx
import CourseCard from '@/components/CourseCard';
import SearchBar from '@/components/SearchBar';

// In a page component:
<div>
  <SearchBar />
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
</div>
```
