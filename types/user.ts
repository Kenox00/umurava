export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  completedCourses: string[];
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends UserCredentials {
  name: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
