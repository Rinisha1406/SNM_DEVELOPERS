import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

import { projectsData } from '../../data/projects';

// Map data to component needs or use directly
// We want the first 6 projects (3 Ongoing + 3 Hot Completed) as per user request
const FEATURED_PROJECTS = projectsData.slice(0, 6);

type ProjectStatus = 'All' | 'Ongoing' | 'Completed';

export const FeaturedProjects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<ProjectStatus>('All');

    const getDisplayStatus = (status: string) => {
        if (status === 'Open') return 'Ongoing';
        if (status === 'Sold Out') return 'Completed';
        return status;
    };

    const filteredProjects = activeFilter === 'All'
        ? FEATURED_PROJECTS
        : FEATURED_PROJECTS.filter(project => getDisplayStatus(project.status) === activeFilter);

    return (
        <section className="pt-10 pb-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-12 gap-6">
                    <div className="text-center lg:text-left">
                        <span className="text-forest-600 font-bold tracking-wider uppercase text-sm">Our Work</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Featured Developments</h2>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {(['All', 'Ongoing', 'Completed'] as ProjectStatus[]).map((status) => (
                            <button
                                key={status}
                                onClick={() => setActiveFilter(status)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === status
                                    ? 'bg-forest-900 text-white shadow-lg transform -translate-y-1'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:-translate-y-0.5'
                                    }`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => {
                        const displayStatus = getDisplayStatus(project.status);
                        return (
                            <div
                                key={project.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer"
                            >
                                {/* Image */}
                                <Link to={`/projects/${project.id}`} className="relative h-64 overflow-hidden flex-shrink-0 block">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Status Badge */}
                                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${displayStatus === 'Ongoing'
                                        ? 'bg-green-500/90 text-white'
                                        : 'bg-gray-900/90 text-white'
                                        }`}>
                                        {displayStatus}
                                    </div>
                                </Link>

                                {/* Content */}
                                <Link to={`/projects/${project.id}`} className="p-6 flex flex-col flex-grow block">
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-forest-700 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <MapPin size={16} className="mr-1 text-forest-600" />
                                        <span className="text-sm">{project.location}</span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow line-clamp-4">
                                        {project.description}
                                    </p>
                                </Link>
                            </div>
                        );
                    })}
                    {filteredProjects.length === 0 && (
                        <div className="col-span-3 text-center py-12 text-gray-400">
                            No projects found in this category.
                        </div>
                    )}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/projects" className="inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-forest-900 transition-colors">
                        View All Projects <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
