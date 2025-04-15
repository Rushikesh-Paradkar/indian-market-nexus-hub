
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CategoryNav from './CategoryNav';

interface LayoutProps {
  children: React.ReactNode;
  showCategories?: boolean;
}

export default function Layout({ children, showCategories = true }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showCategories && <CategoryNav />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
