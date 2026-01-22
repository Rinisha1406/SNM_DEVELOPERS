import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Trees, Maximize, IndianRupee } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';

const projectsData = [
    {
        id: 1,
        title: 'Green Valley',
        location: 'Thanjavur',
        type: 'Residential',
        status: 'Sold Out',
        image: '/images/project-1.jpg',
        plotSize: '1200-2400 sq.ft',
        priceRange: '₹25-45 Lakhs',
        totalPlots: 120,
        amenities: 12,
        description: 'Premium gated community with modern amenities and lush green surroundings.'
    },
    {
        id: 2,
        title: 'Royal Enclave',
        location: 'Trichy Road',
        type: 'Villa Plots',
        status: 'Open',
        image: '/images/project-2.jpg',
        plotSize: '2400-3600 sq.ft',
        priceRange: '₹50-75 Lakhs',
        totalPlots: 80,
        amenities: 15,
        description: 'Luxury villa plots with premium infrastructure and world-class amenities.'
    },
    {
        id: 3,
        title: 'Emerald City',
        location: 'Medical College Road',
        type: 'Residential',
        status: 'Open',
        image: '/images/project-3.jpg',
        plotSize: '1000-2000 sq.ft',
        priceRange: '₹20-40 Lakhs',
        totalPlots: 150,
        amenities: 10,
        description: 'Affordable residential plots in prime location with excellent connectivity.'
    },
    {
        id: 4,
        title: 'Temple Town',
        location: 'Kumbakonam',
        type: 'Mixed Use',
        status: 'Upcoming',
        image: '/images/project-4.jpg',
        plotSize: '1500-3000 sq.ft',
        priceRange: '₹30-60 Lakhs',
        totalPlots: 100,
        amenities: 14,
        description: 'Mixed-use development combining residential and commercial opportunities.'
    },
    {
        id: 5,
        title: 'Cauvery Gardens',
        location: 'Thanjavur',
        type: 'Residential',
        status: 'Sold Out',
        image: '/images/project-5.jpg',
        plotSize: '1200-2200 sq.ft',
        priceRange: '₹22-42 Lakhs',
        totalPlots: 90,
        amenities: 11,
        description: 'Serene residential community near the Cauvery river with natural beauty.'
    },
    {
        id: 6,
        title: 'SNM Towers',
        location: 'City Centre',
        type: 'Commercial',
        status: 'Completed',
        image: '/images/project-6.jpg',
        plotSize: '800-1500 sq.ft',
        priceRange: '₹40-80 Lakhs',
        totalPlots: 60,
        amenities: 18,
        description: 'Premium commercial spaces in the heart of the city with high footfall.'
    }
];

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        project: 'Green Valley',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        quote: 'Investing in SNM Developers was the best decision. The land value has appreciated 3x in just 5 years!'
    },
    {
        id: 2,
        name: 'Priya Sharma',
        project: 'Royal Enclave',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
        quote: 'Professional service, transparent dealings, and excellent location. Highly recommended!'
    },
    {
        id: 3,
        name: 'Arun Patel',
        project: 'Emerald City',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        quote: 'SNM Developers delivered exactly what they promised. Great amenities and peaceful environment.'
    },
    {
        id: 4,
        name: 'Anita Desai',
        project: 'Temple Town',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
        quote: 'The documentation process was so smooth and transparent. I felt completely nice and secure with my investment.'
    },
    {
        id: 5,
        name: 'Karthik Raja',
        project: 'Cauvery Gardens',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
        quote: 'Excellent location choices and future-ready infrastructure. Truly a legacy builder for my family.'
    },
    {
        id: 6,
        name: 'Meera Krishnan',
        project: 'SNM Towers',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        quote: 'Commercial spaces that actually deliver high footfall. My business has grown significantly since moving here.'
    }
];

