import React from 'react';

const stats = [
  {
    label: 'Population',
    value: '≈ 1.43 billion',
    note: '2024 est.'
  },
  {
    label: 'Nominal GDP',
    value: '$3.7T–$3.9T',
    note: '2023–24 est.'
  },
  {
    label: 'GDP Growth',
    value: '≈ 7%–8%',
    note: 'FY 2023–24'
  },
  {
    label: 'Area',
    value: '3.29 million km²',
    note: '7th largest'
  },
  {
    label: 'Literacy Rate',
    value: '≈ 78%',
    note: 'periodic surveys'
  },
  {
    label: 'Median Age',
    value: '≈ 28 years',
    note: '2024 est.'
  },
  {
    label: 'Internet Users',
    value: '≈ 850M+',
    note: '2024 est.'
  },
  {
    label: 'Official Languages',
    value: 'Hindi, English',
    note: 'and 21 other scheduled'
  }
];

export default function StatsGrid() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Key Statistics</h2>
        <p className="mt-2 text-neutral-400 text-sm">Snapshot figures to give a quick overview of India’s scale and momentum. Values are rounded for readability.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="text-neutral-400 text-xs uppercase tracking-wide">{s.label}</div>
            <div className="mt-2 text-2xl font-semibold">{s.value}</div>
            <div className="mt-1 text-xs text-neutral-500">{s.note}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-neutral-500">
        Sources: World Bank, IMF, UN datasets, Government of India publications; compiled 2024.
      </div>
    </div>
  );
}
