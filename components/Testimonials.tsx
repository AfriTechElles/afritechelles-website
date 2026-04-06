import React from "react";
import { Testimonial } from "../types";
import { Star } from "lucide-react";

const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Maeko Iwasaki",
        role: "Alumni",
        company: "SheCodes",
        quote: "Super facile à apprendre et très engageant. J'ai adoré avoir des défis tout au long du parcours.",
        imageUrl: "https://picsum.photos/100/100?random=50",
    },
    {
        id: "2",
        name: "Adriana Vanegas",
        role: "Specialist",
        company: "People Services",
        quote: "C'était très utile et le rythme était approprié pour le contenu fourni ! J'ai vraiment apprécié.",
        imageUrl: "https://picsum.photos/100/100?random=51",
    },
    {
        id: "3",
        name: "Alicia McPhoy",
        role: "Analyst",
        company: "Amazon",
        quote: "J'ai vraiment aimé l'atelier débutant, qui enseigne toutes les bases nécessaires.",
        imageUrl: "https://picsum.photos/100/100?random=52",
    },
    {
        id: "4",
        name: "Sandra Volk",
        role: "Specialist",
        company: "Microsoft",
        quote: "Une excellente opportunité pour chaque femme qui veut décrocher une carrière dans la tech.",
        imageUrl: "https://picsum.photos/100/100?random=53",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-neutral-900/20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Ce que disent nos membres
                    </h2>
                    <p className="text-gray-600 dark:text-neutral-400">
                        Restez connectée et apprenez les compétences
                        essentielles.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="bg-white dark:bg-white/[0.03] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-brand-pink/20 hover:shadow-lg dark:hover:bg-white/[0.05] transition-all flex flex-col md:flex-row gap-6 items-start shadow-sm dark:shadow-none"
                        >
                            <img
                                src={t.imageUrl}
                                alt={t.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 dark:border-white/10 shrink-0"
                            />

                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="text-gray-900 dark:text-white font-bold text-lg">
                                            {t.name}
                                        </h4>
                                        <p className="text-gray-500 dark:text-neutral-500 text-sm">
                                            {t.role} chez {t.company}
                                        </p>
                                    </div>
                                    {/*<div className="flex gap-0.5">
                        {[1,2,3,4,5].map(star => (
                            <Star key={star} size={14} className="fill-yellow-500 text-yellow-500" />
                        ))}
                    </div>*/}
                                </div>

                                <p className="text-gray-600 dark:text-neutral-300 text-sm leading-relaxed mt-4">
                                    "{t.quote}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
