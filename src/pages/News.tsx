import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, FileText, Newspaper, Image as ImageIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';

// --- Types ---
interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    image?: string;
    source?: string;
    link?: string;
}

// --- Data ---
const PRESS_RELEASES: NewsItem[] = [
    {
        id: 1,
        title: "SNM Developers Launches 'Green Valley Phase 5'",
        date: "October 2025",
        excerpt: "We are thrilled to announce the launch of our newest expansion in Thanjavur. Phase 5 includes 50+ premium plots with state-of-the-art amenities and 100% compliant documentation.",
        link: "#"
    },
    {
        id: 2,
        title: "SNM Developers Enters Sports Sponsorship with 'Thanjavur Titans'",
        date: "September 2025",
        excerpt: "Reinforcing our commitment to youth and fitness, SNM Developers is proud to sponsor the state-level kabaddi champions, the Thanjavur Titans.",
        link: "#"
    },
    {
        id: 3,
        title: "Partnership Announcement: Strategic Alliance with HDFC Home Loans",
        date: "July 2025",
        excerpt: "To make land investment more accessible, we have signed a strategic MoU with HDFC Bank to provide pre-approved plot loans for our customers.",
        link: "#"
    }
];

const NEWS_ARTICLES: NewsItem[] = [
    {
        id: 1,
        title: "The Rise of Thanjavur as a Real Estate Hotspot",
        date: "Nov 12, 2025",
        source: "The Hindu",
        excerpt: "Experts predict a 40% appreciation in peripheral Thanjavur land prices by 2027.",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Why Tier-2 Cities Are the New Goldmines",
        date: "Oct 05, 2025",
        source: "Economic Times",
        excerpt: "A deep dive into how developers like SNM are transforming the landscape of Tamil Nadu's delta region.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    }
];

const EVENTS: NewsItem[] = [
    {
        id: 1,
        title: "New Year Customer Meet 2026",
        date: "Jan 01, 2026",
        excerpt: "Celebrating new beginnings with our cherished community members at the Royal Grand Hall.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Bhoomi Pooja: Highway City Project",
        date: "Dec 15, 2025",
        excerpt: "Marking the spiritual beginning of our most ambitious highway-facing project yet.",
        image: "https://images.unsplash.com/photo-1604803986958-e3745ea615cc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Annual Tree Planting Drive",
        date: "Nov 05, 2025",
        excerpt: "Giving back to nature: 500 saplings planted across our Green Valley layout.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
    }
];

// --- Components ---



const PressReleaseCard = ({ item }: { item: NewsItem }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between h-full"
    >
        <div>
            {/* Logo Placeholder - Simulating the Brand Logo in Card */}
            <div className="mb-8 opacity-50 grayscale group-hover:grayscale-0 transition-all">
                <span className="text-2xl font-serif font-bold tracking-widest text-forest-900">SNM<span className="text-gold-500">.</span></span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-forest-700 transition-colors line-clamp-3">
                {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                {item.excerpt}
            </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
            <button className="bg-forest-900 text-white text-xs font-bold px-4 py-2 rounded hover:bg-gold-500 hover:text-forest-950 transition-colors">
                Read More
            </button>
            <span className="text-xs font-bold text-gray-400 italic">{item.date}</span>
        </div>
    </motion.div>
);

const ArticleCard = ({ item }: { item: NewsItem }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
    >
        <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
            <div className="inline-block bg-gold-400 text-forest-950 text-xs font-bold px-2 py-1 rounded mb-3 self-start">
                {item.source}
            </div>
            <h3 className="text-white font-bold text-xl mb-2 leading-tight group-hover:text-gold-300 transition-colors">
                {item.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-xs mt-2">
                <Calendar size={12} /> {item.date}
            </div>
        </div>
    </motion.div>
);

const EventCard = ({ item }: { item: NewsItem }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
    >
        <div className="h-64 overflow-hidden relative">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        </div>
        <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gold-100 rounded-lg text-gold-700">
                    <Calendar size={20} />
                </div>
                <span className="font-bold text-gray-500 uppercase tracking-widest text-sm">{item.date}</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 mb-6">{item.excerpt}</p>
            <button className="flex items-center gap-2 text-forest-700 font-bold hover:gap-3 transition-all">
                View Gallery <ArrowRight size={18} />
            </button>
        </div>
    </motion.div>
);

export const News: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'press' | 'articles' | 'events'>('press');

    const renderContent = () => {
        switch (activeTab) {
            case 'press':
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRESS_RELEASES.map(item => <PressReleaseCard key={item.id} item={item} />)}
                    </div>
                );
            case 'articles':
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEWS_ARTICLES.map(item => <ArticleCard key={item.id} item={item} />)}
                    </div>
                );
            case 'events':
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {EVENTS.map(item => <EventCard key={item.id} item={item} />)}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Event Highlights"
                subtitle="Catch up on the latest launches, celebrations, and special moments from the SNM family."
                backgroundImage="/images/news-hero.png"
                decorationText="Press & Media"
            />

            <section className="pt-14 pb-16 bg-gray-50 min-h-[800px]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-gold-600 uppercase tracking-[0.2em] mb-3">Official Announcements</h2>
                        <h3 className="text-4xl font-serif font-bold text-forest-900">
                            {activeTab === 'press' ? 'Press Releases' : activeTab === 'articles' ? 'In The News' : 'Past Events'}
                        </h3>
                    </div>

                    {/* Tabs / Filters */}
                    <div className="flex justify-center mb-16">
                        <div className="flex bg-white p-1.5 rounded-full shadow-sm border border-gray-200">
                            {[
                                { id: 'press', label: 'Press Releases', icon: FileText },
                                { id: 'articles', label: 'News Articles', icon: Newspaper },
                                { id: 'events', label: 'Events', icon: ImageIcon },
                            ].map((tab: any) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold transition-all duration-300
                                    ${activeTab === tab.id
                                            ? 'bg-forest-900 text-white shadow-md'
                                            : 'text-gray-500 hover:text-forest-700 hover:bg-gray-50'}`}
                                >
                                    <tab.icon size={16} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area with Animation */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>

                    {/* Load More (Visual) */}
                    {/* <div className="mt-20 text-center">
                        <button className="px-8 py-3 border border-gray-300 text-gray-500 rounded-lg hover:border-forest-600 hover:text-forest-600 transition-colors font-medium">
                            View All Archives
                        </button>
                    </div> */}
                </div>
            </section>
        </div>
    );
};
