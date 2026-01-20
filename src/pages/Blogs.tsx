import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { Calendar, User } from 'lucide-react';

export const Blogs: React.FC = () => {
    return (
        <>
            <PageHero
                title="SNM Insights"
                subtitle="Expert advice on real estate investment and market trends."
                backgroundImage="https://images.unsplash.com/photo-1512403754473-27835f7b9984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <div key={item} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[16/9]">
                                    <img
                                        src={`https://images.unsplash.com/photo-${item % 2 === 0 ? '1560518883-ce09059eeffa' : '1582407947304-fd86f028f716'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                                        alt="Blog Post"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> Jan {10 + item}, 2026</span>
                                    <span className="flex items-center gap-1"><User size={12} /> SNM Team</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-forest-700 transition-colors">
                                    {item % 2 === 0 ? "5 Tips for First-Time Land Investors in South India" : "Why Layouts are a Safer Bet than Apartments"}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    Discover the secrets to building generational wealth through smart land investments. We break down the market trends...
                                </p>
                                <button className="mt-4 text-forest-600 font-semibold text-sm hover:underline">Read More</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
