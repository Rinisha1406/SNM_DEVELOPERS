import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Building2 } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';

// --- Data ---

const DEPARTMENTS = [
    { name: 'Sales', number: '+91 91234 56789' },
    { name: 'HR Recruitment', number: '+91 98765 43210' },
    { name: 'Procurement', number: '+91 99887 76655' },
    { name: 'Marketing', number: '+91 91234 56789' },
    { name: 'Land Acquisition', number: '+91 98765 43210' },
];

const LOCATIONS = [
    {
        id: 1,
        city: 'Thanjavur',
        type: 'Registered Office',
        address: '123, VOC Nagar, Trichy Road, Thanjavur - 613005',
        icon: Building2
    },
    {
        id: 2,
        city: 'Thanjavur',
        type: 'Corporate Office',
        address: 'SNM Towers, 4th Floor, Medical College Rd, Thanjavur - 613007',
        icon: Building2
    },
    {
        id: 3,
        city: 'Chennai',
        type: 'Regional Office',
        address: 'T-Nagar, Anna Salai, Chennai, Tamil Nadu - 600017',
        icon: Building2
    },
    {
        id: 4,
        city: 'Dubai',
        type: 'International Office',
        address: 'Business Bay, Dubai, United Arab Emirates',
        icon: Globe
    }
];

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
                    {DEPARTMENTS.map(dept => (
                        <option key={dept.name} value={dept.name}>{dept.name}</option>
                    ))}
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

const DepartmentTable = () => (
    <div className="h-full flex flex-col justify-center">
        <h2 className="text-4xl font-serif font-bold text-forest-900 mb-6">
            Get In Touch <br />
            <span className="text-gold-600">With US</span>
        </h2>

        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            Our team is here to assist you with clarity and care. Reach out via call, email, or by filling out the form.
            Let's make your property journey smooth and hassle-free.
        </p>

        {/* Quick Contacts */}
        <div className="flex gap-6 mb-12">
            <a href="tel:+910000000000" className="flex items-center gap-3 text-forest-900 font-bold hover:text-gold-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-700">
                    <Phone size={18} />
                </div>
                +91 91234 56789
            </a>
            <a href="mailto:support@snm.com" className="flex items-center gap-3 text-forest-900 font-bold hover:text-gold-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                    <Mail size={18} />
                </div>
                support@snm.com
            </a>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Department</th>
                        <th className="py-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact Number</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {DEPARTMENTS.map((dept, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors group">
                            <td className="py-4 px-6 text-forest-900 font-medium group-hover:text-forest-700">{dept.name}</td>
                            <td className="py-4 px-6 text-gray-600 font-mono text-sm">{dept.number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
                backgroundImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
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
                        <DepartmentTable />
                    </motion.div>
                </div>
            </div>

            {/* Office Locations */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-forest-900">Our Office Locations</h2>
                        <div className="w-20 h-1.5 bg-gold-400 mx-auto mt-6 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {LOCATIONS.map((loc) => (
                            <motion.div
                                key={loc.id}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center group"
                            >
                                <div className="w-16 h-16 bg-forest-50 text-forest-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forest-900 group-hover:text-gold-400 transition-colors">
                                    <MapPin size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{loc.city}</h3>
                                <div className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-4">{loc.type}</div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {loc.address}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full bg-gray-200 relative">
                {/* Placeholder for Google Maps - Using an iframe or a static image representation */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44190807086!2d79.0664985223381!3d10.782836297686566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89ce66e3305%3A0xd653f5383f98c76c!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703063000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                ></iframe>

                {/* Map Overlay Card */}
                <div className="absolute top-10 left-10 bg-white p-6 rounded-lg shadow-lg max-w-sm hidden md:block">
                    <h4 className="font-bold text-forest-900 mb-2">SNM Developers Pvt Ltd</h4>
                    <p className="text-sm text-gray-600 mb-3">SNM Towers, 4th Floor, Medical College Rd, Thanjavur</p>
                    <div className="flex text-amber-500 text-sm">
                        {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                        <span className="text-gray-400 ml-2">(4.8/5 Reviews)</span>
                    </div>
                </div>
            </section>
        </div>
    );
};
