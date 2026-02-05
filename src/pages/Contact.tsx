import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Building2 } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';

// --- Data ---

// --- Data ---

const CONTACT_DETAILS = {
    address: {
        line1: '# 1, SNM Nagar, Dabeer Kulam Road,',
        line2: 'East Gate, Thanjavur - 613001.',
        country: 'India.'
    },
    office: ['04362 254502', '254748'],
    mobile: ['90805 67785', '99526 21786', '97905 21786', '94434 21786'],
    email: 'snmroyalpromoters@gmail.com'
};

// --- Components ---



const ContactForm = () => (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-forest-900" />

        <form className="space-y-6 relative z-10">
            <div>
                <label className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wider">Name*</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all placeholder-gray-400" placeholder="Enter your full name" />
            </div>

            <div>
                <label className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wider">E-mail*</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all placeholder-gray-400" placeholder="Enter your email address" />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <label className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wider">Code</label>
                    <div className="flex items-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-500">
                        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-5 h-auto mr-2" />
                        +91
                    </div>
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wider">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all placeholder-gray-400" placeholder="XXXXX XXXXX" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold text-forest-900 mb-2 uppercase tracking-wider">Department*</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none transition-all text-gray-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_1.5rem_center] bg-no-repeat">
                    <option value="">Select Department</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Enquiry">General Enquiry</option>
                </select>
            </div>

            <button className="w-full bg-forest-950 text-white font-bold py-4 rounded-lg hover:bg-gold-500 hover:text-forest-950 transition-colors duration-300 shadow-lg mt-4">
                Let's Connect
            </button>

            <p className="text-xs text-gray-400 text-center leading-relaxed mt-4">
                By submitting this form, I authorize SNM Developers to contact me via Email, SMS, WhatsApp, or Call with updates and offers, overriding any DND/NDNC settings.
            </p>
        </form>
    </div>
);

const ContactInfoSection = () => (
    <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-serif font-bold text-forest-900 mb-6">
            Get In Touch With Us
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            Our team is here to assist you with clarity and care. Reach out via call, email, or by filling out the form.
            Let's make your property journey smooth and hassle-free.
        </p>

        {/* Contact Blocks */}
        <div className="space-y-8">
            {/* Phone Numbers */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-700">
                        <Phone size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Phone Support</h3>
                </div>
                <div className="space-y-3 pl-16">
                    <div>
                        <p className="text-xs font-bold text-gold-600 uppercase tracking-wider mb-1">Office</p>
                        <p className="text-gray-700 font-medium">{CONTACT_DETAILS.office.join(', ')}</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gold-600 uppercase tracking-wider mb-1">Mobile</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {CONTACT_DETAILS.mobile.map((num, i) => (
                                <a key={i} href={`tel:${num.replace(/\s/g, '')}`} className="text-gray-700 font-medium hover:text-forest-700 transition-colors">
                                    {num}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                </div>
                <div className="pl-16 relative z-30">
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-gray-700 font-medium hover:text-forest-700 transition-colors text-lg">
                        {CONTACT_DETAILS.email}
                    </a>
                </div>
            </div>
        </div>
    </div>
);

// --- Main Page ---

export const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHero
                title="Let's Connect and Build Together"
                subtitle="Have questions or need more details? We're here to guide you every step of the way in your property journey."
                backgroundImage="/images/hero-3.jpg"
                decorationText="Get In Touch"
            />

            {/* Main Content Area */}
            <div className="relative z-20 container mx-auto px-6 mb-24 mt-12">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Form takes 5 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Info takes 7 columns */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 pl-0 lg:pl-12 pt-12 lg:pt-0"
                    >
                        <ContactInfoSection />
                    </motion.div>
                </div>
            </div>

            {/* Office Locations */}
            <section className="pt-14 pb-16 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-forest-900">Our Office</h2>
                        <div className="w-20 h-1.5 bg-gold-400 mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-forest-700 to-gold-500" />
                            <div className="w-20 h-20 bg-forest-50 text-forest-900 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-forest-900 group-hover:text-gold-400 transition-colors duration-300">
                                <Building2 size={36} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanjavur Head Office</h3>
                            <div className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-6">Main Branch</div>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-lg text-gray-600 leading-relaxed font-medium">
                                <span>{CONTACT_DETAILS.address.line1}</span>
                                <span className="hidden md:inline text-gray-300">•</span>
                                <span>{CONTACT_DETAILS.address.line2}</span>
                                <span className="hidden md:inline text-gray-300">•</span>
                                <span>{CONTACT_DETAILS.address.country}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[450px] w-full bg-gray-200 relative">
                {/* Embed Google Map centered on Thanjavur Location */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.231263884766!2d79.1354!3d10.7828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89ce66e3305%3A0xd653f5383f98c76c!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703063000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0%) contrast(1.1)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>

                {/* Map Overlay Card */}
                <div className="absolute top-10 left-6 md:left-10 bg-white p-6 rounded-xl shadow-2xl max-w-sm border border-gray-100 z-10 animate-fade-in-up">
                    <h4 className="font-bold text-forest-900 mb-2 text-lg">SNM Royal Promoters</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {CONTACT_DETAILS.address.line1}<br />
                        {CONTACT_DETAILS.address.line2}
                    </p>
                    <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                        <a
                            href={`mailto:${CONTACT_DETAILS.email}`}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-forest-50 text-forest-700 hover:bg-forest-600 hover:text-white transition-colors"
                        >
                            <Mail size={16} />
                        </a>
                        <a
                            href={`tel:${CONTACT_DETAILS.mobile[0].replace(/\s/g, '')}`}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-gold-50 text-gold-600 hover:bg-gold-500 hover:text-white transition-colors"
                        >
                            <Phone size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
