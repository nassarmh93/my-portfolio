import { ReactNode } from 'react';

interface SectionHeadingProps {
    children: ReactNode;
    className?: string;
    centered?: boolean;
}

export default function SectionHeading({
                                           children,
                                           className = '',
                                           centered = true
                                       }: SectionHeadingProps) {
    return (
        <h2 className={`text-3xl font-bold mb-12 ${centered ? 'text-center' : ''} ${className} animate-on-scroll fade-in-up text-slate-dark dark:text-white`}>
            {children}
        </h2>
    );
}