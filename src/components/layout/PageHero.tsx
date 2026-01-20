import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    height?: string;
    children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    backgroundImage,
    height = "h-screen" // Full screen for all pages 
}) => {
    return (
        <div className={`relative w-full ${height} overflow-hidden`}>
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
                style={{
                    backgroundImage: `url("${backgroundImage}")`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/70 to-forest-900/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl text-white"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="h-0.5 w-12 bg-gold-500"></span>
                        <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">SNM Developers</span>
                        <span className="h-0.5 w-12 bg-gold-500"></span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};
