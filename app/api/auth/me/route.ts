import { NextRequest, NextResponse } from 'next/server';
import { findUserById } from '@/data/users';

export async function GET(request: NextRequest) {
  try {
    // In a real app, verify the token from the Authorization header
    // For this mock implementation, we'll simulate getting a user ID from a token
    
    // Extract the token from the Authorization header
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Authorization token is required' },
        { status: 401 }
      );
    }
    
    const token = authHeader.split(' ')[1];
    
    // In a real app, decode and verify the JWT token
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const userId = decoded.userId;
    
    // For mock implementation, use the first user
    const userId = '1'; // This would come from the token in a real app
    
    // In a real app with MongoDB:
    // const { db } = await connectToDatabase();
    // const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
    
    // For now, use mock data
    const user = findUserById(userId);
    
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }
    
    // Remove password from user object before sending response
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json(userWithoutPassword);
    
  } catch (error) {
    console.error('Get current user error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
