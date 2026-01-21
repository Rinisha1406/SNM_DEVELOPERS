import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Heart, Award, Users, TrendingUp, Shield, CheckCircle, Calendar } from 'lucide-react';

export const About: React.FC = () => {
    const coreValues = [
        {
            icon: Eye,
            title: 'Vision',
            description: 'To be the most trusted name in real estate development, creating sustainable communities that enhance quality of life for generations.'
        },
        {
            icon: Target,
            title: 'Mission',
            description: 'To deliver exceptional layouts with unwavering commitment to quality, transparency, and customer satisfaction while creating lasting value.'
        },
        {
            icon: Heart,
            title: 'Core Values',
            description: 'Integrity, Excellence, Innovation, Customer-Centricity, and Sustainability guide every decision we make and every project we undertake.'
        }
    ];

    const features = [
        {
            icon: Award,
            title: 'Legacy of Excellence',
            description: '34+ years of proven track record in delivering premium layouts and creating wealth for our customers.'
        },
        {
            icon: Shield,
            title: 'Transparent Dealings',
            description: 'Complete transparency in all transactions with clear documentation and no hidden costs.'
        },
        {
            icon: TrendingUp,
            title: 'Value Appreciation',
            description: 'Our properties have shown exceptional appreciation - from ₹50/sq.ft to ₹3,500/sq.ft over the years.'
        },
        {
            icon: Users,
            title: 'Customer First',
            description: 'Over 22,000+ families trust us. Their satisfaction and success is our greatest achievement.'
        },
        {
            icon: CheckCircle,
            title: 'Quality Assurance',
            description: 'Rigorous quality standards ensuring every layout meets the highest benchmarks of excellence.'
        },
        {
            icon: Calendar,
            title: 'Timely Delivery',
            description: 'Committed to delivering projects on time, every time, with no compromises on quality.'
        }
    ];

    const milestones = [
        { year: '1990', title: 'Foundation', description: 'SNM Developers established with a vision to transform real estate' },
        { year: '2000', title: 'Expansion', description: 'Expanded operations across Thanjavur and Trichy regions' },
        { year: '2010', title: 'Recognition', description: 'Became a trusted name with 15,000+ satisfied families' },
        { year: '2020', title: 'Innovation', description: 'Introduced modern amenities and sustainable development practices' },
        { year: '2024', title: 'Legacy', description: 'Third generation leadership, 38+ layouts, 22,000+ families served' }
    ];

    const stats = [
        { number: '34+', label: 'Years of Trust' },
        { number: '38+', label: 'Layouts Developed' },
        { number: '120+', label: 'Projects Completed' },
        { number: '22,000+', label: 'Families Served' }
    ];

    const team = [
        {
            name: 'Founder & Chairman',
            role: 'Visionary Leader',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
            description: 'Leading SNM Developers with three decades of expertise and unwavering commitment to excellence.'
        },
        {
            name: 'Managing Director',
            role: 'Strategic Operations',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
            description: 'Driving innovation and growth while maintaining our core values of trust and transparency.'
        },
        {
            name: 'Director - Projects',
            role: 'Quality & Execution',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
            description: 'Ensuring every project meets the highest standards of quality and timely delivery.'
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80)'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/85 to-forest-800/75" />

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-0.5 w-12 bg-gold-500" />
                            <span className="text-gold-400 font-medium tracking-[0.2em] uppercase text-sm">Since 1990</span>
                            <span className="h-0.5 w-12 bg-gold-500" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                            Our Legacy of Trust
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            Building futures and creating wealth for over three decades. A third-generation enterprise committed to excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                                    alt="Modern Real Estate"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-gold-500 text-forest-950 p-8 rounded-xl shadow-xl">
                                    <div className="text-4xl font-bold">34+</div>
                                    <div className="text-sm font-medium">Years of Trust</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div>
                                <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">About SNM Developers</span>
                                <h2 className="text-4xl font-serif font-bold text-gray-900 mt-3 mb-6">
                                    Building Dreams, Creating Wealth
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                SNM Developers represents a legacy of trust that began in 1990. For over three decades, we have been more than just real estate developers; we have been partners in the growth of families and communities.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                As a third-generation family business, the values of honesty, transparency, and commitment instituted by our founders are the same values we uphold today. We don't just develop layouts; we create wealth and build foundations for families.
                            </p>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our most significant achievement is the wealth we've created for our customers. Land that was sold for ₹50 per sq.ft in our early days is now valued at over ₹3,500 per sq.ft - a testament to our foresight in selecting prime locations.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <div className="flex-1 bg-forest-50 p-6 rounded-xl border border-forest-100">
                                    <div className="text-3xl font-bold text-forest-700">38+</div>
                                    <div className="text-sm text-gray-600 mt-1">Layouts Developed</div>
                                </div>
                                <div className="flex-1 bg-gold-50 p-6 rounded-xl border border-gold-100">
                                    <div className="text-3xl font-bold text-gold-700">22K+</div>
                                    <div className="text-sm text-gray-600 mt-1">Happy Families</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-3">
                            Vision, Mission & Values
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-forest-600 to-forest-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <value.icon className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-3">
                            Why Work With SNM Developers
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-forest-300 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-forest-100 rounded-lg flex items-center justify-center mb-5">
                                    <feature.icon className="text-forest-700" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 bg-gradient-to-br from-forest-950 to-forest-900 text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Our Leadership</span>
                        <h2 className="text-4xl font-serif font-bold mt-3">
                            Meet Our Team
                        </h2>
                        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                            Three generations of expertise, dedication, and commitment to excellence
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-2xl mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-gold-400 font-medium mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    {member.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Our Journey</span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mt-3">
                            Building Our Legacy, Brick by Brick
                        </h2>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex items-center gap-8 mb-12 last:mb-0"
                            >
                                {/* Timeline line */}
                                {index !== milestones.length - 1 && (
                                    <div className="absolute left-[60px] top-16 w-0.5 h-full bg-gradient-to-b from-forest-300 to-transparent" />
                                )}

                                {/* Year badge */}
                                <div className="flex-shrink-0 w-32">
                                    <div className="bg-gradient-to-br from-forest-600 to-forest-800 text-white px-6 py-3 rounded-xl text-center shadow-lg">
                                        <div className="text-2xl font-bold">{milestone.year}</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-forest-300 hover:shadow-md transition-all">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {milestone.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-20 bg-gradient-to-br from-forest-900 to-forest-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl md:text-6xl font-bold text-gold-400 mb-3">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-lg">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Culture / Purpose */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                                Doing Good with Purpose
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-12">
                                At SNM Developers, we believe in creating more than just properties. We build communities, create opportunities, and contribute to the growth of our region. Every project is a step towards a better future for all.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mt-12">
                                <div className="relative h-64 rounded-xl overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                                        alt="Team collaboration"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="font-bold text-lg">Collaboration</h3>
                                    </div>
                                </div>
                                <div className="relative h-64 rounded-xl overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                                        alt="Innovation"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="font-bold text-lg">Innovation</h3>
                                    </div>
                                </div>
                                <div className="relative h-64 rounded-xl overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                                        alt="Excellence"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="font-bold text-lg">Excellence</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};
