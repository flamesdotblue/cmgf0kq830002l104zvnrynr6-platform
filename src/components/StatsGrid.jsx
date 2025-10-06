import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function StatsGrid() {
  return (
    <div>
      <Reveal>
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Key Statistics</h2>
          <p className="mt-2 text-neutral-400 text-sm">Snapshot figures to give a quick overview of India’s scale and momentum. Values are rounded for readability.</p>
        </div>
      </Reveal>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={item} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="text-neutral-400 text-xs uppercase tracking-wide">{s.label}</div>
            <div className="mt-2 text-2xl font-semibold">{s.value}</div>
            <div className="mt-1 text-xs text-neutral-500">{s.note}</div>
          </motion.div>
        ))}
      </motion.div>

      <Reveal delay={0.1}>
        <div className="mt-4 text-xs text-neutral-500">
          Sources: World Bank, IMF, UN datasets, Government of India publications; compiled 2024.
        </div>
      </Reveal>
    </div>
  );
}
