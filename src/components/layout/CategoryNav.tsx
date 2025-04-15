
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';

export default function CategoryNav() {
  return (
    <div className="bg-secondary/10 border-b">
      <div className="container mx-auto px-4 overflow-x-auto scrollbar-hide">
        <div className="flex py-2 gap-4 whitespace-nowrap">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="text-sm font-medium text-foreground px-3 py-1.5 rounded-full hover:bg-secondary/50 transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
