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
  },
  {
    id: "course-009",
    title: "AI for Web Developers",
    shortDescription: "Implement AI capabilities in web applications",
    fullDescription: "Learn how to integrate AI capabilities into your web applications. This course covers machine learning models, natural language processing APIs, and AI-driven user experiences. You'll build several practical applications including a chatbot and a recommendation system.",
    duration: "14 hours",
    prerequisites: ["JavaScript", "API Integration", "Basic Data Structures"],
    instructor: "Maria Sanchez"
  },
  {
    id: "course-010",
    title: "GraphQL Architecture",
    shortDescription: "Build efficient APIs with GraphQL",
    fullDescription: "Deep dive into GraphQL and learn how to build efficient APIs. This course covers schema design, resolvers, mutations, subscriptions, and authentication. You'll learn best practices for organizing your GraphQL codebase and optimizing performance.",
    duration: "11 hours",
    prerequisites: ["REST API Knowledge", "JavaScript", "Node.js"],
    instructor: "Alex Kim"
  },
  {
    id: "course-011",
    title: "Cybersecurity Essentials for Developers",
    shortDescription: "Secure your web applications from attacks",
    fullDescription: "Learn essential security concepts and best practices for protecting web applications. This course covers common vulnerabilities (XSS, CSRF, SQL injection), secure authentication, authorization patterns, data encryption, and security headers. You'll perform security audits and implement fixes on real applications.",
    duration: "12 hours",
    prerequisites: ["Web Development", "Basic Networking"],
    instructor: "Robert Clarke"
  },
  {
    id: "course-012",
    title: "Performance Optimization Techniques",
    shortDescription: "Make your applications lightning fast",
    fullDescription: "Master performance optimization for web applications. This course covers frontend optimization (bundle size reduction, code splitting, lazy loading), backend optimization (database queries, caching strategies), and network optimization techniques. You'll use performance profiling tools to identify and fix bottlenecks.",
    duration: "8 hours",
    prerequisites: ["JavaScript", "Web Development"],
    instructor: "Leila Wong"
  },
  {
    id: "course-013",
    title: "Cloud Architecture on AWS",
    shortDescription: "Design scalable systems on Amazon Web Services",
    fullDescription: "Learn to architect scalable, fault-tolerant systems on AWS. This course covers key AWS services (EC2, S3, Lambda, DynamoDB), infrastructure as code with CloudFormation, serverless architecture patterns, and microservices deployment. You'll design and deploy a complete application architecture with security best practices.",
    duration: "16 hours",
    prerequisites: ["Basic Cloud Knowledge", "JavaScript or Python"],
    instructor: "Thomas Johnson"
  },
  {
    id: "course-014",
    title: "Docker and Kubernetes Fundamentals",
    shortDescription: "Containerize and orchestrate your applications",
    fullDescription: "Master containerization with Docker and orchestration with Kubernetes. This course covers Docker image creation, container networking, Kubernetes architecture, deployments, services, and persistent storage. You'll build a CI/CD pipeline for containerized applications and manage scaling and updates.",
    duration: "15 hours",
    prerequisites: ["Linux Basics", "Command Line", "Web Development"],
    instructor: "Sophia Martinez"
  },
  {
    id: "course-015",
    title: "Blockchain Development",
    shortDescription: "Build applications on blockchain technology",
    fullDescription: "Dive into blockchain development and smart contract programming. This course covers blockchain fundamentals, Ethereum development, Solidity programming language, web3.js integration, and dApp architecture. You'll build and deploy smart contracts and create a decentralized application with a web interface.",
    duration: "18 hours",
    prerequisites: ["JavaScript", "Basic Cryptography Knowledge"],
    instructor: "Daniel Lee"
  },
  {
    id: "course-016",
    title: "Accessibility in Web Design",
    shortDescription: "Create inclusive web experiences for all users",
    fullDescription: "Learn how to build accessible web applications that work for everyone. This course covers WCAG guidelines, semantic HTML, keyboard navigation, screen reader optimization, and color contrast requirements. You'll audit existing sites for accessibility issues and implement fixes to meet international standards.",
    duration: "6 hours",
    prerequisites: ["HTML", "CSS", "JavaScript"],
    instructor: "Emma Richards"
  },
  {
    id: "course-017",
    title: "Progressive Web Apps",
    shortDescription: "Build offline-capable web applications",
    fullDescription: "Master the development of Progressive Web Apps that work offline and feel like native applications. This course covers service workers, caching strategies, app manifests, push notifications, and background sync. You'll transform an existing web app into a fully-featured PWA with offline support and install capabilities.",
    duration: "9 hours",
    prerequisites: ["HTML", "CSS", "JavaScript"],
    instructor: "Jason Miller"
  },
  {
    id: "course-018",
    title: "Data Visualization with D3.js",
    shortDescription: "Create powerful interactive data visualizations",
    fullDescription: "Learn to create stunning data visualizations using the D3.js library. This course covers SVG basics, scales, axes, transitions, and interactive charts. You'll work with real-world datasets to create dashboards, maps, and complex visualizations that help users understand data patterns and trends.",
    duration: "10 hours",
    prerequisites: ["JavaScript", "HTML", "CSS", "Basic Math"],
    instructor: "Nina Patel"
  }
];
