import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Moon, Sun } from "lucide-react";
import { PageName } from "./types";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ProgramsPage from "./pages/ProgramsPage";
import Mentorship from "./pages/Mentorship";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

const App: React.FC = () => {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [currentPage, setCurrentPage] = useState<PageName>("home");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as
            | "dark"
            | "light"
            | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle(
                "dark",
                savedTheme === "dark",
            );
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark");
    };

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return <Home onNavigate={setCurrentPage} />;
            case "about":
                return <About />;
            case "programs":
                return <ProgramsPage />;
            case "mentorship":
                return <Mentorship />;
            case "events":
                return <Events />;
            case "contact":
                return <Contact />;
            default:
                return <Home onNavigate={setCurrentPage} />;
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-brand-black text-gray-900 dark:text-white font-sans selection:bg-brand-pink selection:text-white transition-colors duration-300 flex flex-col">
            <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />

            <main className="flex-grow">{renderPage()}</main>

            <Footer />

            {/* Floating Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 bg-white dark:bg-neutral-800 text-brand-pink border border-gray-200 dark:border-neutral-700"
                aria-label="Toggle Theme"
            >
                {theme === "dark" ? (
                    <Sun size={24} className="fill-brand-pink" />
                ) : (
                    <Moon size={24} className="fill-brand-pink" />
                )}
            </button>
        </div>
    );
};

export default App;
