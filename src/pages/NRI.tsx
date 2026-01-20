import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { Plane, Building, BadgeCheck } from 'lucide-react';

export const NRI: React.FC = () => {
    return (
        <>
            <PageHero
                title="NRI Services"
                subtitle="Invest in your homeland with confidence. We make property management seamless for non-residents."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">Why Choose SNM as an NRI Investor?</h2>
                        <p className="text-gray-600 text-lg text-center leading-relaxed">
                            Distance should not be a barrier to growing your wealth. We offer specialized services for Non-Resident Indians to ensure that buying, managing, and developing land in India is a hassle-free experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="p-8 bg-gray-50 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100">
                            <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-700">
                                <Plane size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Remote Processing</h3>
                            <p className="text-gray-600">Complete documentation and registration assistance without the need for frequent travel.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100">
                            <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-700">
                                <Building size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Property Management</h3>
                            <p className="text-gray-600">We don't just sell; we protect. Regular site visits and updates on your property status.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100">
                            <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-700">
                                <BadgeCheck size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Verification</h3>
                            <p className="text-gray-600">100% clear titles and pre-verified documents to ensure your investment is secure forever.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
