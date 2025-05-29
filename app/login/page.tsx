'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/components/LoginForm';
import { useAppSelector } from '@/lib/hooks';

export default function LoginPage() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();
  
  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center px-4 py-12">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Employee Training Portal</h1>
          <p className="text-gray-500 mt-2">Login to access your courses</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
