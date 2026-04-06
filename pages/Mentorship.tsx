import React, { useState } from 'react';
import { Search, Briefcase } from 'lucide-react';
import { Mentor } from '../types';

// ✏️ Remplace ici avec les vraies mentores
const mockMentors: Mentor[] = [
    {
        id: '1',
        name: 'Nom Prénom',
        role: 'Poste',
        company: 'Entreprise',
        expertise: ['Frontend', 'React'],
        bio: 'Bio courte de la mentore en 1 à 2 phrases maximum.',
        imageUrl: 'https://picsum.photos/150/150?random=1',
        available: true
    },
    {
        id: '2',
        name: 'Nom Prénom',
        role: 'Poste',
        company: 'Entreprise',
        expertise: ['Data', 'Python'],
        bio: 'Bio courte de la mentore en 1 à 2 phrases maximum.',
        imageUrl: 'https://picsum.photos/150/150?random=2',
        available: true
    },
    {
        id: '3',
        name: 'Nom Prénom',
        role: 'Poste',
        company: 'Entreprise',
        expertise: ['UI/UX', 'Product'],
        bio: 'Bio courte de la mentore en 1 à 2 phrases maximum.',
        imageUrl: 'https://picsum.photos/150/150?random=3',
        available: false
    },
];

const categories = ['Tous', 'Frontend', 'Backend', 'Data', 'UI/UX', 'Product', 'Mobile', 'Cloud'];

const Mentorship: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');

    const filteredMentors = mockMentors.filter(mentor => {
        const matchesSearch =
            mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mentor.role.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === 'Tous' || mentor.expertise.includes(selectedCategory);
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-24 pb-16 bg-gray-50 dark:bg-brand-black min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-pink">Programme de mentorat</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                        Trouvez votre <span className="text-brand-pink">Mentor</span>
                    </h1>
                    <p className="text-gray-600 dark:text-neutral-400 text-lg">
                        Connectez-vous avec des professionnelles expérimentées prêtes à vous guider dans votre parcours académique et professionnel.
                    </p>
                </div>

                {/* Search + Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Rechercher par nom, rôle, entreprise..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-100 dark:bg-black/50 border-none rounded-xl py-3 pl-12 pr-4 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-pink outline-none"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                    selectedCategory === cat
                                        ? 'bg-brand-pink text-white'
                                        : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMentors.map(mentor => (
                        <div key={mentor.id} className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/5 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group">
                            <div className="flex items-start justify-between mb-5">
                                <div className="flex gap-4">
                                    <img
                                        src={mentor.imageUrl}
                                        alt={mentor.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-brand-pink/20"
                                    />
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">{mentor.name}</h3>
                                        <p className="text-brand-pink text-sm font-medium">{mentor.role}</p>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                                            <Briefcase size={11} />
                                            {mentor.company}
                                        </div>
                                    </div>
                                </div>
                                {mentor.available ? (
                                    <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-1 rounded-full font-bold shrink-0">
                                        Dispo
                                    </span>
                                ) : (
                                    <span className="bg-gray-100 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500 text-xs px-2 py-1 rounded-full font-bold shrink-0">
                                        Complet
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-600 dark:text-neutral-400 text-sm mb-5 line-clamp-2">
                                {mentor.bio}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {mentor.expertise.map(exp => (
                                    <span key={exp} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-300 rounded-md">
                                        {exp}
                                    </span>
                                ))}
                            </div>

                            <button className="w-full py-2.5 rounded-xl border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white font-semibold text-sm transition-colors">
                                Contacter
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredMentors.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-neutral-500 text-lg">Aucun mentor ne correspond à vos critères.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedCategory('Tous'); }}
                            className="mt-4 text-brand-pink underline"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}

                {/* CTA devenir mentore */}
                <div className="mt-16 rounded-3xl bg-gradient-to-r from-brand-pink to-brand-purple p-8 md:p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">Vous voulez devenir mentore ?</h3>
                            <p className="text-white/80 max-w-xl">
                                Partagez votre expérience et guidez la prochaine génération de femmes dans la tech. Rejoignez notre réseau de professionnelles engagées.
                            </p>
                        </div>
                        <button className="shrink-0 bg-white text-brand-pink font-bold px-7 py-3.5 rounded-xl hover:bg-pink-50 transition-colors shadow-lg whitespace-nowrap">
                            Devenir mentore
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mentorship;