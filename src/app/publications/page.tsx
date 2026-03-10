"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, FileText } from "lucide-react";

export default function PublicationsPage() {
    const publications = [
        {
            title: "Navigating the Digital Personal Data Protection Act, 2023",
            type: "Legal Article",
            date: "October 15, 2023",
            author: "Neha Desai",
            excerpt: "An overview of the new compliance requirements for businesses operating in India, focusing on consent frameworks and data fiduciary obligations.",
        },
        {
            title: "Analysis of Recent Supreme Court Guidelines on Arbitration",
            type: "Case Law Analysis",
            date: "August 22, 2023",
            author: "Vikram Singh",
            excerpt: "A factual summary of the recent apex court ruling affecting the appointment of arbitrators in commercial disputes.",
        },
        {
            title: "Fundamentals of Co-Founder Agreements in Tech Startups",
            type: "Blog Post",
            date: "May 10, 2023",
            author: "Arjun Mehta",
            excerpt: "Essential clauses to consider when drafting agreements between startup co-founders including vesting schedules and IP assignment.",
        },
        {
            title: "Understanding the Insolvency and Bankruptcy Code Amendments",
            type: "Research Paper",
            date: "February 05, 2023",
            author: "Priya Sharma",
            excerpt: "A comprehensive review of the recent amendments to the IBC and their procedural impact on the Corporate Insolvency Resolution Process (CIRP).",
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-[#FFFAF2] pt-32 pb-16 px-6 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 flex items-center gap-4">
                        Publications
                    </h1>
                    <p className="text-xl text-foreground/70 font-light leading-relaxed">
                        Legal articles, case law analyses, and research papers shared for informational and educational purposes only.
                    </p>
                </motion.div>
            </section>

            {/* Grid Section */}
            <section className="pb-32 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                            className="bg-white border border-secondary/30 p-8 rounded-3xl hover:shadow-xl hover:border-primary/30 transition-all group flex flex-col h-full cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {pub.type === "Legal Article" && <BookOpen size={14} />}
                                    {pub.type === "Research Paper" && <FileText size={14} />}
                                    {(pub.type === "Case Law Analysis" || pub.type === "Blog Post") && <FileText size={14} />}
                                    {pub.type}
                                </div>
                                <span className="text-sm font-medium text-foreground/50">{pub.date}</span>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {pub.title}
                            </h3>

                            <p className="text-foreground/70 mb-8 flex-1 leading-relaxed">
                                {pub.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-secondary/20">
                                <span className="text-sm font-semibold text-foreground/80">By {pub.author}</span>
                                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
