import { User } from '@/types/user';
import { ObjectId } from 'mongodb';

// Mock users for development
export const users: (User & { password: string })[] = [
  {
    id: new ObjectId().toString(),
    email: 'admin@example.com',
    password: 'password123', // In a real app, this would be hashed
    name: 'Admin User',
    role: 'admin',
    completedCourses: [],
  },
  {
    id: new ObjectId().toString(),
    email: 'user@example.com',
    password: 'password123', // In a real app, this would be hashed
    name: 'Regular User',
    role: 'user',
    completedCourses: [],
  },
];

// Helper to find a user by email
export const findUserByEmail = (email: string) => {
  return users.find(user => user.email.toLowerCase() === email.toLowerCase());
};

// Helper to find a user by ID
export const findUserById = (id: string) => {
  return users.find(user => user.id === id);
};

// Helper to create a new user
export const createUser = (email: string, password: string, name: string) => {
  // Check if user exists
  if (findUserByEmail(email)) {
    throw new Error('User already exists');
  }
  
  // Create new user
  const newUser: (User & { password: string }) = {
    id: new ObjectId().toString(),
    email,
    password, // In a real app, this would be hashed
    name,
    role: 'user',
    completedCourses: [],
  };
  
  // Add to mock database
  users.push(newUser);
  
  // Return user without password
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};
