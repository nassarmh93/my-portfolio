"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import InteractiveBlob from './InteractiveBlob';
import ParticlesBackground from './ParticlesBackground';

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
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsLoaded(true);

        const handleMouseMove = (e: MouseEvent) => {
            if (!textRef.current) return;

            const { left, top, width, height } = textRef.current.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            textRef.current.style.transform = `
        perspective(1000px)
        rotateX(${y * 3}deg)
        rotateY(${x * -3}deg)
        translateZ(10px)
      `;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="relative min-h-screen pt-20 pb-20 md:py-32 overflow-hidden flex items-center">
            {/* Particle background */}
            <div className="absolute inset-0 -z-10">
                <ParticlesBackground count={30} colors={["#124E66", "#748092", "#D3D9D4"]} />
            </div>

            {/* Interactive blob background */}
            <div className="absolute inset-0 -z-20">
                <InteractiveBlob
                    size={900}
                    colors={["#124E66", "#2E3944", "#748092"]}
                    className="w-full h-full"
                />
            </div>

            {/* Content container */}
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Text content with 3D effect */}
                    <div
                        ref={textRef}
                        className={`md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 transform ${
                            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transition: 'transform 0.1s ease' }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-dark dark:text-white mb-4">
                            <span className="block mb-2">{name}</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-teal-bright font-medium mb-6 relative">
                            {title}
                            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-teal"></span>
                        </h2>

                        <p className="text-slate dark:text-light mb-8 max-w-lg">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="btn-primary flex items-center gap-2"
                            >
                                <span>View Projects</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>

                            <Link
                                href="#contact"
                                className="btn-secondary flex items-center gap-2"
                            >
                                <span>Contact Me</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                                </svg>
                            </Link>
                        </div>

                        {/* Tech stack indicators */}
                        <div className="mt-12 flex items-center gap-4">
                            <span className="text-gray dark:text-light text-sm">Tech Stack:</span>
                            <div className="flex flex-wrap gap-3">
                                {["Python", "Odoo", "JavaScript", "SQL"].map((tech, index) => (
                                    <span
                                        key={tech}
                                        className={`text-xs font-medium py-1 px-3 rounded-full bg-light text-teal transition-transform duration-300 transform hover:scale-110`}
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

                    {/* Profile image or avatar */}
                    <div className={`md:w-1/2 flex justify-center transition-all duration-1000 transform ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl card-3d">
                            <div className="absolute inset-0 bg-linear-120 from-teal to-slate"></div>
                            {/* Uncomment and add your profile image once you have one */}
                            {/* <Image
                src="/profile.jpg"
                alt="Mohammad Nassar"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                priority
                style={{objectFit: 'cover'}}
              /> */}

                            {/* Decorative elements */}
                            <div className="absolute inset-0">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white">
                                        MN
                                    </div>

                                    {/* Animated rings */}
                                    <div className="absolute inset-0 animate-pulse opacity-20 border-8 border-white rounded-full"></div>
                                    <div className="absolute inset-4 animate-pulse opacity-10 border-4 border-white rounded-full" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="absolute inset-8 animate-pulse opacity-5 border-2 border-white rounded-full" style={{ animationDelay: '1s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}>
                    <div className="flex flex-col items-center">
                        <span className="text-gray dark:text-light text-sm mb-2">Scroll to explore</span>
                        <div className="w-6 h-10 border-2 border-gray dark:border-light rounded-full flex justify-center">
                            <div className="w-1.5 h-1.5 bg-teal rounded-full animate-bounce mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}