import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plane,
    Building2,
    FileCheck,
    Smartphone,
    Globe,
    TrendingUp,
    Phone,
    ChevronDown,
    Play,
    Calendar,
    ArrowRight,
    MapPin,
    Wallet,
    Landmark,
    ShieldCheck,
    Users
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';


// --- Components ---

const Stats = () => {
    const stats = [
        { label: "Happy NRI Families", value: "450+", icon: Globe },
        { label: "Land Appreciated", value: "300%", sub: "Avg. in 5 Years", icon: TrendingUp },
        { label: "Countries Served", value: "12", icon: Plane },
        { label: "Projects Completed", value: "60+", icon: Building2 },
    ];

    return (
        <div className="relative z-20 -mt-20 container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-b-4 border-gold-500 group"
                    >
                        <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center text-forest-700 mb-4 group-hover:scale-110 transition-transform">
                            <stat.icon size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                        <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</p>
                        {stat.sub && <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1"><TrendingUp size={12} /> {stat.sub}</p>}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const ProcessStep = ({ number, title, desc, icon: Icon, isLast }: { number: string; title: string; desc: string; icon: any; isLast?: boolean }) => (
    <div className="relative flex gap-6 md:gap-10 group">
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center text-2xl font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                <Icon size={32} strokeWidth={1.5} />
            </div>
            {!isLast && <div className="w-0.5 flex-grow bg-gradient-to-b from-forest-900 to-gray-200 my-2 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-forest-900/10" />
            </div>}
        </div>
        <div className="pb-16 pt-2">
            <span className="text-gold-600 font-bold text-sm uppercase tracking-widest mb-2 block">Step {number}</span>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg max-w-lg">{desc}</p>
        </div>
    </div>
);

const RemoteProcess = () => (
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-32 z-0" />
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                            Invest From Your Home, <br />
                            <span className="text-forest-700">Without Stepping Out</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-12 max-w-xl">
                            Our seamless digital process ensures that distance is never a barrier. From selection to registration, we handle everything with legal precision.
                        </p>

                        <div className="space-y-4">
                            <ProcessStep
                                number="01"
                                title="Virtual Site Tour"
                                desc="Join us on a live video call. We'll walk you through the layout, surroundings, and amenities in real-time."
                                icon={Smartphone}
                            />
                            <ProcessStep
                                number="02"
                                title="Legal Verification"
                                desc="We send all document copies digitally for your lawyer's verification. 100% clear titles guaranteed."
                                icon={FileCheck}
                            />
                            <ProcessStep
                                number="03"
                                title="Remote Registration"
                                desc="Execute the Power of Attorney (POA) to a trusted relative or use our simplified digital registration assistance."
                                icon={Globe}
                                isLast={true}
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80"
                            alt="Digital Investment"
                            className="rounded-3xl shadow-2xl"
                        />
                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-gold-500 max-w-xs"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-3 bg-green-100 rounded-full text-green-700">
                                    <FileCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Documents Verified</h4>
                                    <p className="text-xs text-gray-500">Legal Check Complete</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/* Decorative Elements */}
                    <div className="absolute top-10 -right-10 w-64 h-64 bg-gold-100 rounded-full blur-3xl opacity-50 z-0" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-forest-100 rounded-full blur-3xl opacity-50 z-0" />
                </div>
            </div>
        </div>
    </section>
);

const CulturalSection = () => (
    <section className="py-24 bg-forest-900 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">The Soil of Thanjavur</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Invest in Your <br />
                        <span className="text-gold-500 italic">Roots</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        There is a unique pride in owning a piece of land where your story began.
                        Thanjavur is not just a location; it's an emotion. With rapid urban development
                        and upcoming infrastructure projects, your home town is evolving. Be part of this growth story.
                    </p>
                    <button className="text-white border-b border-gold-500 pb-1 hover:text-gold-400 transition-colors inline-flex items-center gap-2">
                        View Culturally Rich Projects <ArrowRight size={16} />
                    </button>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/thanjavur_temple.png"
                            alt="Thanjavur Temple"
                            className="rounded-2xl object-cover h-64 w-full transform translate-y-8"
                        />
                        <img
                            src="/images/green_fields.png"
                            alt="Green Fields"
                            className="rounded-2xl object-cover h-64 w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ChartSection = () => (
    <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-forest-600 font-bold uppercase tracking-wider text-sm">Financial Wisdom</span>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Why Land Trumps Gold & FD</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold mb-6">5-Year Asset Appreciation (2019-2024)</h3>
                    <div className="space-y-6">
                        {/* Bar 1 */}
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-semibold text-gray-700">SNM Land Projects</span>
                                <span className="font-bold text-forest-700">180%</span>
                            </div>
                            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ duration: 1.5 }}
                                    className="h-full bg-forest-600 rounded-full relative"
                                >
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />
                                </motion.div>
                            </div>
                        </div>
                        {/* Bar 2 */}
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-semibold text-gray-600">Gold</span>
                                <span className="font-medium text-gray-500">65%</span>
                            </div>
                            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '45%' }}
                                    transition={{ duration: 1.5, delay: 0.2 }}
                                    className="h-full bg-gold-400 rounded-full"
                                />
                            </div>
                        </div>
                        {/* Bar 3 */}
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-semibold text-gray-600">Fixed Deposits</span>
                                <span className="font-medium text-gray-500">35%</span>
                            </div>
                            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '25%' }}
                                    transition={{ duration: 1.5, delay: 0.4 }}
                                    className="h-full bg-gray-400 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="mt-6 text-xs text-gray-400 text-center italic">
                        *Based on market data for Thanjavur region real estate vs standard index.
                    </p>
                </div>
                <div>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                                <TrendingUp />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Consistent Growth</h4>
                                <p className="text-gray-600 mt-1">Land in Thanjavur has shown steady appreciation even during market corrections, unlike volatile stock markets.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                                <Building2 />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Infrastructure Boom</h4>
                                <p className="text-gray-600 mt-1">With new highways and Smart City projects, peripheral layouts are becoming prime residential zones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FAQItem = ({ question, answer, isOpen, toggle }: any) => (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gold-300 transition-colors">
        <button
            onClick={toggle}
            className="w-full flex items-center justify-between p-6 text-left"
        >
            <span className="font-bold text-lg text-gray-900">{question}</span>
            <ChevronDown className={`transform transition-transform duration-300 text-gray-400 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                        {answer}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqs = [
        { q: "Can NRIs buy agricultural land in India?", a: "Generally, NRIs cannot buy agricultural land, plantation property, or farmhouses. However, specific RBI approvals can sometimes be sought. Residential and commercial plots (like SNM Layouts) are completely open for purchase." },
        { q: "How do I execute the Power of Attorney (POA)?", a: "You can execute a POA in your country of residence by signing it before a notary public or Indian consulate official. It then needs to be adjudicated in India within 3 months of receipt." },
        { q: "What is the tax implication if I sell the property?", a: "Long-term capital gains (held for >2 years) are taxed at 20% with indexation benefits. TDS of roughly 20-23% is deducted at source for NRIs, which can be claimed back in returns." },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-gray-900">Common Queries</h2>
                    <p className="text-gray-500 mt-4">Everything you need to know about NRI land ownership.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === idx}
                            toggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const GlobalMap = () => (
    <section className="py-24 bg-forest-900 text-white relative overflow-hidden">
        {/* World Map Background - Abstract SVG or Image */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat hue-rotate-180 invert" />

        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">Our Global Family</span>
                <h2 className="text-4xl font-serif font-bold mb-12">Trusted by 450+ Families Across 12 Countries</h2>
            </motion.div>

            <div className="relative h-[400px] max-w-5xl mx-auto hidden md:block">
                {/* Map Dots with Pulsing Effect */}
                {[
                    { top: '30%', left: '20%', label: 'USA' }, // USA roughly
                    { top: '45%', left: '48%', label: 'UAE' }, // UAE
                    { top: '25%', left: '45%', label: 'UK' }, // UK
                    { top: '60%', left: '75%', label: 'Singapore' }, // Singapore
                    { top: '80%', left: '80%', label: 'Australia' } // Aus
                ].map((loc, i) => (
                    <motion.div
                        key={i}
                        className="absolute flex flex-col items-center"
                        style={{ top: loc.top, left: loc.left }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <div className="relative">
                            <div className="w-4 h-4 bg-gold-400 rounded-full z-10 relative" />
                            <div className="absolute inset-0 bg-gold-400 rounded-full animate-ping opacity-75" />
                        </div>
                        <span className="mt-2 text-xs font-bold text-gray-300 bg-black/50 px-2 py-1 rounded backdrop-blur-sm">{loc.label}</span>
                    </motion.div>
                ))}
            </div>
            {/* Mobile View List */}
            <div className="md:hidden grid grid-cols-2 gap-4">
                {['USA', 'UAE', 'UK', 'Singapore', 'Australia', 'Canada'].map((c) => (
                    <div key={c} className="bg-white/10 backdrop-blur border border-white/10 p-4 rounded-xl font-bold">{c}</div>
                ))}
            </div>
        </div>
    </section>
);

const IncomeHighlights = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-forest-600 font-bold uppercase tracking-wider text-sm">Why Invest Now?</span>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2">Maximum Returns, Minimal Risk</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Wallet, title: "High Rental Yield", desc: "Commercial plots in our layouts fetch 3X more rental income than residential apartments." },
                    { icon: ShieldCheck, title: "100% Tax Compliant", desc: "Perfect documentation ensuring you can repatriate funds easily when you decide to exit." },
                    { icon: Landmark, title: "Repo Rate Advantage", desc: "With stabilizing interest rates, land prices are poised for a 40% jump in the next 2 years." }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
                    >
                        <div className="w-14 h-14 bg-forest-100 rounded-xl flex items-center justify-center text-forest-700 mb-6">
                            <item.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const VideoTestimonials = () => (
    <section className="py-24 bg-orange-50/50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900">Hear From Our Global Family</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "Dr. Ravi Shankar", loc: "Dallas, USA", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
                    { name: "Mrs. Priya Menon", loc: "Dubai, UAE", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
                    { name: "Mr. James Thomas", loc: "London, UK", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" }
                ].map((testimonial, i) => (
                    <motion.div
                        key={i}
                        className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-video"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src={testimonial.img} alt={testimonial.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="fill-white text-white ml-1" size={32} />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-300 text-sm">{testimonial.loc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// --- Main Page Component ---

export const NRI: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Build Your Legacy Back Home"
                subtitle="Secure land in Thanjavur’s premium rapidly appreciating corridors. Managed completely remotely, with 100% transparency."
                backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
                decorationText="Serving Indians Globally"
            />
            <Stats />
            <RemoteProcess />
            <GlobalMap />
            <CulturalSection />
            <ChartSection />
            <IncomeHighlights />
            <VideoTestimonials />
            <FAQSection />

        </div>
    );
};
