"use client";

import { ReactNode, useState } from 'react';
import Link from 'next/link';

interface ContactCardProps {
    title: string;
    detail: string;
    link: string;
    icon: ReactNode;
    isExternal?: boolean;
    isDownload?: boolean;
    animationDelay?: number;
}

export default function ContactCard({
                                        title,
                                        detail,
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
            className="flex flex-col items-center p-6 bg-white dark:bg-slate rounded-lg shadow-md hover:shadow-lg transition text-center w-full animate-on-scroll fade-in-up"
            style={animationStyle}
        >
            <div className="text-teal-bright mb-3">
                {icon}
            </div>
            <h3 className="font-semibold text-slate-dark dark:text-white mb-1">
                {isLoading ? "Preparing..." : title}
            </h3>
            <p className="text-teal-bright">{detail}</p>
        </Link>
    );
}