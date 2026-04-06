import React from "react";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Programs from "../components/Programs";
import Impact from "../components/Impact";
import Testimonials from "../components/Testimonials";
import { ArrowRight, User } from "lucide-react";
import { PageName } from "../types";

interface HomeProps {
    onNavigate: (page: PageName) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    return (
        <>
            <Hero />
            <Partners />

            {/* Purple Gradient CTA Strip */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-violet-700 to-fuchsia-600 shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
                            <User className="text-white w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                                Rejoignez le mouvement
                            </h3>
                            <p className="text-white/70 text-sm italic mb-2">
                                L'espace où tes idées sont entendues, valorisées et soutenues.
                            </p>
                            <p className="text-white/80 font-medium">
                                Contactez notre équipe :{" "}
                                <span className="text-white font-bold">
                                    afritechelles@gmail.com
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 w-full md:w-auto">
                        <button
                            onClick={() => onNavigate("contact")}
                            className="w-full md:w-auto bg-white text-brand-purple px-8 py-4 rounded-lg font-bold hover:bg-neutral-100 transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            Devenir Membre
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            <Programs />
            <Impact />
            <Testimonials />

            {/* Bottom Call to Action */}
            <section className="py-24 px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Prête à commencer ?
                </h2>
                <div className="flex justify-center gap-4">
                    <button className="bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white px-6 py-3 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors border border-gray-200 dark:border-white/10">
                        Faire un don
                    </button>
                    <button
                        onClick={() => onNavigate("contact")}
                        className="bg-brand-pink text-white px-6 py-3 rounded-full hover:bg-brand-deepPink transition-colors shadow-lg shadow-brand-pink/20"
                    >
                        S'inscrire maintenant
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;