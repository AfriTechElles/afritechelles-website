import React from 'react';
import { ArrowRight, Calendar, GraduationCap, School, Users, Code } from 'lucide-react';

const highlights = [
  { icon: Calendar, label: 'Un Mois, Une Tech' },
  { icon: GraduationCap, label: 'Programme de Bourses' },
  { icon: School, label: 'Club Tech Lycées & Universités' },
  { icon: Users, label: 'Mentorat & Accompagnement' },
  { icon: Code, label: 'Formations & Bootcamps' },
];

const Programs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-950/50 transition-colors duration-300" id="programs">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Tracez votre chemin <span className="text-brand-pink">vers le succès</span>
        </h2>
        <p className="text-gray-600 dark:text-neutral-400 text-lg max-w-xl mx-auto mb-12">
          5 programmes conçus pour vous accompagner à chaque étape — de la découverte jusqu'à l'insertion professionnelle.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/5 rounded-full text-sm font-medium text-gray-700 dark:text-neutral-300 shadow-sm"
              >
                <Icon size={15} className="text-brand-pink" />
                {item.label}
              </div>
            );
          })}
        </div>

        <button className="inline-flex items-center gap-2 bg-brand-pink text-white px-7 py-3.5 rounded-full font-bold hover:bg-brand-deepPink transition-colors shadow-lg shadow-brand-pink/20">
          Voir tous nos programmes
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default Programs;