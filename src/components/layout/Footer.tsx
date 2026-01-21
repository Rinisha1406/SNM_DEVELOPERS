import React from 'react';
import { Logo } from '../ui/Logo';
import { Facebook, Instagram, Linkedin, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-forest-950 text-white pt-10 pb-8 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                    {/* Column 1: Brand & Social */}
                    <div className="space-y-6">
                        <Link to="/" className="block">
                            <Logo className="h-16 w-auto brightness-0 invert opacity-90" />
                        </Link>
                        <p className="text-forest-100/70 text-sm leading-relaxed">
                            Building legacy since 1990. We craft premium living spaces that blend luxury with comfort in Thanjavur and Trichy.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-forest-900 border border-forest-800 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-all duration-300 text-white shadow-lg">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Quick Links</h4>
                        <ul className="space-y-3 text-forest-100/70 text-sm">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Projects', path: '/projects' },
                                { name: 'NRI Services', path: '/nri' },
                                { name: 'Careers', path: '/careers' },
                                { name: 'Blogs', path: '/blogs' },
                                { name: 'News & Media', path: '/news' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="hover:text-gold-400 hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Featured Projects */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Featured Projects</h4>
                        <ul className="space-y-3 text-forest-100/70 text-sm">
                            {[
                                { name: 'Green Valley', loc: 'Thanjavur' },
                                { name: 'Royal Gardens', loc: 'Kumbakonam' },
                                { name: 'Sunrise Estate', loc: 'Trichy' },
                                { name: 'Canal View', loc: 'Thanjavur' },
                                { name: 'Airport City', loc: 'Trichy' }
                            ].map((project) => (
                                <li key={project.name} className="flex items-start gap-2 group">
                                    <MapPin className="shrink-0 text-forest-600 mt-0.5 group-hover:text-gold-500 transition-colors" size={14} />
                                    <Link to="/projects" className="hover:text-white transition-colors">
                                        {project.name} <span className="text-forest-400 text-xs ml-1">({project.loc})</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Our Offices</h4>
                        <div className="space-y-6 text-forest-100/70 text-sm">
                            <div>
                                <h5 className="text-white font-medium mb-1">Thanjavur (Reg. Office)</h5>
                                <p className="leading-relaxed">
                                    No. 123, Main Street,<br />near New Bus Stand, Thanjavur - 613005
                                </p>
                            </div>
                            <div>
                                <h5 className="text-white font-medium mb-1">Trichy (Corp. Office)</h5>
                                <p className="leading-relaxed">
                                    No. 45, Cantonment High Road,<br />Opp. Central Hotel, Trichy - 620001
                                </p>
                            </div>
                            <div className="pt-2">
                                <a href="tel:+919876543210" className="flex items-center gap-2 text-gold-400 hover:text-white transition-colors font-medium">
                                    <span className="bg-forest-800 p-1.5 rounded-full"><MessageCircle size={14} /></span>
                                    +91 98765 43210
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-forest-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-forest-100/40">
                    <p>© {new Date().getFullYear()} SNM Developers. The content is for information purposes only and does not constitute an offer to avail of any service.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-warning-500 transition-colors">Disclaimer</a>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-in slide-in-from-bottom-10"
                title="Chat on WhatsApp"
            >
                <MessageCircle size={32} fill="white" className="text-white" />
            </a>
        </footer>
    );
};
