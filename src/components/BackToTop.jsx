"use client";

import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Handle visibility of the back-to-top button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when user scrolls down 300px
            const shouldBeVisible = window.scrollY > 300;
            if (shouldBeVisible !== isVisible) {
                setIsVisible(shouldBeVisible);
            }
        };

        // Initial check
        toggleVisibility();

        // Add event listener
        window.addEventListener('scroll', toggleVisibility);

        // Clean up event listener
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [isVisible]);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Only render the button when it should be visible
    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
            <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="w-12 h-12 rounded-full bg-teal-bright text-white flex items-center justify-center shadow-lg
                hover:bg-primary-600 transition-colors duration-300 back-to-top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </div>
    );
}