"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import InteractiveGridBackground from './InteractiveGridBackground';

interface HeroSectionProps {
    name: string;
    title: string;
    description: string;
}

export default function HeroSection({
                                        name = "Mohammad Nassar",
                                        title = "Odoo Specialist & Business Consultant",
                                        description = "Bridging business needs with technical solutions - specializing in Odoo implementations and transitioning to cybersecurity."
                                    }: HeroSectionProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsLoaded(true);

        // Only animate tech cards, not the profile picture
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;

            const cards = heroRef.current.querySelectorAll('.tech-card');
            const rect = heroRef.current.getBoundingClientRect();

            // Calculate mouse position relative to container center
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Normalize mouse position (-1 to 1)
            const normalizedX = (e.clientX - centerX) / (rect.width / 2);
            const normalizedY = (e.clientY - centerY) / (rect.height / 2);

            // Apply movement to cards based on mouse position
            cards.forEach((card, index) => {
                const factor = 0.05 * (index + 1);
                const translateX = normalizedX * 30 * factor;
                const translateY = normalizedY * 20 * factor;
                const rotateX = -normalizedY * 15 * factor;
                const rotateY = normalizedX * 15 * factor;

                (card as HTMLElement).style.transform = `
          translate3d(${translateX}px, ${translateY}px, 0)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const techStack = [
        { name: "Python", color: "from-teal-bright to-blue-500" },
        { name: "Odoo", color: "from-green-500 to-teal-bright" },
        { name: "JavaScript", color: "from-yellow-500 to-amber-600" },
        { name: "SQL", color: "from-blue-600 to-indigo-700" },
    ];

    const services = [
        {
            title: "ERP Implementation",
            description: "Full-cycle Odoo ERP setup and implementation tailored to your business needs",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
        },
        {
            title: "System Integration",
            description: "Connect your Odoo system with other business applications for seamless data flow",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Business Analysis",
            description: "In-depth analysis of business processes to optimize operational efficiency",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
    ];

    return (
        <div ref={heroRef} className="relative min-h-screen overflow-hidden">
            {/* Interactive background */}
            <div className="absolute inset-0 -z-10 opacity-70">
                <InteractiveGridBackground />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20 pb-16 md:pt-28 md:pb-24">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    {/* Content Section */}
                    <div className={`w-full lg:w-1/2 mt-12 lg:mt-0 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                        <div className="max-w-lg mx-auto lg:mx-0">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-bright to-blue-500">
                                {name}
                            </h1>

                            <h2 className="text-xl md:text-2xl font-medium mb-6 text-teal-bright">
                                {title}
                                <span className="block w-24 h-1 bg-gradient-to-r from-teal to-teal-bright mt-2"></span>
                            </h2>

                            <p className="text-slate dark:text-light mb-8 text-lg  bg-white/0 dark:bg-slate/10 p-4 rounded-lg border border-white/0 dark:border-slate/20">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <Link
                                    href="#projects"
                                    className="tech-btn flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal to-teal-bright text-white relative overflow-hidden"
                                >
                                    <span className="relative z-10">View Projects</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5l7 7-7 7" />
                                    </svg>
                                    <span className="absolute inset-0 bg-gradient-to-r from-teal-bright to-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                                </Link>

                                <Link
                                    href="#contact"
                                    className="tech-btn flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10  border border-white/0 dark:border-slate/0 hover:bg-white/0 transition-colors duration-300"
                                >
                                    <span>Contact Me</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Tech Stack indicators */}
                            <div className="mt-12 flex items-center gap-4">
                                <span className="text-gray dark:text-light text-sm">Tech Stack:</span>
                                <div className="flex flex-wrap gap-3">
                                    {["Python", "Odoo", "JavaScript", "SQL"].map((tech, index) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-medium py-1 px-3 rounded-full bg-light text-teal transition-transform duration-300 transform hover:scale-110"
                                            style={{
                                                transitionDelay: `${index * 100}ms`,
                                                opacity: isLoaded ? 1 : 0,
                                                transform: isLoaded ? 'translateY(0)' : 'translateY(10px)'
                                            }}
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className={`w-full lg:w-1/2 flex flex-col items-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                        {/* Profile Image without 3D effect */}
                        <div className="profile-container relative">
                            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden shadow-2xl border-4 border-teal-bright">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal to-blue-500"></div>
                                <Image
                                    src="/profile.png"
                                    alt="Mohammad Nassar"
                                    fill
                                    sizes="(max-width: 768px) 256px, 320px"
                                    priority
                                    style={{objectFit: 'cover'}}
                                    className="relative z-10"
                                />

                                {/* Animated rings */}
                                <div className="absolute inset-0 z-20">
                                    <div className="absolute inset-0 rounded-full border-8 border-white/0 animate-pulse"></div>
                                    <div className="absolute inset-4 rounded-full border-4 border-white/15 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="absolute inset-8 rounded-full border-2 border-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-teal to-blue-500 rounded-full p-3 shadow-lg animate-float">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="absolute -bottom-2 -left-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full p-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}