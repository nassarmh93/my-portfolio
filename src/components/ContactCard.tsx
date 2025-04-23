"use client";

import { ReactNode, useState } from 'react';
import Link from 'next/link';

interface ContactCardProps {
    title: string;
    detail?: string; // Making detail optional but not using it
    link: string;
    icon: ReactNode;
    isExternal?: boolean;
    isDownload?: boolean;
    animationDelay?: number;
}

export default function ContactCard({
                                        title,
                                        // Removed detail parameter completely since it's not used
                                        link,
                                        icon,
                                        isExternal = false,
                                        isDownload = false,
                                        animationDelay = 0
                                    }: ContactCardProps) {
    const [isLoading, setIsLoading] = useState(false);

    const animationStyle = {
        animationDelay: `${animationDelay}ms`
    };

    const handleClick = () => {
        if (isDownload) {
            setIsLoading(true);

            // Simulate download delay (in a real implementation, this would be handled by the browser)
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    };

    return (
        <Link
            href={link}
            onClick={handleClick}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            {...(isDownload ? { download: "" } : {})}
            className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-white dark:bg-slate rounded-lg shadow-md hover:shadow-lg transition text-center w-full h-full animate-on-scroll fade-in-up group hover:translate-y-[-4px]"
            style={animationStyle}
        >
            <div className="text-teal-bright mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
            <h3 className="font-semibold text-slate-dark dark:text-white text-sm sm:text-base md:text-lg">
                {isLoading ? "Preparing..." : title}
            </h3>
        </Link>
    );
}