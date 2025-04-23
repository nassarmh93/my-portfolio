import { FC } from 'react';
import Link from 'next/link';

// Social media links data
const socialLinks = [
    {
        href: "mailto:nassarmh93@gmail.com",
        ariaLabel: "Email Mohammad Nassar",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        href: "https://linkedin.com/in/nassarmh93",
        ariaLabel: "Mohammad Nassar's LinkedIn profile",
        isExternal: true,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
        )
    }
];

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-dark text-white py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Branding section */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Mohammad Nassar</h2>
                        <p className="text-gray mt-2">Odoo Specialist & Business Consultant</p>
                    </div>

                    {/* Social links */}
                    <div className="flex space-x-6">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                aria-label={link.ariaLabel}
                                className="text-gray hover:text-white transition-colors"
                                {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Copyright section */}
                <div className="border-t border-slate mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p>© {currentYear} Mohammad Nassar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;