"use client";

import { motion } from "framer-motion";
import { User, BookOpen, Scale, Award, Briefcase, MapPin } from "lucide-react";

export default function AboutPage() {
    const teamMembers = [
        {
            name: "Arjun Mehta",
            role: "Managing Partner",
            qualifications: "LL.B., National Law School of India University, Bangalore",
            enrollment: "D/123/2010",
            experience: "14+ Years",
            courts: "Supreme Court of India, Delhi High Court",
            memberships: "Supreme Court Bar Association, Delhi High Court Bar Association",
            work: "Former Senior Associate at Tier-1 Corporate Law Firm",
        },
        {
            name: "Priya Sharma",
            role: "Principal Associate",
            qualifications: "LL.M., NALSAR University of Law, Hyderabad",
            enrollment: "D/456/2014",
            experience: "10+ Years",
            courts: "Delhi High Court, NCLT",
            memberships: "Delhi High Court Bar Association",
            work: "Specialized in Corporate Restructuring & Insolvency",
        },
        {
            name: "Vikram Singh",
            role: "Senior Partner",
            qualifications: "LL.B., Faculty of Law, Delhi University",
            enrollment: "D/789/2005",
            experience: "19+ Years",
            courts: "Supreme Court of India, Delhi High Court, Trial Courts",
            memberships: "Bar Council of Delhi, Supreme Court Bar Association",
            work: "Extensive practice in Civil & Commercial Litigation",
        },
        {
            name: "Neha Desai",
            role: "Associate",
            qualifications: "B.A. LL.B. (Hons.), Symbiosis Law School, Pune",
            enrollment: "D/101/2021",
            experience: "3+ Years",
            courts: "Delhi High Court, District Courts",
            memberships: "Delhi High Court Bar Association",
            work: "Practice focused on Technology Law and Data Privacy",
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-[#2A2A2A] text-white pt-24 pb-32 px-6 rounded-b-[3rem] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        className="absolute -top-48 -right-48 w-96 h-96 bg-primary rounded-full blur-3xl"
                    />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        About <span className="text-secondary">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="text-xl max-w-2xl text-gray-300 font-light leading-relaxed"
                    >
                        We are a dedicated team of legal professionals committed to providing
                        factual, objective, and comprehensive counsel across our core practice areas.
                    </motion.p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Meet the team</h2>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                className="group flex flex-col"
                            >
                                {/* Image Placeholder */}
                                <div className="aspect-[3/4] rounded-2xl bg-secondary/20 mb-6 overflow-hidden relative flex items-center justify-center">
                                    <User size={64} className="text-secondary/50 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Details */}
                                <div className="flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-foreground mb-1 uppercase tracking-wider">{member.name}</h3>
                                    <p className="text-primary font-medium mb-6">{member.role}</p>

                                    <div className="space-y-4 text-sm text-foreground/80 flex-1">
                                        <div className="flex gap-3">
                                            <BookOpen size={18} className="text-secondary shrink-0 mt-0.5" />
                                            <span>{member.qualifications}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <Award size={18} className="text-secondary shrink-0 mt-0.5" />
                                            <span>{member.enrollment}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                                            <span>{member.experience}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <Scale size={18} className="text-secondary shrink-0 mt-0.5" />
                                            <span>{member.courts}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <User size={18} className="text-secondary shrink-0 mt-0.5" />
                                            <span>{member.memberships}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <Briefcase size={18} className="text-secondary shrink-0 mt-0.5" />
                                            <span>{member.work}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
