import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-forest-600 font-bold tracking-wider uppercase text-sm">Our Roots</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2">
                        The <span className="text-forest-700">Legacy</span> Behind SNM
                    </h2>
                    <div className="h-1 w-20 bg-gold-400 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Images/Collage */}
                    <div className="lg:col-span-5 relative">
                        {/* Main Portrait */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                            <img
                                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Placeholder for Founder/Visionary
                                alt="Founder"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-forest-900/90 text-center py-3">
                                <p className="text-gold-400 font-bold tracking-wider uppercase text-xs">Mr. S.N. Muthu</p>
                                <p className="text-white text-[10px] opacity-80">Founder (1990)</p>
                            </div>
                        </div>

                        {/* Secondary Image - Floating */}
                        <div className="absolute -bottom-10 -right-10 w-2/3 rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block z-20">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" // Office/Team
                                alt="Office"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Pattern */}
                        <div className="absolute -top-10 -left-10 w-full h-full border-2 border-dashed border-gold-200 rounded-3xl -z-10"></div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="lg:col-span-7 lg:pl-12 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">"We don't just sell land; we build relationships."</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                This philosophy has been the cornerstone of SNM Developers since <span className="font-bold text-forest-800">1990</span>.
                                Started by a visionary who believed that every family deserves a piece of earth to call their own, we have grown from a humble beginning to the region's most trusted real estate partner.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-forest-50 p-6 rounded-lg border-l-4 border-forest-600">
                                <h4 className="font-bold text-forest-900 mb-2">3rd Generation</h4>
                                <p className="text-sm text-gray-600">Carrying forward the torch of integrity and transparency into the modern era.</p>
                            </div>
                            <div className="bg-gold-50 p-6 rounded-lg border-l-4 border-gold-500">
                                <h4 className="font-bold text-forest-900 mb-2">Region's #1</h4>
                                <p className="text-sm text-gray-600">The most preferred developer for families in Thanjavur and Trichy.</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="text-forest-700 font-bold border-b-2 border-gold-400 pb-1 hover:text-forest-900 hover:border-forest-900 transition-all">
                                Read Our Full Story
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
