"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Contact Information
                    </h1>
                    <p className="text-xl text-foreground/70 font-light leading-relaxed">
                        Please find our official contact details and office location below.
                    </p>
                </motion.div>
            </section>

            {/* Contact Details & Map Section */}
            <section className="pb-32 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-10"
                    >
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-secondary/20 rounded-2xl text-primary mt-1">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Office Address</h3>
                                <p className="text-foreground/70 text-lg leading-relaxed max-w-sm">
                                    No.428, 1st Floor, 25th cross, 24th Main Rd,<br />
                                    2nd Sector, HSR Layout,<br />
                                    Bengaluru, Karnataka 560102
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-secondary/20 rounded-2xl text-primary mt-1">
                                <Phone size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Phone</h3>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    080 4959 5965
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-secondary/20 rounded-2xl text-primary mt-1">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Email</h3>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    contact@legalnexus.in<br />
                                    careers@legalnexus.in
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-secondary/20 rounded-2xl text-primary mt-1">
                                <Clock size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Office Hours</h3>
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    Monday - Friday: 10:00 AM - 6:30 PM<br />
                                    Saturday - Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="bg-[#2A2A2A] rounded-3xl overflow-hidden relative min-h-[400px] flex items-center justify-center shadow-xl"
                    >
                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 animate-bounce">
                                <MapPin className="text-white" size={32} />
                            </div>
                            <h3 className="text-white text-2xl font-bold tracking-tight">Location Map</h3>
                            <p className="text-gray-400 mt-2">Interactive map integration</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
