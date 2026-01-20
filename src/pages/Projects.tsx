import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';

const projects = [
    { id: 1, title: 'Green Valley', location: 'Thanjavur', status: 'Sold Out', type: 'Residential' },
    { id: 2, title: 'Royal Enclave', location: 'Trichy Road', status: 'Open', type: 'Premium Villa Plots' },
    { id: 3, title: 'Emerald City', location: 'Medical College Rd', status: 'Open', type: 'Residential' },
    { id: 4, title: 'Temple Town', location: 'Kumbakonam', status: 'Upcoming', type: 'Mixed Use' },
    { id: 5, title: 'Cauvery Gardens', location: 'Thanjavur', status: 'Sold Out', type: 'Residential' },
    { id: 6, title: 'SNM Towers', location: 'City Centre', status: 'Completed', type: 'Commercial' },
];

export const Projects: React.FC = () => {
    return (
        <>
            <PageHero
                title="Our Projects"
                subtitle="Explore our premium residential and commercial developments."
                backgroundImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            <div className="py-16 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
                            >
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-forest-800">
                                        {project.status}
                                    </div>
                                    <img
                                        src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1600585154340-be6161a56a0c' : '1600566753190-17f0baa2a6c3'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-gold-600 font-bold uppercase tracking-wider mb-2">{project.type}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <MapPin size={16} className="mr-1" />
                                        {project.location}
                                    </div>
                                    <button className={`mt-6 w-full py-2 rounded border transition-colors ${project.status === 'Open' ? 'border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white' : 'border-gray-200 text-gray-400 cursor-not-allowed'}`}>
                                        {project.status === 'Open' ? 'View Details' : 'Sold Out'}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
