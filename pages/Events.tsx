import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EventItem } from '../types';

const events: EventItem[] = [
    {
        id: '1',
        title: 'Journée "Découverte des métiers du numérique"',
        date: 'À venir',
        location: 'Cameroun',
        type: 'In-Person',
        description: 'Une journée d\'orientation avec des intervenants cyber, dev, data et cloud pour aider les filles à trouver leur voie dans la tech. Témoignages, Q&A et mini atelier pratique.',
        imageUrl: 'https://picsum.photos/600/300?random=20'
    },
    {
        id: '2',
        title: 'Networking & Career Day',
        date: 'À venir',
        location: ' Cameroun',
        type: 'In-Person',
        description: 'Atelier CV, simulations d\'entretien, sessions de networking et relecture personnalisée des CV pour préparer les filles au monde professionnel.',
        imageUrl: 'https://picsum.photos/600/300?random=21'
    },
    {
        id: '4',
        title: 'Action Sociale – Santé Mentale & Orphelinat',
        date: 'À venir',
        location: 'Cameroun',
        type: 'In-Person',
        description: 'Visite d\'un orphelinat local combinée à une sensibilisation sur la santé mentale : discussions ouvertes et activités éducatives adaptées aux enfants.',
        imageUrl: 'https://picsum.photos/600/300?random=23'
    },
    {
        id: '5',
        title: 'Campagne Fundraising, Fournitures Scolaires',
        date: 'Avant septembre 2025',
        location: 'En ligne + terrain',
        type: 'Online',
        description: 'Campagne de collecte de fonds pour offrir des fournitures scolaires à des filles dans le besoin avant la rentrée. Dons, partenariats et campagnes en ligne.',
        imageUrl: 'https://picsum.photos/600/300?random=24'
    },
];

const Events: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-white dark:bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Événements à venir</h1>
        <p className="text-gray-500 dark:text-neutral-500 mb-12">Des moments ponctuels pour se retrouver, agir et avancer ensemble.</p>

        <div className="grid lg:grid-cols-2 gap-8">
            {events.map(event => (
                <div key={event.id} className="flex flex-col md:flex-row bg-gray-50 dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 hover:border-brand-pink/30 transition-all">
                    <div className="w-full md:w-48 h-48 md:h-auto relative">
                        <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-black px-3 py-1 rounded-lg text-xs font-bold uppercase">
                            {event.type}
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-brand-pink font-semibold mb-2">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{event.title}</h3>
                        <p className="text-gray-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="flex items-center gap-1 text-xs text-gray-500"><MapPin size={12} /> {event.location}</span>
                            <button className="text-sm font-bold text-brand-pink hover:underline">S'inscrire</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Events;