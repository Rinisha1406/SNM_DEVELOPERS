import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    Search,
    Tag,
    TrendingUp,
    ChevronRight,
    Share2,
    Bookmark
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';

// --- Types ---
interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: string;
}

// --- Data ---
const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Real Estate Market Trends 2026: Why Tier-2 Cities are Booming",
        excerpt: "As metropolitan saturation reaches its peak, investors are turning their eyes to emerging hubs like Thanjavur and Trichy. We analyze the driving factors behind this massive shift.",
        category: "Market Analysis",
        date: "Jan 18, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        author: "Suresh N."
    },
    {
        id: 2,
        title: "Land vs. Apartments: The Undisputed Winner for Long-Term Wealth",
        excerpt: "While apartments offer rental income, land offers appreciation that often outperforms inflation by double digits. Here is the mathematical breakdown of both asset classes over a 10-year horizon.",
        category: "Investment Guide",
        date: "Jan 12, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
        author: "Priya R."
    },
    {
        id: 3,
        title: "The NRI Guide to Buying Property in India: FEMA Rules Simplified",
        excerpt: "Navigating the legal landscape can be daunting for Non-Resident Indians. We break down the latest RBI and FEMA guidelines to make your investment process smooth and compliant.",
        category: "Legal & NRI",
        date: "Dec 28, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1569388330292-79ccfe79d5bf?auto=format&fit=crop&w=1200&q=80",
        author: "Legal Team"
    },
    {
        id: 4,
        title: "Sustainable Living: How We Design Eco-Friendly Communities",
        excerpt: "From rainwater harvesting to solar-integrated streetlights, discover the green technologies that make SNM layouts future-ready and environmentally responsible.",
        category: "Development",
        date: "Dec 15, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80",
        author: "Arun K."
    }
];

const POPULAR_POSTS = [
    { id: 1, title: "7 Checklist Items Before Buying Land", date: "Nov 20, 2025", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=200&q=80" },
    { id: 2, title: "Thanjavur Smart City Project Updates", date: "Oct 15, 2025", image: "https://images.unsplash.com/photo-1599827592534-722e1b4b3952?auto=format&fit=crop&w=200&q=80" },
    { id: 3, title: "Understanding Document Verification", date: "Sep 05, 2025", image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=200&q=80" }
];

const CATEGORIES = ["All", "Market Analysis", "Investment Guide", "Legal & NRI", "Development", "infrastructure", "Lifestyle"];

// --- Components ---
const BlogCard = ({ post }: { post: BlogPost }) => (
    <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-8 items-start mb-16 group"
    >
        <div className="w-full md:w-5/12 overflow-hidden rounded-2xl aspect-[4/3] shadow-lg relative">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-forest-800 uppercase tracking-widest">
                {post.category}
            </div>
        </div>
        <div className="w-full md:w-7/12 py-2">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} className="text-gold-500" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} className="text-gold-500" /> {post.readTime}</span>
                <span className="flex items-center gap-1"><User size={14} className="text-gold-500" /> {post.author}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-forest-700 transition-colors cursor-pointer">
                {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
            </p>
            <div className="flex items-center gap-6">
                <button className="text-forest-700 font-bold hover:text-gold-600 transition-colors flex items-center gap-2 group/btn">
                    Read Article <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-3">
                    <button className="p-2 text-gray-400 hover:text-forest-600 hover:bg-forest-50 rounded-full transition-all" title="Save">
                        <Bookmark size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-forest-600 hover:bg-forest-50 rounded-full transition-all" title="Share">
                        <Share2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    </motion.article>
);

const Sidebar = () => (
    <aside className="sticky top-24 space-y-12">
        {/* Search */}
        <div className="relative">
            <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>

        {/* Popular Posts */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-forest-900 mb-6 flex items-center gap-2">
                <TrendingUp size={20} className="text-gold-500" /> Popular Posts
            </h3>
            <div className="space-y-6">
                {POPULAR_POSTS.map((post) => (
                    <div key={post.id} className="flex gap-4 group cursor-pointer">
                        <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-lg shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">{post.title}</h4>
                            <span className="text-xs text-gray-400">{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-forest-900 mb-6 flex items-center gap-2">
                <Tag size={20} className="text-gold-500" /> Categories
            </h3>
            <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        className="px-3 py-1.5 bg-gray-50 text-gray-600 text-sm rounded-lg hover:bg-forest-50 hover:text-forest-700 transition-colors"
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Newsletter */}
        <div className="bg-forest-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400 rounded-full blur-3xl opacity-20 -translate-y-16 translate-x-16" />
            <div className="relative z-10">
                <h3 className="text-xl font-serif font-bold mb-2">Weekly Wisdom</h3>
                <p className="text-forest-100/70 text-sm mb-6">Get the latest investment tips delivered to your inbox.</p>
                <div className="space-y-3">
                    <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-gold-400" />
                    <button className="w-full py-3 bg-gold-500 text-forest-950 font-bold rounded-lg hover:bg-gold-400 transition-colors">Subscribe</button>
                </div>
            </div>
        </div>
    </aside>
);

export const Blogs: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Insights That Move You Forward"
                subtitle="Explore expert tips, property trends, and real estate news — all in one place."
                backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80"
                decorationText="Knowledge Hub"
            />

            <section className="pt-14 pb-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Main Content */}
                        <div className="w-full lg:w-2/3">
                            <div className="mb-12 border-b border-gray-100 pb-8 flex justify-between items-end">
                                <div>
                                    <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-1 block">Latest Updates</span>
                                    <h2 className="text-3xl font-serif font-bold text-gray-900">Fresh from the Desk</h2>
                                </div>
                                {/* Pagination Controls (Visual Only) */}
                                <div className="flex gap-2">
                                    <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-gray-400 hover:border-forest-600 hover:text-forest-600 transition-all opacity-50 cursor-not-allowed">
                                        <ChevronRight size={20} className="rotate-180" />
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-gray-600 hover:border-forest-600 hover:text-forest-600 transition-all hover:bg-forest-50">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                {BLOG_POSTS.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </div>

                            {/* Load More Button */}
                            {/* <div className="mt-12 text-center">
                                <button className="px-8 py-3 border border-gray-200 rounded-full text-gray-600 font-semibold hover:border-gold-400 hover:text-gold-600 transition-colors">
                                    Load More Articles
                                </button>
                            </div> */}
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-1/3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
