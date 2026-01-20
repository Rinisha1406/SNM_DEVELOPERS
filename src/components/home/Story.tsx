import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
    return (
        <section className="py-24 bg-forest-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6">
                            <span className="text-forest-600 font-bold tracking-wider uppercase text-sm">The SNM Story</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-3 mb-6">
                                A 36-Year Journey of <span className="text-forest-700">Permanent Trust</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                Our story began with my grandfather’s vision in <span className="font-bold text-forest-800">1990</span>.
                                He didn’t just want to sell land; he wanted to build a foundation for families in the Thanjavur-Trichy region.
                                Today, as a third-generation business, we are carrying that legacy into a new digital era.
                            </p>

                            <div className="bg-white p-6 rounded-xl border-l-4 border-gold-500 shadow-sm my-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Evidence of Growth</h3>
                                <p className="italic text-gray-600 mb-4">"We turn raw land into a gold standard of investment."</p>
                                <div className="flex items-center gap-8 text-sm">
                                    <div>
                                        <span className="block text-gray-400 uppercase text-xs">1990 Value</span>
                                        <span className="block text-2xl font-bold text-gray-400 line-through">₹50 <span className="text-xs font-normal">/sq.ft</span></span>
                                    </div>
                                    <div className="h-10 w-px bg-gray-200"></div>
                                    <div>
                                        <span className="block text-forest-600 uppercase text-xs font-bold">Today's Value</span>
                                        <span className="block text-3xl font-bold text-forest-700">₹3,500 <span className="text-xs font-normal text-gray-500">/sq.ft</span></span>
                                    </div>
                                </div>
                            </div>

                            <p>
                                We are the #1 residential developers in our region. While we are modernizing as "SNM Developers,"
                                our identity reflects the weight of three generations of honesty.
                            </p>
                        </div>
                    </motion.div>

                    {/* Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-400/20 rounded-full blur-xl"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder for "Generational" image */}
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                alt="Modern Building"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <p className="text-white font-serif text-lg">"Generations of Trust"</p>
                            </div>
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 bg-forest-700 text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                            <p className="text-3xl font-bold mb-1">3rd</p>
                            <p className="text-sm opacity-90">Generation Family Business</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
