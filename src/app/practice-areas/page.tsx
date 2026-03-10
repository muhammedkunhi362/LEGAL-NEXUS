"use client";

import { motion } from "framer-motion";

export default function PracticeAreasPage() {
    const practices = [
        {
            name: "Corporate Advisory",
            description: "Entity formation, corporate governance, and regulatory compliance.",
        },
        {
            name: "Civil Litigation",
            description: "Representation in civil disputes, property matters, and contractual claims.",
        },
        {
            name: "Commercial Litigation",
            description: "Recovery suits, insolvency proceedings, and commercial arbitration.",
        },
        {
            name: "Technology Law",
            description: "Software agreements, IT compliance, and e-commerce regulations.",
        },
        {
            name: "Data Protection Compliance",
            description: "Privacy policies, DPDP Act compliance, and data breach advisory.",
        },
        {
            name: "Intellectual Property",
            description: "Trademark registration, copyright filing, and infringement actions.",
        },
        {
            name: "Contract Drafting",
            description: "Drafting and reviewing NDAs, SLAs, employment agreements, and vendor contracts.",
        },
        {
            name: "Family Law",
            description: "Mutual divorce petitions, alimony disputes, and child custody matters.",
        },
        {
            name: "Criminal Law",
            description: "Bail applications, quashing petitions, and white-collar defense.",
        }
    ];

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
                        Practice Areas
                    </h1>
                    <p className="text-xl text-foreground/70 font-light leading-relaxed">
                        Legal services offered across various domains. The following is a
                        factual listing of our core practice areas.
                    </p>
                </motion.div>
            </section>

            {/* List Section - inspired by UI Design 2 */}
            <section className="pb-32 px-6 max-w-7xl mx-auto w-full">
                <div className="flex flex-col border-t border-foreground/10">
                    {practices.map((practice, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                            className="group flex flex-col md:flex-row md:items-center py-8 px-6 border-b border-foreground/10 hover:bg-secondary/20 transition-colors rounded-2xl cursor-pointer"
                        >
                            <div className="md:w-1/3 mb-4 md:mb-0">
                                <h3 className="text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                                    {practice.name}
                                </h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-foreground/70 text-lg leading-relaxed">
                                    {practice.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
