import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail } from 'lucide-react';

interface EnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6 pointer-events-none"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden pointer-events-auto flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]">

                            {/* Close Button (Mobile: top right, Desktop: absolute top right of container or implemented inside) */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-all md:hidden"
                            >
                                <X size={20} />
                            </button>

                            {/* Left Side: Image */}
                            <div className="w-full md:w-5/12 relative hidden md:block">
                                <img
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                                    alt="Dream Home"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />

                                <div className="absolute bottom-20 left-8 right-8 text-white">
                                    <h3 className="text-2xl font-serif font-bold mb-2">Build Your Legacy</h3>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        Take the first step towards owning your dream property in Thanjavur's finest layouts.
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="w-full md:w-7/12 flex flex-col relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors hidden md:block"
                                >
                                    <X size={24} />
                                </button>

                                {/* Form Content */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-10 bg-forest-900 text-white">

                                    <h2 className="text-3xl font-serif font-bold mb-2">Plan Your Site Visit Today</h2>
                                    <p className="text-forest-200 mb-8 text-sm">Fill in the details below and we will get back to you shortly.</p>

                                    <form className="space-y-5">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Name*"
                                                className="w-full bg-forest-800/50 border-b border-forest-600 px-4 py-3 text-white placeholder-forest-300 focus:outline-none focus:border-gold-400 focus:bg-forest-800 transition-all rounded-t-sm"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="E-Mail*"
                                                className="w-full bg-forest-800/50 border-b border-forest-600 px-4 py-3 text-white placeholder-forest-300 focus:outline-none focus:border-gold-400 focus:bg-forest-800 transition-all rounded-t-sm"
                                            />
                                        </div>

                                        <div className="flex">
                                            <div className="bg-forest-800/50 border-b border-forest-600 px-3 py-3 flex items-center gap-2 mr-2 rounded-t-sm">
                                                <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-5" />
                                                <span className="text-forest-200 text-sm">+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                placeholder="XXXXX XXXXX"
                                                className="flex-1 bg-forest-800/50 border-b border-forest-600 px-4 py-3 text-white placeholder-forest-300 focus:outline-none focus:border-gold-400 focus:bg-forest-800 transition-all rounded-t-sm"
                                            />
                                        </div>

                                        <div>
                                            <select className="w-full bg-forest-800/50 border-b border-forest-600 px-4 py-3 text-white placeholder-forest-300 focus:outline-none focus:border-gold-400 focus:bg-forest-800 transition-all rounded-t-sm appearance-none cursor-pointer">
                                                <option value="" className="bg-forest-900">Select Project Interest*</option>
                                                <option value="SNM GREEN City" className="bg-forest-900">SNM GREEN City</option>
                                                <option value="Gnana Arul Mary Nagar" className="bg-forest-900">Gnana Arul Mary Nagar</option>
                                                <option value="Afsar Nagar" className="bg-forest-900">Afsar Nagar</option>
                                                <option value="SNM MAJESTIC Tower" className="bg-forest-900">SNM MAJESTIC Tower</option>
                                            </select>
                                        </div>

                                        {/* Checkbox */}
                                        <div className="flex gap-3 items-start pt-2">
                                            <input type="checkbox" id="consent" className="mt-1 w-4 h-4 accent-gold-500 cursor-pointer" />
                                            <label htmlFor="consent" className="text-[10px] text-forest-300 leading-tight">
                                                By submitting this form, I authorize SNM Developers to contact me via Email, SMS, WhatsApp, or Call with updates and offers, overriding any DND/NDNC settings.
                                            </label>
                                        </div>

                                        <div className="pt-2">
                                            <button className="bg-white text-forest-950 font-bold px-8 py-3 rounded hover:bg-gold-400 transition-colors w-full md:w-auto shadow-lg hover:shadow-xl">
                                                Submit
                                            </button>
                                        </div>

                                    </form>
                                </div>

                                {/* Footer Bar */}
                                <div className="bg-white py-4 px-8 border-t border-forest-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
                                    <div className="flex items-center gap-2 text-forest-900">
                                        <div className="bg-forest-900 text-white p-1.5 rounded-full">
                                            <Phone size={14} />
                                        </div>
                                        +91 9159066666
                                    </div>
                                    <div className="flex items-center gap-2 text-forest-900">
                                        <div className="bg-forest-900 text-white p-1.5 rounded-full">
                                            <Mail size={14} />
                                        </div>
                                        snmroyalpromoters@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
