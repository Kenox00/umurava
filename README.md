# Employee Training Portal

A Next.js 15 application for managing employee training courses with TypeScript and Redux Toolkit.

## Phase 1: Backend Logic and State Management

This phase focuses on setting up the backend logic, state management, and data handling for the Employee Training Portal. The UI will be developed in Phase 2.

## Features

- Course data management with TypeScript interfaces
- API endpoints for fetching and filtering courses
- MongoDB integration with fallback to static data
- Redux Toolkit state management for course enrollment and search
- Error handling and data validation

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- MongoDB (optional with static data fallback)
- Redux Toolkit for state management
- Node.js scripts for testing and seeding

## Project Structure

```
├── app/                 # Next.js App Router files
│   ├── api/             # API route handlers
│   │   └── courses/     # Course API endpoints
├── data/                # Static data (fallback if no MongoDB)
├── lib/                 # Utility functions and services
├── redux/               # Redux store and slices
│   └── slices/          # Feature slices for Redux
├── scripts/             # Test and utility scripts
├── types/               # TypeScript interfaces and types
└── docs/                # API documentation
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB (optional)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file with the following (if using MongoDB):

```
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server:

```bash
npm run dev
```

5. (Optional) Seed the database:

```bash
npm run seed
```

### API Testing

Test the API endpoints using:

```bash
npm run test:api
```

## API Endpoints

### GET /api/courses

Returns all courses or filters by search query.

```
/api/courses?search=react
```

### GET /api/courses/:id

Returns a specific course by ID.

```
/api/courses/course-001
```

## Redux State Management

The Redux store provides the following functionality:

- Track enrolled courses
- Save search queries 
- Fetch courses from API
- Handle loading states and errors

## Coming in Phase 2

- User interface components
- Course enrollment functionality
- Search and filtering UI
- User progress tracking
- Authentication and authorization
