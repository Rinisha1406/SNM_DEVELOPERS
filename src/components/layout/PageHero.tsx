import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    decorationText?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
    title,
    subtitle,
    backgroundImage,
    decorationText = "SNM Developers"
}) => {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-900/60 to-forest-900/30" />

            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-0.5 w-12 bg-gold-500" />
                        <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">{decorationText}</span>
                        <span className="h-0.5 w-12 bg-gold-500" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
