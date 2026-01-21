import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Home, Trees, Search, ChevronLeft, ChevronRight, Maximize, IndianRupee } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: 'Green Valley',
        location: 'Thanjavur',
        type: 'Residential',
        status: 'Sold Out',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
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
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
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
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
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
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
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
        image: 'https://images.unsplash.com/photo-1600596542815-4ad4dc2a7521?auto=format&fit=crop&w=1200&q=80',
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
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
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
    }
];

export const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const filters = ['All', 'Residential', 'Villa Plots', 'Commercial', 'Open', 'Sold Out'];

    const filteredProjects = projectsData.filter(project => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Open' || activeFilter === 'Sold Out') {
            return project.status === activeFilter;
        }
        return project.type === activeFilter;
    });

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/90 to-forest-800/80" />

                <div className="relative z-10 container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-0.5 w-12 bg-gold-500" />
                                <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Our Portfolio</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                                Find Your Perfect Plot with SNM Developers
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                Explore our curated collection of prime properties. Quality layouts, transparent dealings, and proven appreciation.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-gold-500 hover:bg-gold-600 text-forest-950 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                                    <Search size={20} />
                                    Explore Projects
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden md:block"
                        >
                            <div className="relative">
                                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-8 border-gold-500/30 shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                                        alt="SNM Representative"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-forest-950 px-8 py-4 rounded-xl shadow-xl">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">38+</div>
                                        <div className="text-sm text-gray-600">Premium Layouts</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-30 backdrop-blur-lg bg-gray-50/95">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all ${activeFilter === filter
                                    ? 'bg-forest-700 text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Collection</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-3">
                            Explore Our Prime Properties
                        </h2>
                    </motion.div>

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
            <section className="py-20 bg-gradient-to-br from-forest-950 to-forest-900 text-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
                        <h2 className="text-4xl font-serif font-bold mt-3">
                            Stories That Inspire Confidence
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-shrink-0">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold-500">
                                            <img
                                                src={testimonials[currentTestimonial].image}
                                                alt={testimonials[currentTestimonial].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <p className="text-xl italic text-gray-200 mb-6 leading-relaxed">
                                            "{testimonials[currentTestimonial].quote}"
                                        </p>
                                        <div>
                                            <div className="text-lg font-bold text-white">
                                                {testimonials[currentTestimonial].name}
                                            </div>
                                            <div className="text-gold-400 text-sm">
                                                {testimonials[currentTestimonial].project} Customer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex justify-center items-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-all"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`h-2 rounded-full transition-all ${index === currentTestimonial
                                            ? 'w-8 bg-gold-500'
                                            : 'w-2 bg-white/30'
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-all"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto bg-gradient-to-br from-forest-900 to-forest-950 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="p-12 flex flex-col justify-center text-white">
                                <h2 className="text-4xl font-serif font-bold mb-6">
                                    Ready to Invest in Your Future?
                                </h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Let our experts guide you to the perfect property. Schedule a site visit or consultation today.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="bg-gold-500 hover:bg-gold-600 text-forest-950 px-8 py-4 rounded-full font-bold transition-all">
                                        Schedule Site Visit
                                    </button>
                                    <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                            <div className="relative h-full min-h-[400px]">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                                    alt="Professional Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
