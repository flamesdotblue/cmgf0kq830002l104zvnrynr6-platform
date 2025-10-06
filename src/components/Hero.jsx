import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[72vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950/80" />
      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="pointer-events-auto max-w-xl bg-neutral-900/50 backdrop-blur rounded-xl p-6 sm:p-8 border border-neutral-800">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            India: A Billion Stories. One Future.
          </h1>
          <p className="mt-4 text-neutral-300">
            Explore key facts, vital statistics, and sectoral insights about the world’s largest democracy and one of the fastest-growing major economies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#stats" className="inline-flex items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium shadow hover:bg-red-400 transition-colors">View Stats</a>
            <a href="#insights" className="inline-flex items-center justify-center rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium border border-neutral-700 hover:bg-neutral-700 transition-colors">Sector Insights</a>
          </div>
          <p className="mt-3 text-xs text-neutral-400">Tip: Click and drag the red globe to spin it.</p>
        </div>
      </div>
    </section>
  );
}
