'use client';

import { ReactNode, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/redux/store';
import { getCurrentUser } from '@/redux/slices/authSlice';

interface ReduxProviderProps {
  children: ReactNode;
}

// Component to load user on initial app load
function AuthInitializer({ children }: { children: ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if we have a token in localStorage and load user
    const token = localStorage.getItem('token');
    if (token) {
      // @ts-ignore (AppDispatch typing issue with thunks)
      dispatch(getCurrentUser());
    }
  }, [dispatch]);

  return <>{children}</>;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <AuthInitializer>
        {children}
      </AuthInitializer>
    </Provider>
  );
}
