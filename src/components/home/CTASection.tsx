import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
    return (
        <section className="bg-forest-900 py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-forest-800 rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-600 rounded-full blur-3xl opacity-10 -ml-10 -mb-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <span className="text-gold-400 font-bold tracking-wider uppercase text-sm mb-4 block">Get Started</span>

                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    Ready to Find Your <span className="text-gold-400">Dream Plot?</span>
                </h2>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Take the first step towards building your future. Schedule a free site visit today and explore our premium layouts in prime locations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-forest-950 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group"
                    >
                        <Phone size={20} />
                        Request Call Back
                    </Link>

                    <Link
                        to="/projects"
                        className="w-full sm:w-auto px-8 py-4 rounded-full font-bold border border-white/30 hover:bg-white/10 text-white transition-all backdrop-blur-sm flex items-center justify-center gap-2 group"
                    >
                        View Projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
