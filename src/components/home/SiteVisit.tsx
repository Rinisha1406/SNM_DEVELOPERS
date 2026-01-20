import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, Mail } from 'lucide-react';

export const SiteVisit: React.FC = () => {
    return (
        <section className="py-24 bg-forest-50 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                                alt="Customer Support"
                                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-forest-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
                        >
                            <div className="mb-8">
                                <span className="text-forest-600 font-bold tracking-wider uppercase text-sm">Experience It Yourself</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
                                    Plan Your <span className="text-forest-700">Site Visit</span> Today
                                </h2>
                                <p className="text-gray-500 mt-4">
                                    Our experts are ready to guide you through our premium layouts. Book a free site visit at your convenience.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 ml-1">Phone</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors" placeholder="you@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 ml-1">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-12 py-3 focus:outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500 transition-colors text-gray-500" />
                                    </div>
                                </div>

                                <button type="button" className="w-full bg-forest-700 hover:bg-forest-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mt-4">
                                    Schedule Free Visit
                                </button>

                                <p className="text-center text-xs text-gray-400 mt-4">
                                    * We respect your privacy. No spam.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
