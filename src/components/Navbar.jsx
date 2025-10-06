import React from 'react';
import { Globe, BarChart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/60 border-b border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-red-400" />
          <span className="font-semibold tracking-tight">Incredible India</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#stats" className="hover:text-white inline-flex items-center gap-1">
            <BarChart className="h-4 w-4" /> Stats
          </a>
          <a href="#insights" className="hover:text-white">Insights</a>
          <a href="#hero" className="hover:text-white">Explore</a>
        </div>
      </nav>
    </header>
  );
}
