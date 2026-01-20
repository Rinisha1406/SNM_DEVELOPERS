import React from 'react';
import { PageHero } from '../components/layout/PageHero';

export const News: React.FC = () => {
    return (
        <>
            <PageHero
                title="Latest News"
                subtitle="Updates from SNM Developers and the community."
                backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            <div className="py-16 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* News Item 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-forest-600"></div>
                            <span className="text-xs font-bold text-forest-600 uppercase tracking-widest mb-2 block">Press Release</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">SNM Developers Launches 'Green Valley Phase 5'</h3>
                            <p className="text-gray-600 mb-4">
                                We are thrilled to announce the launch of our newest expansion in Thanjavur. Phase 5 includes 50+ premium plots with state-of-the-art amenities.
                            </p>
                            <div className="text-sm text-gray-400">January 15, 2026</div>
                        </div>

                        {/* News Item 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
                            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2 block">Award</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Best Developer Award 2025</h3>
                            <p className="text-gray-600 mb-4">
                                SNM Developers has been recognized as the "Most Trusted Real Estate Developer in Thanjavur" at the annual Real Estate Summit.
                            </p>
                            <div className="text-sm text-gray-400">December 20, 2025</div>
                        </div>

                        {/* News Item 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-forest-600"></div>
                            <span className="text-xs font-bold text-forest-600 uppercase tracking-widest mb-2 block">Community</span>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Community Tree Planting Drive</h3>
                            <p className="text-gray-600 mb-4">
                                As part of our commitment to green living, we successfully planted over 500 saplings across our layouts last weekend.
                            </p>
                            <div className="text-sm text-gray-400">November 05, 2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
