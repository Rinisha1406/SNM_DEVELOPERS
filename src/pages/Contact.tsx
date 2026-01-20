import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';

export const Contact: React.FC = () => {
    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="We are here to help you build your dream."
                backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            />
            <div className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <p className="text-lg text-gray-600 mb-8">
                                Interested in our layouts or have questions about property investment?
                                Reach out to us. We are happy to guide you.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-forest-100 p-3 rounded-full text-forest-700">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Office Address</h4>
                                        <p className="text-gray-600">
                                            123, Main Road, Near New Bus Stand,<br />
                                            Thanjavur, Tamil Nadu - 613005
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-forest-100 p-3 rounded-full text-forest-700">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                        <p className="text-gray-600">+91 12345 67890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-forest-100 p-3 rounded-full text-forest-700">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                                        <p className="text-gray-600">contact@snmdevelopers.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Enquiry</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none" placeholder="Your Phone" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none" placeholder="Your Email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-forest-500 focus:border-transparent outline-none" placeholder="I am interested in..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-forest-700 hover:bg-forest-800 text-white font-bold py-3 rounded-lg transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
