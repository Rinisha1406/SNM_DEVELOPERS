import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { Briefcase } from 'lucide-react';

export const Careers: React.FC = () => {
    return (
        <>
            <PageHero
                title="Careers at SNM"
                subtitle="Join a team that values integrity and growth. Build your career with the leaders in layout development."
                backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            <div className="py-16 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Current Openings</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We are always looking for talented individuals who share our vision. Explore the opportunities below.
                        </p>
                    </div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {/* Job Item 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-forest-200 transition-colors">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Sales Executive</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> Full Time</span>
                                    <span>•</span>
                                    <span>Thanjavur/Trichy</span>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-gray-100 hover:bg-forest-600 hover:text-white text-gray-700 font-medium rounded-lg transition-colors">
                                Apply Now
                            </button>
                        </div>

                        {/* Job Item 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-forest-200 transition-colors">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Civil Engineer (Site Supervisor)</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> Full Time</span>
                                    <span>•</span>
                                    <span>Thanjavur</span>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-gray-100 hover:bg-forest-600 hover:text-white text-gray-700 font-medium rounded-lg transition-colors">
                                Apply Now
                            </button>
                        </div>

                        {/* Job Item 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-forest-200 transition-colors">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Digital Marketing Specialist</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> Remote / Hybrid</span>
                                    <span>•</span>
                                    <span>Anywhere</span>
                                </div>
                            </div>
                            <button className="px-6 py-2 bg-gray-100 hover:bg-forest-600 hover:text-white text-gray-700 font-medium rounded-lg transition-colors">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    <div className="mt-16 text-center text-gray-500 text-sm">
                        Don't see a role for you? Send your resume to <a href="mailto:careers@snmdevelopers.com" className="text-forest-600 hover:underline">careers@snmdevelopers.com</a>
                    </div>
                </div>
            </div>
        </>
    );
};
