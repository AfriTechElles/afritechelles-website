import React from 'react';
import { Metric } from '../types';

const metrics: Metric[] = [
  { id: '1', label: 'Note Moyenne', value: '3/5', description: 'De satisfaction' },
  { id: '2', label: 'Étudiantes', value: '200+', description: 'Formées' },
  { id: '3', label: 'Villes', value: '4', description: 'Représentées' },
  { id: '4', label: 'Défis Relevés', value: '50+', description: 'Projets livrés' },
];

const Impact: React.FC = () => {
  return (
    <section className="py-20 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-brand-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-100 dark:divide-white/5">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center px-4 group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple mb-3">
                {metric.value}
              </p>
              <h4 className="text-gray-900 dark:text-white font-bold text-lg">{metric.label}</h4>
              <p className="text-gray-500 dark:text-neutral-500 text-sm mt-1">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;