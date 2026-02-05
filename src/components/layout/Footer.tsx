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
                            Building legacy since 1996. We craft premium living spaces that blend luxury with comfort in Thanjavur and Trichy.
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
                                { name: 'SNM GREEN City', loc: 'Thanjavur' },
                                { name: 'Gnana Arul Mary Nagar', loc: 'Thanjavur' },
                                { name: 'Afsar Nagar', loc: 'Thanjavur' },
                                { name: 'SNM MAJESTIC Tower', loc: 'Thanjavur' },
                                { name: 'Orchid Warehouse', loc: 'Thanjavur' }
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
                        <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Contact Us</h4>
                        <div className="space-y-6 text-forest-100/70 text-sm">
                            <div>
                                <h5 className="text-white font-medium mb-1">Office Address</h5>
                                <p className="leading-relaxed">
                                    # 1, SNM Nagar,<br />
                                    Dabeer Kulam Road, East Gate,<br />
                                    Thanjavur - 613001. India.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-white font-medium mb-1">Phone</h5>
                                <p className="leading-relaxed">
                                    Office: 04362 254502, 254748<br />
                                    Mobile: 90805 67785, 99526 21786
                                </p>
                            </div>
                            <div className="pt-2">
                                <a href="mailto:snmroyalpromoters@gmail.com" className="flex items-center gap-2 text-gold-400 hover:text-white transition-colors font-medium">
                                    <span className="bg-forest-800 p-1.5 rounded-full"><MessageCircle size={14} /></span>
                                    snmroyalpromoters@gmail.com
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
                href="https://wa.me/919952621786"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce-in flex items-center justify-center"
                title="Chat on WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
            </a>
        </footer>
    );
};
