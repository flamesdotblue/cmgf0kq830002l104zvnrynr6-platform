import React from 'react';
import { PawPrint, Flower2, Bird, Trees, Fish, Shield, Music, Star } from 'lucide-react';

const symbols = [
  {
    icon: PawPrint,
    title: 'National Animal',
    value: 'Bengal Tiger',
    note: 'Panthera tigris tigris'
  },
  {
    icon: Bird,
    title: 'National Bird',
    value: 'Indian Peafowl (Peacock)',
    note: 'Pavo cristatus'
  },
  {
    icon: Flower2,
    title: 'National Flower',
    value: 'Lotus',
    note: 'Nelumbo nucifera'
  },
  {
    icon: Trees,
    title: 'National Tree',
    value: 'Banyan',
    note: 'Ficus benghalensis'
  },
  {
    icon: Star,
    title: 'National Fruit',
    value: 'Mango',
    note: 'Mangifera indica'
  },
  {
    icon: Fish,
    title: 'National Aquatic Animal',
    value: 'Ganges River Dolphin',
    note: 'Platanista gangetica'
  },
  {
    icon: Shield,
    title: 'National Emblem',
    value: 'Lion Capital of Ashoka',
    note: 'State Emblem of India'
  },
  {
    icon: Music,
    title: 'National Anthem',
    value: 'Jana Gana Mana',
    note: 'By Rabindranath Tagore'
  }
];

export default function NationalSymbols() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">National Symbols</h2>
        <p className="mt-2 text-neutral-400 text-sm">A quick look at India’s officially designated national symbols representing its heritage and identity.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {symbols.map(({ icon: Icon, title, value, note }) => (
          <div key={title} className="relative rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 overflow-hidden">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-neutral-800 border border-neutral-700 p-2 shrink-0">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-neutral-400 text-xs uppercase tracking-wide">{title}</div>
                <div className="mt-1 text-lg font-semibold truncate">{value}</div>
                {note && <div className="mt-1 text-xs text-neutral-500">{note}</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-neutral-500">Sources: Government of India notifications and publications.</div>
    </div>
  );
}
