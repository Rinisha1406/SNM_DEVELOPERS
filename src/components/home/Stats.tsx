import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Trophy, Wallet } from 'lucide-react';

const stats = [
    { label: "Construction Projects", value: "120+", icon: Building2 },
    { label: "Families Served", value: "22,000+", icon: Users },
    { label: "Years of Legacy", value: "36", icon: Trophy },
    { label: "Land Appreciated", value: "70x", icon: Wallet },
];

export const Stats: React.FC = () => {
    return (
        <section className="relative -mt-20 z-30 mb-20 px-6">
            <div className="container mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`text-center ${index % 2 !== 0 ? 'pl-4 md:pl-0' : ''}`} // Small adjustment for mobile grid gutters
                            >
                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-forest-50 flex items-center justify-center text-forest-600 mb-2">
                                        <stat.icon size={24} />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-forest-900">{stat.value}</h3>
                                    <p className="text-xs md:text-sm text-gray-500 font-medium tracking-widest uppercase">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
