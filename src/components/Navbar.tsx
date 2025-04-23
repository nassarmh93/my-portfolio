"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(prevState => !prevState);
    };

    // Close mobile menu
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    // Handle scroll behavior for navbar
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Check which section is currently in view
            const sections = ['about', 'projects', 'contact'];
            let currentSection = "";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-500 ${
                scrolled ? 'bg-transparent shadow-md py-2' : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
                {/* Logo/Name */}
                <Link
                    href="/"
                    className="font-bold text-xl text-teal-bright relative group"
                >
                    <span className="relative z-10">Mohammad Nassar</span>
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-teal origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative font-medium transition-colors duration-300 
                ${activeSection === link.href.replace('/#', '')
                                ? 'text-teal-bright'
                                : scrolled ? 'text-slate-dark dark:text-light hover:text-teal-bright' : 'text-slate-dark dark:text-light hover:text-teal-bright'
                            }`}
                        >
              <span className="relative">
                {link.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal transform origin-left transition-transform duration-300 
                  ${activeSection === link.href.replace('/#', '') ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className={`p-2 rounded-md transition-colors duration-300 ${
                            scrolled ? 'text-slate-dark dark:text-light hover:text-teal' : 'text-slate-dark dark:text-light hover:text-teal'
                        }`}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        <div className="w-6 flex flex-col items-end justify-center gap-1.5 relative">
              <span
                  className={`block h-0.5 bg-current transition-all duration-300 ease-out ${
                      mobileMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'
                  }`}
              ></span>
                            <span
                                className={`block h-0.5 bg-current transition-all duration-300 ease-out ${
                                    mobileMenuOpen ? 'w-0 opacity-0' : 'w-4'
                                }`}
                            ></span>
                            <span
                                className={`block h-0.5 bg-current transition-all duration-300 ease-out ${
                                    mobileMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'
                                }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-transparent  shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
                    mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobileMenu}
                            className={`relative py-2 px-4 rounded-lg transition-all duration-300 ${
                                activeSection === link.href.replace('/#', '')
                                    ? 'text-teal bg-white/10 dark:bg-slate-800/10'
                                    : 'text-slate-dark dark:text-light hover:text-teal hover:bg-white/10 dark:hover:bg-slate-800/10'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}