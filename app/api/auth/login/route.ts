import { NextRequest, NextResponse } from 'next/server';
import { findUserByEmail } from '@/data/users';
import { connectToDatabase } from '@/lib/mongodb';

// Define a simulated token generator
// In a real app, you would use a proper JWT library with a secure secret
function generateToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export async function POST(request: NextRequest) {
  try {
    // Get credentials from request
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // In a production app, connect to MongoDB
    // const { db } = await connectToDatabase();
    // const user = await db.collection('users').findOne({ email });
    
    // For now, use mock data
    const user = findUserByEmail(email);

    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create a token (in a real app, use JWT)
    const token = generateToken();
    
    // Remove password from user object before sending response
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      user: userWithoutPassword,
      token
    });
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
