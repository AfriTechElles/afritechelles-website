import React from 'react';
import { Partner } from '../types';

const partners: Partner[] = [
  { name: 'Women Innovating with Cloud in Africa', logoText: 'Women Innovating with Cloud in Africa' },
  { name: 'Her AI Africa', logoText: 'Her AI Africa' },
];

const partnershipTypes = [
  'Entreprises technologiques',
  'Institutions académiques',
  'Organisations internationales',
  "Acteurs de l'innovation",
];

const Partners: React.FC = () => {
  return (
    <section className="py-12 border-y border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-neutral-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Partenaires actuels */}
        <p className="text-center text-sm font-medium text-gray-500 dark:text-neutral-500 mb-8 uppercase tracking-widest">
          Nos partenaires
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center mb-12 opacity-80">
          {partners.map((partner) => (
            <div key={partner.name} className="group">
              <span className="text-lg md:text-xl font-bold text-gray-400 dark:text-neutral-600 group-hover:text-brand-pink dark:group-hover:text-brand-pink transition-colors cursor-default font-mono">
                {partner.logoText}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-10" />

        {/* Types de partenaires recherchés */}
        <p className="text-center text-sm font-medium text-gray-500 dark:text-neutral-500 mb-6 uppercase tracking-widest">
          Nous cherchons à collaborer avec
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {partnershipTypes.map((type) => (
            <span
              key={type}
              className="px-4 py-2 rounded-full border border-brand-pink/30 text-brand-pink text-sm font-medium bg-brand-pink/5 hover:bg-brand-pink/10 transition-colors cursor-default"
            >
              {type}
            </span>
          ))}
        </div>

        {/* CTA partenariat */}
        <p className="text-center text-sm text-gray-500 dark:text-neutral-500 mt-6">
          Intéressé ?{' '}
          <a href="mailto:contact@afritechelles.cm" className="text-brand-pink font-semibold hover:underline">
            Contactez-nous
          </a>
        </p>

      </div>
    </section>
  );
};

export default Partners;