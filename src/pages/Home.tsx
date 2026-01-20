import React from 'react';
import { Hero } from '../components/home/Hero';
import { Story } from '../components/home/Story';
import { Stats } from '../components/home/Stats';
// Placeholder for Projects/Layouts section - we'll add a simple version for now
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-forest-600 font-bold tracking-wider uppercase text-sm">Our Work</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Featured Developments</h2>
                    </div>
                    <Link to="/projects" className="hidden md:flex items-center gap-2 text-forest-700 font-semibold hover:text-forest-800 transition-colors">
                        View All Projects <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                                {/* Placeholder image logic */}
                                <img
                                    src={`https://images.unsplash.com/photo-${item === 1 ? '1600585154340-be6161a56a0c' : item === 2 ? '1600047509807-c17181af3abd' : '1600566753190-17f0baa2a6c3'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                                    alt="Project"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-forest-700 transition-colors">Green Valley Phase {item}</h3>
                            <p className="text-gray-500 text-sm">Thanjavur • Residential Layout</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 md:hidden text-center">
                    <Link to="/projects" className="inline-flex items-center gap-2 text-forest-700 font-semibold">
                        View All Projects <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Story />
            <Stats />
            <FeaturedProjects />
        </>
    );
};
