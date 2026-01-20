import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Premium Layouts", value: "38+" },
    { label: "Construction Projects", value: "120+" },
    { label: "Families Served", value: "22,000+" },
    { label: "Years of Legacy", value: "36" },
];

export const Stats: React.FC = () => {
    return (
        <section className="py-20 bg-forest-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Scale of Trust</h2>
                    <p className="text-forest-200 max-w-2xl mx-auto">
                        Numbers that speak for themselves. Our impact in the region goes beyond meaningful development; it's about building communities.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center p-6 border border-forest-800 rounded-lg bg-forest-900/50 backdrop-blur-sm hover:border-gold-500/50 transition-colors"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">{stat.value}</h3>
                            <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide uppercase">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
