'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NavWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
}
