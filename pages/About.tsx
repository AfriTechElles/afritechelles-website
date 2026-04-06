import React from 'react';
import { Target, Users, Eye, Heart, Zap, Shield, Star, Lightbulb, HandHeart } from 'lucide-react';

const values = [
  { icon: Heart, label: 'Inclusion', description: 'Garantir un accès équitable à toutes, sans exception.' },
  { icon: HandHeart, label: 'Solidarité', description: 'Avancer ensemble et se soutenir mutuellement.' },
  { icon: Star, label: 'Excellence', description: 'Viser la qualité et l\'impact dans chaque initiative.' },
  { icon: Lightbulb, label: 'Innovation', description: 'Oser créer, tester et transformer.' },
  { icon: Zap, label: 'Engagement', description: 'Agir concrètement pour le changement.' },
];


const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Hero Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
           Qui <span className="gradient-text">sommes-nous</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-neutral-400 leading-relaxed">
            AfriTechElles est une communauté dynamique et engagée qui œuvre pour l'inclusion, la formation et la valorisation des femmes et des jeunes filles dans le domaine des technologies au Cameroun et en Afrique.
          </p>
        </div>

        {/* ── À propos + image ── */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
            <img src="https://picsum.photos/800/800?random=101" alt="About us" className="w-full h-full object-cover" />
            {/* Slogan overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-bold italic text-lg leading-snug">
                "L'espace où tes idées sont entendues, valorisées et soutenues."
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-brand-purple/10 rounded-xl text-brand-purple">
                  <Eye size={22} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Notre Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                Faire émerger une génération de femmes africaines leaders dans le numérique, capables d'innover, d'entreprendre et de transformer durablement leurs communautés grâce à la technologie.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-brand-pink/10 rounded-xl text-brand-pink">
                  <Target size={22} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Notre Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
                Démocratiser l'accès à la technologie pour les femmes et les jeunes filles, tout en les accompagnant dans leur développement personnel, académique et professionnel.
              </p>
              <ul className="space-y-2">
                {[
                  'Réduire les inégalités de genre dans le secteur technologique',
                  'Offrir des opportunités d\'apprentissage accessibles et adaptées',
                  'Créer un cadre bienveillant d\'expression, de partage et de collaboration',
                  'Encourager l\'excellence et l\'audace chez les femmes dans la tech',
                  'Accompagner l\'émergence de projets innovants à fort impact social',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-neutral-400">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Valeurs ── */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-pink">Ce qui nous guide</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Nos Valeurs</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.label} className="group bg-gray-50 dark:bg-neutral-900/60 border border-gray-100 dark:border-white/5 hover:border-brand-pink/30 rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="w-10 h-10 bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{val.label}</h4>
                  <p className="text-xs text-gray-500 dark:text-neutral-500 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>


        {/* ── Équipe ── */}
        <div>
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-pink">Les visages derrière le projet</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">L'Équipe Dirigeante</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center group">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-lg mb-4">
                  <img
                    src={`https://picsum.photos/200/200?random=${100 + i}`}
                    alt="Team Member"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white">Sarah Doe</h4>
                <p className="text-brand-pink text-sm font-medium">Co-Fondatrice</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;