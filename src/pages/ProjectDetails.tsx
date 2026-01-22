import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    MapPin,
    Maximize,
    IndianRupee,
    Trees,
    CheckCircle,
    ArrowLeft,
    Calendar,
    Phone
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { PageHero } from '../components/layout/PageHero';

export const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
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

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Overview</h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                {/* Key Specs */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-forest-50 p-6 rounded-xl border border-forest-100 flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-forest-600">
                                            <Maximize size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Plot Sizes</span>
                                            <span className="text-xl font-bold text-gray-900">{project.plotSize}</span>
                                        </div>
                                    </div>
                                    <div className="bg-forest-50 p-6 rounded-xl border border-forest-100 flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-forest-600">
                                            <IndianRupee size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Price Range</span>
                                            <span className="text-xl font-bold text-gray-900">{project.priceRange}</span>
                                        </div>
                                    </div>
                                    <div className="bg-forest-50 p-6 rounded-xl border border-forest-100 flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-forest-600">
                                            <Trees size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Amenities</span>
                                            <span className="text-xl font-bold text-gray-900">{project.amenities}+ World Class</span>
                                        </div>
                                    </div>
                                    <div className="bg-forest-50 p-6 rounded-xl border border-forest-100 flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-forest-600">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Location</span>
                                            <span className="text-xl font-bold text-gray-900">{project.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Features List */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Key Features</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.features?.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <CheckCircle className="text-gold-500 flex-shrink-0" size={20} />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Map Location */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Location Map</h3>
                                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-100 h-[400px] relative group">
                                    <iframe
                                        src={project.mapEmbed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Project Location"
                                        className="grayscale group-hover:grayscale-0 transition-all duration-500"
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Booking Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
                                >
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Interested?</h3>
                                    <p className="text-gray-500 mb-6">Book a free site visit to {project.title} today.</p>

                                    <form className="space-y-4">
                                        <div>
                                            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all" />
                                        </div>
                                        <div>
                                            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all" />
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition-all" />
                                        </div>
                                        <button className="w-full bg-forest-600 hover:bg-forest-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                                            <Calendar size={20} /> Schedule Visit
                                        </button>
                                    </form>

                                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                        <p className="text-sm text-gray-500 mb-2">Or call us directly at</p>
                                        <a href="tel:+919876543210" className="text-xl font-bold text-forest-700 hover:text-gold-600 flex items-center justify-center gap-2">
                                            <Phone size={20} /> +91 98765 43210
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
