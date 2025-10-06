import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsGrid from './components/StatsGrid';
import Insights from './components/Insights';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-inter">
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="stats" className="py-16">
          <StatsGrid />
        </section>
        <section id="insights" className="py-16">
          <Insights />
        </section>
      </main>
      <footer className="border-t border-neutral-800 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400">
          <p>Data are approximate and compiled from public sources (World Bank, UN, IMF, Government of India). For decisions, verify with the latest official publications.</p>
          <p className="mt-2">© {new Date().getFullYear()} India Insights</p>
        </div>
      </footer>
    </div>
  );
}
