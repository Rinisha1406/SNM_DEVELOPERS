import React from 'react';
import { Logo } from '../ui/Logo';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-forest-950 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="inline-block w-fit">
                            <Logo className="h-16 text-white" />
                        </div>
                        <p className="text-forest-100/80 leading-relaxed text-sm">
                            Building the foundation for families in the Thanjavur-Trichy region since 1990.
                            We turn raw land into a gold standard of investment.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center hover:bg-forest-800 transition-colors text-white">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Quick Links</h4>
                        <ul className="space-y-4 text-forest-100/70 text-sm">
                            {['Home', 'About Us', 'Our Projects', 'Testimonials', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Contact Us</h4>
                        <ul className="space-y-6 text-forest-100/70 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 text-gold-500 mt-1" size={18} />
                                <span>123 Main Street, Thanjavur,<br />Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0 text-gold-500" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0 text-gold-500" size={18} />
                                <span>info@snmdevelopers.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-gold-400">Newsletter</h4>
                        <p className="text-forest-100/70 text-sm mb-4">Subscribe to verify the latest layouts and investment opportunities.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-forest-900 border border-forest-800 rounded px-4 py-2 text-sm w-full focus:outline-none focus:border-gold-500 transition-colors"
                            />
                            <button className="bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold px-4 py-2 rounded text-sm transition-colors">
                                Go
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-forest-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-forest-100/40">
                    <p>© {new Date().getFullYear()} SNM Developers. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
