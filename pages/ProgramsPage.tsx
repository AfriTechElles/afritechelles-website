import React from 'react';
import { Code, Users, GraduationCap, Calendar, School } from 'lucide-react';

const ProgramsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-white dark:bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
             Nos <span className="text-brand-pink">Programmes</span>
           </h1>
           <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
             Des programmes récurrents et structurés pour accompagner les femmes à chaque étape  de la découverte jusqu'à l'insertion professionnelle.
           </p>
        </div>

        <div className="grid gap-12">

            {/* Programme 1 — Un Mois Une Tech */}
            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-gray-100 dark:border-white/5">
                <div className="w-full md:w-1/3 h-64 bg-brand-pink/10 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-24 h-24 text-brand-pink opacity-50" />
                </div>
                <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-brand-pink/10 text-brand-pink rounded-full text-xs font-bold mb-4">MENSUEL</span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Un Mois, Une Tech</h3>
                    <p className="text-gray-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        Chaque mois, AfriTechElles explore une technologie différente : ateliers pratiques, ressources, défis et projets. Un rythme accessible pour apprendre sans se noyer.
                    </p>

                    <button className="bg-brand-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                        Rejoindre le programme
                    </button>
                </div>
            </div>

            {/* Programme 2 — Bourses */}
            <div className="flex flex-col md:flex-row-reverse gap-8 bg-gray-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-gray-100 dark:border-white/5">
                <div className="w-full md:w-1/3 h-64 bg-brand-purple/10 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-24 h-24 text-brand-purple opacity-50" />
                </div>
                <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-bold mb-4">BOURSES</span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Programme de Bourses</h3>
                    <p className="text-gray-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        AfriTechElles identifie, sélectionne et accompagne 4 candidates prometteuses dans leur candidature à des bourses nationales et internationales dans les filières STEM.
                    </p>
                    <ul className="space-y-2 mb-8 text-gray-600 dark:text-neutral-400">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full"></div> Sélection de 4 candidates par cycle</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full"></div> Suivi personnalisé des candidatures</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full"></div> Mentorat individuel & aide aux dossiers</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-purple rounded-full"></div> Deadline cible : juillet</li>
                    </ul>
                    <button className="bg-brand-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                        Postuler maintenant
                    </button>
                </div>
            </div>

            {/* Programme 3 — Club Tech */}
            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-gray-100 dark:border-white/5">
                <div className="w-full md:w-1/3 h-64 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                    <School className="w-24 h-24 text-emerald-500 opacity-50" />
                </div>
                <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full text-xs font-bold mb-4">ÉDUCATION</span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Club Tech dans les Lycées & Universités</h3>
                    <p className="text-gray-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        Créer des clubs AfriTechElles dans les établissements scolaires pour initier les filles à la tech, les connecter à la communauté et révéler les talents dès le plus jeune âge.
                    </p>
                    <ul className="space-y-2 mb-8 text-gray-600 dark:text-neutral-400">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Identifier des lycées et universités cibles</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Désigner une responsable du club</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> 1 session par an : initiation, talk, coaching</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Intégration progressive à la communauté</li>
                    </ul>
                    <button className="bg-brand-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                        Lancer un club
                    </button>
                </div>
            </div>

            {/* Programme 4 — Mentorat */}
            <div className="flex flex-col md:flex-row-reverse gap-8 bg-gray-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-gray-100 dark:border-white/5">
                <div className="w-full md:w-1/3 h-64 bg-sky-500/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-sky-500 opacity-50" />
                </div>
                <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400 rounded-full text-xs font-bold mb-4">MENTORAT</span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mentorat & Accompagnement</h3>
                    <p className="text-gray-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        Un programme de mentorat continu pour guider les participantes dans leur parcours académique et professionnel, et les aider à saisir des opportunités concrètes.
                    </p>
                    <ul className="space-y-2 mb-8 text-gray-600 dark:text-neutral-400">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-sky-500 rounded-full"></div> Mise en relation mentore / mentorée</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-sky-500 rounded-full"></div> Sessions régulières de suivi</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-sky-500 rounded-full"></div> Orientation : bourses, stages, emplois</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-sky-500 rounded-full"></div> Réseau actif de professionnelles engagées</li>
                    </ul>
                    <button className="bg-brand-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                        Trouver un mentor
                    </button>
                </div>
            </div>

            {/* Programme 5 — Formation */}
            <div className="flex flex-col md:flex-row gap-8 bg-gray-50 dark:bg-neutral-900/50 p-8 rounded-3xl border border-gray-100 dark:border-white/5">
                <div className="w-full md:w-1/3 h-64 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                    <Code className="w-24 h-24 text-orange-500 opacity-50" />
                </div>
                <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-xs font-bold mb-4">FORMATION</span>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Formations & Bootcamps Techniques</h3>
                    <p className="text-gray-600 dark:text-neutral-400 mb-6 leading-relaxed">
                        Des formations intensives pour acquérir des compétences techniques réelles en développement web, data science, cybersécurité et design.
                    </p>
                    <ul className="space-y-2 mb-8 text-gray-600 dark:text-neutral-400">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Bootcamp Fullstack Web (React, Node.js)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Initiation à la data science avec Python</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Ateliers design UI/UX</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Projets réels + revue de code + démo day</li>
                    </ul>
                    <button className="bg-brand-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
                        Candidater maintenant
                    </button>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;