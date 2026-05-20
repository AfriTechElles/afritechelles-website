import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EventItem } from '../types';

import techTalkImg from '../assets/tech-talk.png';
import workshopImg from '../assets/workshop.png';
import hackathonImg from '../assets/hackathon.png';

const events: EventItem[] = [
    {
        id: '1',
        title: 'Tech Talk: L\'IA en Afrique',
        date: '15 Oct 2024',
        location: 'Google Meet',
        type: 'Online',
        description: 'Une discussion approfondie sur les opportunités de l\'intelligence artificielle pour les startups locales.',
        imageUrl: techTalkImg
    },
    {
        id: '2',
        title: 'Workshop React Avancé',
        date: '22 Oct 2024',
        location: 'Google Meet',
        type: 'Online',
        description: 'Maîtrisez les hooks personnalisés et la gestion d\'état complexe avec Redux Toolkit.',
        imageUrl: workshopImg
    },
    {
        id: '3',
        title: 'Hackathon: Code for Her',
        date: '05 Nov 2024',
        location: 'Google Meet',
        type: 'Online',
        description: '48h pour créer des solutions numériques innovantes répondant aux défis des femmes.',
        imageUrl: hackathonImg
    }
];

const Events: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-white dark:bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Événements à venir</h1>
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