export const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [startIndex, setStartIndex] = useState(0);

    const nextTestimonial = () => {
        setStartIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const filters = ['All', 'Residential', 'Villa Plots', 'Commercial', 'Open', 'Sold Out'];

    const filteredProjects = projectsData.filter(project => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Open' || activeFilter === 'Sold Out') {
            return project.status === activeFilter;
        }
        return project.type === activeFilter;
    });

    return (
        <div className="bg-white">
            <PageHero
                title="Find Your Perfect Plot"
                subtitle="Explore our curated collection of prime properties. Quality layouts, transparent dealings, and proven appreciation."
                backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80"
                decorationText="Our Portfolio"
            />

            {/* Projects Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Collection</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-3">
                            Explore Our Prime Properties
                        </h2>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-forest-800 text-white shadow-xl scale-105 ring-2 ring-gold-500/50 ring-offset-2'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gold-400'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Status Badge */}
                                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md ${project.status === 'Open'
                                        ? 'bg-green-500/90 text-white'
                                        : project.status === 'Sold Out'
                                            ? 'bg-gray-900/90 text-white'
                                            : 'bg-blue-500/90 text-white'
                                        }`}>
                                        {project.status}
                                    </div>

                                    {/* Type Badge */}
                                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                                        <span className="text-gold-600 font-bold text-sm uppercase tracking-wider">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <MapPin size={16} className="mr-1 text-forest-600" />
                                        <span className="text-sm">{project.location}</span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Specifications Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                                        <div className="flex items-start gap-2">
                                            <Maximize className="text-forest-600 mt-1 flex-shrink-0" size={18} />
                                            <div>
                                                <div className="text-xs text-gray-500 uppercase tracking-wider">Plot Size</div>
                                                <div className="text-sm font-bold text-gray-900">{project.plotSize}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <IndianRupee className="text-forest-600 mt-1 flex-shrink-0" size={18} />
                                            <div>
                                                <div className="text-xs text-gray-500 uppercase tracking-wider">Price Range</div>
                                                <div className="text-sm font-bold text-gray-900">{project.priceRange}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Home className="text-forest-600 mt-1 flex-shrink-0" size={18} />
                                            <div>
                                                <div className="text-xs text-gray-500 uppercase tracking-wider">Total Plots</div>
                                                <div className="text-sm font-bold text-gray-900">{project.totalPlots}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Trees className="text-forest-600 mt-1 flex-shrink-0" size={18} />
                                            <div>
                                                <div className="text-xs text-gray-500 uppercase tracking-wider">Amenities</div>
                                                <div className="text-sm font-bold text-gray-900">{project.amenities}+</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <button
                                        className={`w-full py-3 rounded-xl font-bold transition-all ${project.status === 'Open'
                                            ? 'bg-forest-700 text-white hover:bg-forest-800 hover:shadow-lg'
                                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                            }`}
                                        disabled={project.status !== 'Open'}
                                    >
                                        {project.status === 'Open' ? 'View Details' : project.status}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-6 bg-orange-50/30 overflow-hidden relative">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-forest-600 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-3">
                            Stories That Inspire Confidence
                        </h2>
                    </motion.div>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Carousel Container */}
                    <div className="flex-grow overflow-hidden py-10">
                        <motion.div
                            className="flex justify-center items-center gap-6"
                            initial={false}
                        >
                            {/* Previous Card (Left) */}
                            <div className="hidden md:block w-1/3 opacity-40 scale-90 blur-[1px] transition-all duration-500">
                                <div className="bg-white rounded-xl p-8 shadow-sm text-center border border-gray-100/50">
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-gray-100">
                                            <img
                                                src={testimonials[(startIndex - 1 + testimonials.length) % testimonials.length].image}
                                                alt="User"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900">{testimonials[(startIndex - 1 + testimonials.length) % testimonials.length].name}</h4>
                                        <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider">{testimonials[(startIndex - 1 + testimonials.length) % testimonials.length].project}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                            {testimonials[(startIndex - 1 + testimonials.length) % testimonials.length].quote}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Active Card (Center) */}
                            <div className="w-full md:w-1/3 z-20 scale-110 transition-all duration-500">
                                <div className="bg-white rounded-2xl p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] text-center relative border border-gray-100">
                                    <div className="flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full overflow-hidden mb-5 ring-4 ring-orange-50">
                                            <img
                                                src={testimonials[startIndex].image}
                                                alt="User"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonials[startIndex].name}</h4>
                                        <p className="text-xs text-orange-500 font-semibold uppercase tracking-wider mb-6">{testimonials[startIndex].project}</p>
                                        <p className="text-gray-600 leading-relaxed">
                                            {testimonials[startIndex].quote}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Next Card (Right) */}
                            <div className="hidden md:block w-1/3 opacity-40 scale-90 blur-[1px] transition-all duration-500">
                                <div className="bg-white rounded-xl p-8 shadow-sm text-center border border-gray-100/50">
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-2 ring-gray-100">
                                            <img
                                                src={testimonials[(startIndex + 1) % testimonials.length].image}
                                                alt="User"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h4 className="font-bold text-gray-900">{testimonials[(startIndex + 1) % testimonials.length].name}</h4>
                                        <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider">{testimonials[(startIndex + 1) % testimonials.length].project}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                            {testimonials[(startIndex + 1) % testimonials.length].quote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setStartIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === startIndex
                                    ? 'w-6 bg-gray-800'
                                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
};
