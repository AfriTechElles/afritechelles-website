import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white dark:bg-transparent transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-pink/20 dark:bg-brand-pink/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-purple/20 dark:bg-brand-purple/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-5xl mx-auto px-6 text-center z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/10 dark:bg-white/5 border border-brand-pink/20 dark:border-white/10 text-brand-deepPink dark:text-brand-lightPink text-sm font-medium mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                    </span>
                    La communauté qui propulse les femmes africaines dans la tech
                </div>

                {/* Main Title */}
                {/* <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
                    L'Avenir de la Tech <br />
                    s'écrit au <span className="gradient-text">Féminin</span>.
                </h1> */}

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                    AfriTechElles rassemble, forme et propulse les femmes
                    camerounaises dans l'écosystème technologique. Du code au
                    leadership, grandissez avec nous.
                </p>

                {/* CTA */}
                <button className="mx-auto mb-6 bg-brand-pink text-white px-6 py-3 rounded-full font-bold hover:bg-brand-deepPink transition-all shadow-lg shadow-brand-pink/20 flex items-center gap-2">
                    Rejoindre maintenant
                    <ArrowRight size={18} />
                </button>

                {/* Social Proof */}
                <div className="flex flex-col items-center gap-4 text-sm text-gray-500 dark:text-neutral-500">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <img
                                key={i}
                                src={`https://picsum.photos/100/100?random=${i + 20}`}
                                alt="Membre"
                                className="w-12 h-12 rounded-full border-4 border-white dark:border-brand-black object-cover shadow-md"
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <p>
                            <span className="text-gray-900 dark:text-white font-bold">
                                200+
                            </span>{" "}
                            femmes nous font confiance
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;