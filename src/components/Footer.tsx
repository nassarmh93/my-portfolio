import { FC } from 'react';
import Link from 'next/link';

// Social media links data
const socialLinks = [

];

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent  text-white py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/*/!* Branding section *!/*/}
                    {/*<div className="mb-6 md:mb-0">*/}
                    {/*    <h2 className="text-2xl font-bold">Mohammad Nassar</h2>*/}
                    {/*    <p className="text-gray mt-2">Odoo Specialist & Business Consultant</p>*/}
                    {/*</div>*/}

                    {/* Social links */}
                    {/*<div className="flex space-x-6">*/}
                    {/*    {socialLinks.map((link, index) => (*/}
                    {/*        <Link*/}
                    {/*            key={index}*/}
                    {/*            href={link.href}*/}
                    {/*            aria-label={link.ariaLabel}*/}
                    {/*            className="text-gray hover:text-white transition-colors"*/}
                    {/*            {...(link.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}*/}
                    {/*        >*/}
                    {/*            {link.icon}*/}
                    {/*        </Link>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </div>

                {/* Copyright section */}
                <div className="border-t border-slate/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p>© {currentYear} Mohammad Nassar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;