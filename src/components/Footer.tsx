import { FC } from 'react';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent  text-white py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center"/>

                {/* Copyright section */}
                <div className="border-t border-slate/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p>© {currentYear} Mohammad Nassar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;