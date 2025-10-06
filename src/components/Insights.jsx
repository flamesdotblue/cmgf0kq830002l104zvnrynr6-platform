import React from 'react';
import { Leaf, Book, Cpu, Landmark } from 'lucide-react';

const cards = [
  {
    icon: Landmark,
    title: 'Economy & Infrastructure',
    points: [
      'High growth in services, manufacturing, and digital economy.',
      'Major infrastructure push: roads, rail, ports, renewable energy.',
      'Expanding startup ecosystem and FDI inflows.'
    ],
    color: 'from-red-500/20 to-red-400/10'
  },
  {
    icon: Cpu,
    title: 'Technology & Innovation',
    points: [
      'Global IT services hub with deep engineering talent.',
      'Rapid fintech adoption and digital public infrastructure (UPI, Aadhaar).',
      'Growing space-tech, semiconductors, and AI initiatives.'
    ],
    color: 'from-fuchsia-500/20 to-purple-400/10'
  },
  {
    icon: Book,
    title: 'Education & Skills',
    points: [
      'Large youth population entering higher education.',
      'Focus on skilling, NEP reforms, and digital learning.',
      'Top-tier institutes driving research and entrepreneurship.'
    ],
    color: 'from-amber-500/20 to-yellow-400/10'
  },
  {
    icon: Leaf,
    title: 'Sustainability & Environment',
    points: [
      'Ambitious renewable capacity expansion (solar, wind).',
      'Electric mobility, green hydrogen, and energy efficiency.',
      'Conservation challenges: air, water, and urban resilience.'
    ],
    color: 'from-emerald-500/20 to-green-400/10'
  }
];

export default function Insights() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Sector Insights</h2>
        <p className="mt-2 text-neutral-400 text-sm">A quick look at themes shaping India’s near-term trajectory across growth, technology, human capital, and sustainability.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map(({ icon: Icon, title, points, color }) => (
          <div key={title} className="relative rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 overflow-hidden">
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${color}`} />
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-neutral-800 border border-neutral-700 p-2">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-neutral-300 text-sm">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
