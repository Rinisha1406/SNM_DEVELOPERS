import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin,
    Maximize,
    IndianRupee,
    Trees,
    CheckCircle,
    ArrowLeft,
    Calendar,
    Phone,
    X
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { PageHero } from '../components/layout/PageHero';

export const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const project = projectsData.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Project Not Found</h2>
                <Link to="/projects" className="text-forest-600 hover:text-gold-500 font-bold flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <PageHero
                title={project.title}
                subtitle={`${project.type} Project in ${project.location}`}
                backgroundImage={project.image}
                decorationText="Project Details"
            />

            <section className="py-16 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Breadcrumb */}
                    <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-forest-600 transition-colors mb-8 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to All Projects
                    </Link>

                    {/* Main Content Container - Vertical Stack */}
                    <div className="space-y-16">
                        {/* Gallery Section - Full Width */}
                        <div className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-gold-500 rounded-full"></span>
                                    Gallery
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                        <div
                                            key={item}
                                            className={`group relative overflow-hidden rounded-2xl shadow-md cursor-pointer border border-gray-100 ${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                                                }`}
                                            onClick={() => setSelectedImage(project.image)}
                                        >
                                            <img
                                                src={project.image}
                                                alt={`${project.title} Gallery ${item}`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white">
                                                    <Maximize size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Info - Extended Horizontal Layout */}
                        <div className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                            >
                                <div className="bg-forest-900 py-4 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-200 to-gold-400"></div>
                                    <h2 className="text-center text-xl font-serif font-bold text-white tracking-widest uppercase">
                                        For Booking, Contact
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                                    {/* Phone */}
                                    <div className="p-8 text-center group hover:bg-forest-50/30 transition-colors">
                                        <div className="w-12 h-12 mx-auto bg-forest-100 rounded-full flex items-center justify-center text-forest-700 mb-4 group-hover:scale-110 transition-transform">
                                            <Phone size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">Phone</h3>
                                        <div className="flex flex-col gap-1 text-gray-600 font-medium">
                                            <a href="tel:04362254502" className="hover:text-forest-700 transition-colors text-lg">04362 254502</a>
                                            <a href="tel:04362254748" className="hover:text-forest-700 transition-colors text-lg">04362 254748</a>
                                        </div>
                                    </div>

                                    {/* Mobile */}
                                    <div className="p-8 text-center group hover:bg-gold-50/30 transition-colors">
                                        <div className="w-12 h-12 mx-auto bg-gold-100 rounded-full flex items-center justify-center text-gold-700 mb-4 group-hover:scale-110 transition-transform">
                                            <Phone size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">Mobile</h3>
                                        <div className="flex flex-col gap-1 text-gray-600 font-medium">
                                            <div className="flex flex-wrap justify-center gap-x-3">
                                                <a href="tel:+919080567785" className="hover:text-gold-700 transition-colors text-lg">90805 67785</a>
                                                <span className="text-gray-300">|</span>
                                                <a href="tel:+919952621786" className="hover:text-gold-700 transition-colors text-lg">99526 21786</a>
                                            </div>
                                            <div className="flex flex-wrap justify-center gap-x-3">
                                                <a href="tel:+919790521786" className="hover:text-gold-700 transition-colors text-lg">97905 21786</a>
                                                <span className="text-gray-300">|</span>
                                                <a href="tel:+919443421786" className="hover:text-gold-700 transition-colors text-lg">94434 21786</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="p-8 text-center group hover:bg-blue-50/30 transition-colors">
                                        <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4 group-hover:scale-110 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">Email</h3>
                                        <a href="mailto:snmroyalpromoters@gmail.com" className="text-gray-600 font-medium hover:text-blue-700 transition-colors text-lg block whitespace-nowrap overflow-hidden text-ellipsis px-4">
                                            snmroyalpromoters@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Gallery Preview"
                            className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
