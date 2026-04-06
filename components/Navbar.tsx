import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { PageName } from "../types";
import logo from "@/assets/logo.png";

interface NavbarProps {
    onNavigate: (page: PageName) => void;
    currentPage: PageName;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks: { name: string; page: PageName }[] = [
        { name: "Accueil", page: "home" },
        { name: "À propos", page: "about" },
        { name: "Programmes", page: "programs" },
        { name: "Mentorat", page: "mentorship" },
        { name: "Événements", page: "events" },
        { name: "Contact", page: "contact" },
    ];

    const handleNavClick = (page: PageName) => {
        onNavigate(page);
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
                isScrolled
                    ? "glass-nav py-4 shadow-lg bg-white/80 dark:bg-black/85 border-gray-200 dark:border-white/5"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleNavClick("home")}
                >
                    <div className="w-8 h-8  rounded-lg flex items-center justify-center rotate-3 hover:rotate-6 transition-transform  overflow-hidden">
                        {/*<span className="text-white font-bold text-lg">A</span>*/}
                        <img
                            src={logo}
                            alt="logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        AfriTech<span className="text-brand-pink">Elles</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.page)}
                            className={`text-sm font-medium transition-colors ${
                                currentPage === link.page
                                    ? "text-brand-pink font-bold"
                                    : "text-gray-600 dark:text-neutral-300 hover:text-brand-pink dark:hover:text-brand-pink"
                            }`}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button
                        onClick={() => handleNavClick("contact")}
                        className="bg-gray-900 dark:bg-white text-white dark:text-brand-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-pink dark:hover:bg-brand-lightPink hover:scale-105 transition-all flex items-center gap-2 shadow-md"
                    >
                        Rejoindre
                        <ChevronRight size={16} />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-900 dark:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-black border-b border-gray-200 dark:border-neutral-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-xl h-screen">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.page)}
                            className={`text-lg font-medium py-3 border-b border-gray-100 dark:border-neutral-800 text-left ${
                                currentPage === link.page
                                    ? "text-brand-pink"
                                    : "text-gray-900 dark:text-white"
                            }`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <button
                        onClick={() => handleNavClick("contact")}
                        className="bg-brand-pink text-white w-full py-3 rounded-lg font-bold mt-4 shadow-lg shadow-brand-pink/30"
                    >
                        Rejoindre la Communauté
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
