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
    onClick={() => window.open('https://forms.gle/d6Us6Ab26h2jnkt99', '_blank')}
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