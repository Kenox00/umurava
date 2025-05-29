'use client';

import React from 'react';
import Link from 'next/link';

interface NavBreadcrumbProps {
  title: string;
  path: {
    name: string;
    href: string;
  }[];
}

const NavBreadcrumb: React.FC<NavBreadcrumbProps> = ({ title, path }) => {
  return (
    <div className="flex flex-wrap items-center text-sm text-blue-100 mb-4">
      {path.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link 
            href={item.href} 
            className="hover:text-white"
          >
            {item.name}
          </Link>
          <span className="mx-2">/</span>
        </React.Fragment>
      ))}
      <span className="font-medium text-white truncate">{title}</span>
    </div>
  );
};

export default NavBreadcrumb;
