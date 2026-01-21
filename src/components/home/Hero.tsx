import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80', // Original
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80', // Modern White
    'https://images.unsplash.com/photo-1600596542815-4ad4dc2a7521?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80', // Luxury Pool
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80', // Driveway
    'https://images.unsplash.com/photo-1600047509807-c17181af3abd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80'  // Garden
];

export const Hero: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image Carousel with Crossfade */}
            <div className="absolute inset-0 bg-forest-950">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 1.2, ease: "easeInOut" },
                            scale: { duration: 6, ease: "linear" }
                        }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url("${heroImages[currentImage]}")`,
                        }}
                    />
                </AnimatePresence>
            </div>

            {/* Overlay - ensuring it stays on top of images */}
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/70 to-forest-900/40 z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl text-white"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-0.5 w-12 bg-gold-500"></span>
                        <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Since 1990</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                        Legacy of Trust <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                            Building Your Future
                        </span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
                        We don't just develop layouts; we create wealth and build foundations for families.
                        Experience the SNM standard of permanent trust.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/projects"
                            className="group bg-gold-500 hover:bg-gold-600 text-forest-950 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2"
                        >
                            Explore Projects
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 rounded-full font-bold border border-white/30 hover:bg-white/10 text-white transition-all backdrop-blur-sm"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </div>
    );
};
