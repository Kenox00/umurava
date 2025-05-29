import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "course-001",
    title: "React Fundamentals",
    shortDescription: "Learn the basics of React development",
    fullDescription: "This comprehensive course covers React from the ground up. You'll learn about components, props, state, hooks, context, and how to build practical applications with React.",
    duration: "8 hours",
    prerequisites: ["Basic JavaScript", "HTML & CSS"],
    instructor: "Sara Johnson"
  },
  {
    id: "course-002",
    title: "Advanced TypeScript",
    shortDescription: "Master TypeScript for large-scale applications",
    fullDescription: "Take your TypeScript skills to the next level with advanced type manipulation, generics, decorators, and understanding how to structure complex TypeScript projects.",
    duration: "10 hours",
    prerequisites: ["JavaScript", "Basic TypeScript"],
    instructor: "Michael Chen"
  },
  {
    id: "course-003",
    title: "MongoDB for Developers",
    shortDescription: "Build robust applications with MongoDB",
    fullDescription: "Learn how to design, build, and optimize MongoDB databases. This course covers CRUD operations, aggregation, indexing, performance optimization, and integration with Node.js applications.",
    duration: "12 hours",
    prerequisites: ["Basic Database Knowledge", "JavaScript"],
    instructor: "David Wilson"
  },
  {
    id: "course-004",
    title: "Next.js Enterprise Development",
    shortDescription: "Build scalable applications with Next.js",
    fullDescription: "This course dives into building production-ready applications with Next.js. Topics include server components, data fetching strategies, authentication, deployment, and optimizing for performance.",
    duration: "15 hours",
    prerequisites: ["React", "JavaScript", "Basic Next.js"],
    instructor: "Emily Rodriguez"
  },
  {
    id: "course-005",
    title: "Testing JavaScript Applications",
    shortDescription: "Learn comprehensive testing strategies",
    fullDescription: "Master the art of testing JavaScript applications with Jest, React Testing Library, and Cypress. Learn unit testing, integration testing, and end-to-end testing approaches.",
    duration: "6 hours",
    prerequisites: ["JavaScript", "React"],
    instructor: "James Smith"
  },
  {
    id: "course-006",
    title: "Redux & Redux Toolkit",
    shortDescription: "Master state management in React applications",
    fullDescription: "Understand the principles of Redux and learn how to implement state management with Redux Toolkit. This course covers actions, reducers, selectors, and middleware with practical examples.",
    duration: "7 hours",
    prerequisites: ["React", "JavaScript"],
    instructor: "Priya Patel"
  },
  {
    id: "course-007",
    title: "API Design with Node.js",
    shortDescription: "Create robust and scalable APIs",
    fullDescription: "Learn how to design and implement RESTful APIs using Node.js, Express, and MongoDB. Topics include authentication, validation, error handling, and documentation.",
    duration: "9 hours",
    prerequisites: ["JavaScript", "Basic Node.js"],
    instructor: "Carlos Mendez"
  },
  {
    id: "course-008",
    title: "Tailwind CSS Mastery",
    shortDescription: "Build modern interfaces with Tailwind",
    fullDescription: "Master Tailwind CSS and learn how to create beautiful, responsive user interfaces without writing custom CSS. This course covers customization, optimization, and component design.",
    duration: "5 hours",
    prerequisites: ["HTML", "Basic CSS"],
    instructor: "Alex Turner"
  }
];
