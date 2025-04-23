"use client";

import React from 'react';

interface EmailButtonProps {
    animationDelay?: number;
}

export default function EmailButton({ animationDelay = 0 }: EmailButtonProps) {
    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent default to handle it ourselves

        try {
            console.log("Email button clicked");

            // Direct approach - this is the most reliable way to trigger the email client
            window.location.href = "mailto:nassarmh93@gmail.com";

            // No secondary approach needed - the above should work in most browsers
        } catch (error) {
            console.error("Error opening email client:", error);
            // If all else fails, show the email address to the user
            alert("Please email me directly at: nassarmh93@gmail.com");
        }
    };

    return (
        <a
            href="mailto:nassarmh93@gmail.com"
            onClick={handleEmailClick}
            className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-white dark:bg-slate rounded-lg shadow-md hover:shadow-lg transition text-center w-full h-full animate-on-scroll fade-in-up group hover:translate-y-[-4px]"
            style={{ animationDelay: `${animationDelay}ms` }}
        >
            <div className="text-teal-bright mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-teal-bright mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <h3 className="font-semibold text-slate-dark dark:text-white text-sm sm:text-base md:text-lg">
                Email Me
            </h3>
        </a>
    );
}