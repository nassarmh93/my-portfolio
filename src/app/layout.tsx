import './globals.css';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

// Define font with multiple weights
const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Define metadata for the page
export const metadata = {
    title: 'Mohammad Nassar | Portfolio',
    description: 'Business-focused Odoo specialist with technical expertise in ERP implementation and integration',
    keywords: 'Odoo, ERP, Business Consultant, Mohammad Nassar, Python, API Integration',
    author: 'Mohammad Nassar',
    openGraph: {
        title: 'Mohammad Nassar | Odoo Specialist & Business Consultant',
        description: 'Bridging business needs with technical solutions - specializing in Odoo implementations',
        type: 'website',
        locale: 'en_US',
    },
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${poppins.className} font-sans`}>
        {/* Background gradient mesh */}
        <div className="gradient-mesh fixed inset-0 -z-10 opacity-30"></div>

        {/* Main navigation */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Footer */}
        <Footer />

        {/* Back to top button */}
        <BackToTop />
        </body>
        </html>
    );
}