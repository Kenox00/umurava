import { NextRequest, NextResponse } from 'next/server';
import { createUser, findUserByEmail } from '@/data/users';
import { connectToDatabase } from '@/lib/mongodb';

// Define a simulated token generator
// In a real app, you would use a proper JWT library with a secure secret
function generateToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export async function POST(request: NextRequest) {
  try {
    // Get registration data from request
    const { name, email, password } = await request.json();
    
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Name, email and password are required' },
        { status: 400 }
      );
    }

    // In a production app, connect to MongoDB
    // const { db } = await connectToDatabase();
    // Check if user exists
    // const existingUser = await db.collection('users').findOne({ email });
    
    // For now, use mock data
    const existingUser = findUserByEmail(email);

    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists with this email' },
        { status: 409 }
      );
    }

    // Create new user
    // In a real app, hash the password before storing it
    // In a real app with MongoDB:
    // const result = await db.collection('users').insertOne({
    //   name,
    //   email,
    //   password: hashedPassword,
    //   role: 'user',
    //   completedCourses: [],
    // });
    // const newUser = await db.collection('users').findOne({ _id: result.insertedId });
    
    // For now, use mock data function
    const newUser = createUser(email, password, name);

    // Create a token (in a real app, use JWT)
    const token = generateToken();

    return NextResponse.json({
      user: newUser,
      token
    });
    
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
