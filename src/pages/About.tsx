import React from 'react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/layout/PageHero';

export const About: React.FC = () => {
    return (
        <>
            <PageHero
                title="Our Legacy"
                subtitle="Building trust and futures since 1990."
                backgroundImage="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            <div className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="prose prose-lg text-gray-600">
                            <p className="lead text-xl text-gray-800 font-medium">
                                SNM Developers represents a legacy of trust that began in 1990. For over three decades, we have been more than just real estate developers; we have been partners in the growth of the Thanjavur-Trichy region.
                            </p>

                            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">The Beginning (1990)</h3>
                            <p>
                                Our journey started with a vision to transform the landscape of our hometown. What began as a humble endeavor to provide quality layouts has grown into a third-generation enterprise.
                            </p>

                            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Generational Trust</h3>
                            <p>
                                We are proud to say we are a family business in its third generation. This isn't just a business for us; it's a heritage. The values of honesty, transparency, and commitment instituted by my grandfather are the same values we uphold today.
                            </p>

                            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 mb-4">Creating Wealth</h3>
                            <p>
                                Our most significant achievement is the wealth we've created for our customers. Land that was sold for ₹50 per sq.ft in our early days is now valued at over ₹3,500 per sq.ft. This massive appreciation is a testament to our foresight in selecting prime locations and developing them with high standards.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};
