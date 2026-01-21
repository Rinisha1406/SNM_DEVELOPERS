import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import promoBg from '../../assets/images/promo-bg.jpg';

type SlideType = 'exclamation' | 'person' | 'house';

interface SlideData {
    id: number;
    type: SlideType;
    title: string;
    description: string;
    image: string;
    icon?: string;
}

// Imports removed

const slides: SlideData[] = [
    {
        id: 0,
        type: 'exclamation',
        title: "Experience Premium Living",
        description: "Crafting homes that blend luxury with comfort. Discover a lifestyle designed for your perfect future.",
        // Image: Luxury Villa / Dream Home
        image: "https://images.unsplash.com/photo-1613490493576-2f5037657911?auto=format&fit=crop&w=800&q=80",
        icon: "✨"
    },
    {
        id: 1,
        type: 'person',
        title: "A Legacy of Trust",
        description: "Building relationships on transparency and integrity. We are committed to keeping our promises since 1990.",
        // Image: Handshake / Trust / Deal
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        icon: "🤝"
    },
    {
        id: 2,
        type: 'house',
        title: "Quality Construction",
        description: "Superior standards ensuring your investment lasts a lifetime. Excellence in every brick we lay.",
        // Image: Modern Apartment / Building
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        icon: "🏡"
    }
];
// Wait, user sent 3 images. 
// Image 0: Exclamation? Or Abstract? The logic had "Exclamation Overlay". 
// If the user sent an Exclamation Mark image, I should use it and REMOVE the text overlay '!'
// Let's assume Image 0 is the exclamation mark itself.

// REVISED CONTENT BELOW


export const PromoSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    // ... (slides array remains unchanged)

    // ... (state and effect remain unchanged)

    const circleRadius = 350;
    const spacing = 40;

    return (
        <section className="relative h-[500px] bg-white overflow-hidden flex items-center">
            {/* Background pattern - Architectural Drawing */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
                style={{
                    backgroundImage: `url(${promoBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) contrast(120%)' // Ensure no other colors
                }}
            ></div>

            {/* Decorative background circle */}
            <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gray-100 opacity-50 pointer-events-none"></div>
            <div className="absolute right-[-75px] top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-gray-100 opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 h-full">
                <div className="flex flex-col md:flex-row items-center h-full">
                    {/* Left Content - Text */}
                    <div className="w-full md:w-1/2 pr-0 md:pr-12 lg:pr-24 z-20">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-forest-50 text-forest-600 text-3xl shadow-sm border border-forest-100">
                                        {slides[activeIndex].icon}
                                    </span>
                                    <div className="h-px bg-forest-100 w-20"></div>
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 leading-tight">
                                    {slides[activeIndex].title}
                                </h2>
                                <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                                    {slides[activeIndex].description}
                                </p>

                                <div className="pt-4">
                                    <button className="group flex items-center gap-2 text-forest-700 font-bold uppercase tracking-wider text-sm">
                                        Discover More
                                        <div className="h-0.5 w-8 bg-gold-400 transition-all group-hover:w-16"></div>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Content - Rotating Semi-Circle */}
                    <div className="w-full md:w-1/2 h-full relative font-sans perspective-1000">
                        {/* Circle Container */}
                        <motion.div
                            className="absolute right-[-350px] top-1/2 w-[700px] h-[700px] rounded-full border-[1px] border-dashed border-gray-300"
                            style={{
                                y: '-50%',
                            }}
                            animate={{ rotate: activeIndex * spacing }}
                            transition={{ type: "spring", stiffness: 40, damping: 20 }}
                        >
                            {/* Images placed on the perimeter */}
                            {slides.map((slide, index) => {
                                const angle = 180 - (index * spacing);

                                return (
                                    <div
                                        key={slide.id}
                                        className="absolute w-32 h-32 md:w-64 md:h-64 -ml-16 -mt-16 md:-ml-32 md:-mt-32 flex items-center justify-center transition-all duration-500"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: `rotate(${angle}deg) translate(${circleRadius}px) rotate(-${angle}deg) rotate(${-activeIndex * spacing}deg)`
                                        }}
                                    >
                                        <motion.div
                                            className={`rounded-full overflow-hidden w-full h-full relative transition-all duration-500`}
                                            style={{
                                                scale: activeIndex === index ? 1.3 : 0.8,
                                                opacity: activeIndex === index ? 1 : 0.6,
                                                filter: activeIndex === index ? 'grayscale(0%)' : 'grayscale(100%)',
                                                zIndex: activeIndex === index ? 20 : 10,
                                                boxShadow: activeIndex === index ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'
                                            }}
                                        >
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full h-full object-cover drop-shadow-xl"
                                            />
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Default export for better module resolution
export default PromoSection;
