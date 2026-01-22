import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    MapPin,
    Clock,
    ArrowRight,
    Search,
    Users,
    Heart,
    Zap,
    Coffee,
    ChevronRight,
    Quote,
    Play,
    Award,
    Target,
    Scale,
    Shield,
    Monitor
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';

// --- Components ---
const LeadershipSection = () => (
    <section className="py-20 bg-gradient-to-b from-white to-forest-50/40">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div>
                    <span className="inline-block mb-4 text-forest-600 font-semibold uppercase tracking-wider text-sm">
                        Leadership & Mentorship
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
                        Guided by Experience,<br className="hidden sm:block" /> Driven by Vision
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                        At SNM Developers, leadership means responsibility. Our founders and senior mentors bring decades
                        of expertise in real estate development, legal compliance, and urban planning — ensuring every
                        decision is made with integrity and foresight.
                    </p>

                    {/* Floating badge */}
                    <div className=''>
                        <p className="text-sm font-bold text-gray-900">36+ Years of Industry Leadership</p>
                        <p className="text-xs text-gray-500">Built on trust & expertise</p>
                    </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src="/images/brand-1.png"
                        alt="SNM Leadership"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    </section>
);

const VideoSection = () => (
    <section className="pt-14 pb-16 bg-forest-50 relative">
        <div className="container mx-auto px-6 text-center">
            <div className="mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900">Experience the Vibe</h2>
                <p className="text-gray-600 mt-4">See what a day in the life looks like at our headquarters.</p>
            </div>

            <div className="relative max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                    alt="Office Video Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="text-white fill-white ml-1" size={32} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ValuesSection = () => (
    <section className="pt-14 pb-16 bg-forest-900 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-gold-400 font-bold uppercase tracking-wider text-sm">Our Ethos</span>
                <h2 className="text-4xl font-serif font-bold mt-2">Driven by Purpose, Guided by Principles</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        icon: Target,
                        title: "Purpose",
                        desc: "To redefine urban living by creating sustainable, community-centric spaces that stand the test of time."
                    },
                    {
                        icon: Scale,
                        title: "Principles",
                        desc: "Unwavering integrity in every deal. We believe in complete transparency and ethical business practices."
                    },
                    {
                        icon: Shield,
                        title: "Accountability",
                        desc: "We take extreme ownership. Every team member is empowered to make decisions and is accountable for the results."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-white/5 backdrop-blur border border-white/10 p-10 rounded-2xl text-center group"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mx-auto flex items-center justify-center text-forest-950 mb-6 group-hover:scale-110 transition-transform">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                        <p className="text-forest-100/80 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const InfrastructureSection = () => (
    <section className="pt-14 pb-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-100 rounded-full blur-3xl opacity-50" />
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 relative z-10">
                            State-of-the-Art <br />
                            <span className="text-forest-700">Infrastructure</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Work in an environment designed for productivity and comfort. Our headquarters features modern amenities, ergonomic workspaces, and cutting-edge technology to ensure you have everything you need to succeed.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Ergonomic workstations with Herman Miller chairs",
                            "High-speed fiber connectivity & cloud-based tools",
                            "Collaborative zones and quiet pods",
                            "Fully stocked pantry and recreational area"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="p-1 rounded-full bg-green-100 text-green-600"><Monitor size={16} /></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
                            className="rounded-2xl shadow-lg mt-8"
                            alt="Office Space"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=600&q=80"
                            className="rounded-2xl shadow-lg"
                            alt="Tech Setup"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ValueCard = ({ icon: Icon, title, desc, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group text-center"
    >
        <div className="w-16 h-16 bg-forest-50 rounded-full mx-auto flex items-center justify-center text-forest-600 mb-6 group-hover:bg-gold-400 group-hover:text-forest-900 transition-colors duration-300">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
            {desc}
        </p>
    </motion.div>
);

const CultureSection = () => (
    <section className="pt-14 pb-16 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <span className="text-gold-600 font-bold uppercase tracking-wider text-sm">Why Choose SNM</span>
                <h2 className="text-4xl font-serif font-bold text-forest-900 mt-2">Culture & Benefits</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ValueCard
                    icon={Heart}
                    title="Health & Wellness"
                    desc="Comprehensive health coverage for you and your family. We care about your physical and mental well-being."
                    delay={0}
                />
                <ValueCard
                    icon={Award}
                    title="Performance Bonuses"
                    desc="Your hard work is rewarded directly. Competitive salary packages with uncapped performance incentives."
                    delay={0.1}
                />
                <ValueCard
                    icon={Users}
                    title="Team Retreats"
                    desc="We work hard and party harder. Annual international trips and quarterly team outings."
                    delay={0.2}
                />
                <ValueCard
                    icon={Coffee}
                    title="Flexible Work"
                    desc="Hybrid work models for eligible roles. We focus on output, not just hours clocked."
                    delay={0.3}
                />
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section className="pt-14 pb-16 bg-forest-900 text-white relative isolate overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.forest.800),theme(colors.forest.950))] opacity-50" />

        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-white">Voices of SNM</h2>
                <div className="w-20 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        quote: "I joined as a fresher and today I lead a team of 10. SNM invests in your growth like no other.",
                        author: "Arunkumar M.",
                        role: "Senior Sales Manager",
                        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                    },
                    {
                        quote: "The transparency and integrity we promise our customers is exactly what we practice internally.",
                        author: "Sarah J.",
                        role: "Legal Advisor",
                        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                    },
                    {
                        quote: "Every day brings a new challenge and a new learning opportunity. The work culture here is phenomenal.",
                        author: "Karthik R.",
                        role: "Project Engineer",
                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative"
                    >
                        <Quote className="absolute top-6 right-6 text-gold-500/20 w-12 h-12" />
                        <p className="text-gray-300 italic mb-8 relative z-10">"{item.quote}"</p>
                        <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover border-2 border-gold-500" />
                            <div>
                                <h4 className="font-bold text-white text-sm">{item.author}</h4>
                                <span className="text-xs text-gold-400">{item.role}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const Gallery = () => (
    <section className="pt-14 pb-16 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-forest-600 font-bold uppercase tracking-wider text-sm">Life at SNM</span>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">More Than Just a Workplace</h2>
                </div>
                <button className="text-forest-600 font-bold hover:text-gold-500 transition-colors flex items-center gap-2 mt-4 md:mt-0">
                    View Gallery <ArrowRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
                {/* Masonry-style grid */}
                <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                        alt="Team Meeting"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <span className="text-white font-bold text-lg">Annual Strat Meet 2024</span>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                    <img
                        src="/images/brand-cap.png"
                        alt="Employee Swag"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                    <img
                        src="/images/brand-id-card.png"
                        alt="Identity"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                        alt="Teamwork"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <span className="text-white font-bold text-lg">Project Launch: Green Valley</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const JobCard = ({ title, dept, loc, type, featured }: any) => (
    <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`p-6 rounded-xl border transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center justify-between
            ${featured
                ? 'bg-forest-900 border-forest-800 shadow-xl'
                : 'bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-gold-300'
            }`}
    >
        <div>
            <div className="flex items-center gap-3 mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded
                    ${featured ? 'bg-gold-500 text-forest-900' : 'bg-forest-50 text-forest-700'}`}>
                    {dept}
                </span>
                {featured && <span className="text-xs text-gold-300 flex items-center gap-1"><Zap size={10} /> Urgently Hiring</span>}
            </div>
            <h3 className={`text-xl font-bold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
            <div className={`flex items-center gap-6 text-sm ${featured ? 'text-gray-300' : 'text-gray-500'}`}>
                <span className="flex items-center gap-1"><MapPin size={14} /> {loc}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {type}</span>
            </div>
        </div>
        <button className={`px-6 py-3 rounded-lg font-bold transition-colors flex items-center gap-2
            ${featured
                ? 'bg-white text-forest-900 hover:bg-gray-100'
                : 'bg-forest-50 text-forest-700 hover:bg-forest-600 hover:text-white'
            }`}>
            Apply Now <ChevronRight size={16} />
        </button>
    </motion.div>
);

const JobSection = () => {
    const [activeFilter, setActiveFilter] = useState('All Departments');

    const jobs = [
        { title: "Senior Sales Executive", dept: "Sales", loc: "Thanjavur", type: "Full Time", featured: true },
        { title: "Digital Marketing Manager", dept: "Marketing", loc: "Trichy", type: "Remote / Hybrid", featured: false },
        { title: "Site Supervisor (Civil)", dept: "Engineering", loc: "Kumbakonam", type: "Full Time", featured: false },
        { title: "Customer Relations Officer", dept: "Support", loc: "Thanjavur", type: "Full Time", featured: false },
        { title: "Direct Sales Agent", dept: "Sales", loc: "Pudukkottai", type: "Commission", featured: false },
        { title: "Architect", dept: "Engineering", loc: "Thanjavur", type: "Full Time", featured: false },
    ];

    const filteredJobs = activeFilter === 'All Departments'
        ? jobs
        : jobs.filter(job => job.dept === activeFilter);

    return (
        <section className="pt-14 pb-16 bg-gray-50" id="openings">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <span className="text-forest-600 font-bold uppercase tracking-wider text-sm">Join the Team</span>
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Current Openings</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Find the role that fits your unique skills and passions.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                    {['All Departments', 'Sales', 'Engineering', 'Marketing', 'Support'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                            ${activeFilter === filter
                                    ? 'bg-forest-900 text-white shadow-lg transform scale-105'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-forest-500 hover:text-forest-700'}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <motion.div layout className="space-y-4">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, i) => (
                            <JobCard key={i} {...job} />
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            <p>No openings found in this department currently.</p>
                        </div>
                    )}
                </motion.div>

                <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                    <h4 className="text-lg font-bold text-blue-900 mb-2">Did't find the perfect role?</h4>
                    <p className="text-blue-700 mb-6">We are always open to meeting extraordinary talent. Send us your resume.</p>
                    <a href="mailto:careers@snmdevelopers.com" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:underline">
                        careers@snmdevelopers.com <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export const Careers: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Unleash Your True Potential"
                subtitle="Build more than just a career. Build a legacy with a team that values integrity, innovation, and the relentless pursuit of excellence."
                backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
                decorationText="Join Our Family"
            />
            <LeadershipSection />
            <VideoSection />
            <ValuesSection />
            <InfrastructureSection />
            <CultureSection />
            <Testimonials />
            <Gallery />
            <JobSection />
        </div>
    );
};
