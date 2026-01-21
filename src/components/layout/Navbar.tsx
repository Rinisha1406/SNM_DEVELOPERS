import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'NRI', path: '/nri' },
        { name: 'Careers', path: '/careers' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'News', path: '/news' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col ${isScrolled ? 'shadow-sm' : ''}`}>
            {/* Top Bar removed as per request */}

            <nav
                className={`w-full transition-all duration-300 ${isScrolled ? 'glass-nav py-3 bg-white/95 backdrop-blur-md' : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <Logo className={`h-16 transition-transform group-hover:scale-105 ${isScrolled ? '' : 'brightness-0 invert'}`} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium tracking-wide hover:text-gold-400 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <Phone size={16} />
                            <span>Enquire Now</span>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 hover:text-forest-600"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-forest-700 text-white text-center py-3 rounded-lg font-semibold mt-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Enquire Now
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};
