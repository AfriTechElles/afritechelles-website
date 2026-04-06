import React from "react";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    MapPin,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/10 pt-20 pb-10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl flex items-center font-bold tracking-tight text-gray-900 dark:text-white gap-3 mb-6">
                            <img
                                src={logo}
                                alt="logo"
                                className="size-8 inline object-cover"
                            />{" "}
                            AfriTech
                            <span className="text-brand-pink">Elles</span>
                        </span>
                        <p className="text-gray-600 dark:text-neutral-400 text-sm mb-6">
                            Autonomiser les femmes africaines grâce à la
                            technologie. Construire l'avenir, une ligne de code
                            à la fois.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/company/afritechelles/?viewAsMember=true"
                                className="text-gray-500 hover:text-brand-pink dark:text-neutral-400 dark:hover:text-white transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61586342116987"
                                className="text-gray-500 hover:text-brand-pink dark:text-neutral-400 dark:hover:text-white transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-6">
                            L'Association
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-neutral-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    L'équipe
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    Devenir Partenaire
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    Presse & Média
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-6">
                            Programmes
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-neutral-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    Mentorat
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    Formations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    Événements
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-brand-pink transition-colors"
                                >
                                    Bourses
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gray-900 dark:text-white font-bold mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-600 dark:text-neutral-400">
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-brand-pink" />
                                <span>afritechelles@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-brand-pink" />
                                <span>Cameroun</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="w-full bg-white dark:bg-white/10 text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 px-4 py-2 rounded text-sm hover:bg-gray-50 dark:hover:bg-white/20 transition-colors shadow-sm dark:shadow-none">
                                Nous contacter
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-neutral-600">
                    <p>
                        &copy; {new Date().getFullYear()} AfriTechElles. Tous
                        droits réservés.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Confidentialité
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
