import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

type ProjectStatus = 'All' | 'Ongoing' | 'Upcoming' | 'Completed';

interface Project {
    id: number;
    title: string;
    location: string;
    type: string;
    status: Exclude<ProjectStatus, 'All'>;
    image: string;
    totalPlots: number;
    sizeRange: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Green Valley Phase 1",
        location: "Thanjavur",
        type: "Residential Layout",
        status: "Ongoing",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        totalPlots: 120,
        sizeRange: "1200 - 2400 sq.ft"
    },
    {
        id: 2,
        title: "Royal Gardens",
        location: "Kumbakonam",
        type: "Premium Villas",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1600047509807-c17181af3abd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        totalPlots: 45,
        sizeRange: "1800 - 3200 sq.ft"
    },
    {
        id: 3,
        title: "Sunrise Estate",
        location: "Trichy",
        type: "Gated Community",
        status: "Upcoming",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        totalPlots: 200,
        sizeRange: "600 - 1500 sq.ft"
    },
    {
        id: 4,
        title: "Temple View",
        location: "Thanjavur",
        type: "Residential Layout",
        status: "Ongoing",
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        totalPlots: 85,
        sizeRange: "1000 - 1800 sq.ft"
    },
    {
        id: 5,
        title: "Riverside Enclave",
        location: "Trichy",
        type: "Premium Plots",
        status: "Upcoming",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        totalPlots: 150,
        sizeRange: "800 - 2000 sq.ft"
    },
    {
        id: 6,
        title: "Heritage Town",
        location: "Kumbakonam",
        type: "Villa Plots",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        totalPlots: 60,
        sizeRange: "1500 - 3000 sq.ft"
    }
];

export const FeaturedProjects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<ProjectStatus>('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.status === activeFilter);

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
                        {(['All', 'Ongoing', 'Upcoming', 'Completed'] as ProjectStatus[]).map((status) => (
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
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-forest-100 transition-all duration-300 overflow-hidden flex flex-col">
                            {/* Image Section - Reduced Height */}
                            <Link to="/projects" className="relative overflow-hidden h-56 block">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${project.status === 'Ongoing' ? 'bg-forest-500 text-white' :
                                        project.status === 'Upcoming' ? 'bg-gold-500 text-white' :
                                            'bg-gray-800 text-white'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </Link>

                            {/* Content Section - Reduced Padding */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-3">
                                    <Link to="/projects" className="block">
                                        <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-forest-700 transition-colors">
                                            {project.title}
                                        </h3>
                                    </Link>
                                </div>

                                <div className="flex items-center gap-1.5 text-gray-500 mb-5">
                                    <MapPin size={16} className="text-forest-500" />
                                    <span className="text-sm font-medium">{project.location}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-y-4 gap-x-4 pt-4 border-t border-gray-100">
                                    <div>
                                        <p className="text-[10px] text-forest-600 font-bold uppercase tracking-wider mb-0.5">Total Plots</p>
                                        <p className="text-gray-900 font-semibold text-sm">{project.totalPlots} Units</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-forest-600 font-bold uppercase tracking-wider mb-0.5">Total Size</p>
                                        <p className="text-gray-900 font-semibold text-sm">{project.sizeRange}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-forest-600 font-bold uppercase tracking-wider mb-0.5">Details</p>
                                        <p className="text-gray-900 font-semibold text-sm">{project.type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
