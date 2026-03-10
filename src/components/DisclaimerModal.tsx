"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DisclaimerModal() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasAccepted = sessionStorage.getItem("bci-disclaimer-accepted");
        if (!hasAccepted) {
            // Small delay for better UX
            const timer = setTimeout(() => setShow(true), 100);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        sessionStorage.setItem("bci-disclaimer-accepted", "true");
        setShow(false);
    };

    const handleDeny = () => {
        // If they deny, we can just redirect to google or show an error
        window.location.href = "https://www.google.com";
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        className="bg-[#2A2A2A] text-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-background">Welcome to Legal Nexus</h2>
                        <div className="space-y-4 text-sm text-gray-300 mb-8 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                            <p>
                                As per the rules of the Bar Council of India, we are not permitted to solicit
                                work and advertise. By clicking on the <strong>"I Agree"</strong> button below,
                                you acknowledge the following:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    There has been no advertisement, personal communication, solicitation,
                                    invitation or inducement of any sort whatsoever from us or any of our
                                    members to solicit any work through this website.
                                </li>
                                <li>
                                    The visitor wishes to gain more information about us for their own
                                    information and use.
                                </li>
                                <li>
                                    The information about us is provided to the user only on their specific
                                    request and any information obtained or materials downloaded from this
                                    website is completely at the user's volition and any transmission, receipt or
                                    use of this site would not create any lawyer-client relationship.
                                </li>
                            </ul>
                            <p>
                                The information provided under this website is solely available at your request for
                                informational purposes only, should not be interpreted as soliciting or
                                advertisement. We are not liable for any consequence of any action taken by the
                                user relying on material/information provided under this website. In cases where the
                                user has any legal issues, they in all cases must seek independent legal advice.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-end">
                            <button
                                onClick={handleDeny}
                                className="px-8 py-3 rounded-full border border-gray-500 text-gray-300 hover:bg-gray-800 transition-colors font-medium"
                            >
                                DECLINE
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-8 py-3 rounded-full bg-primary text-white hover:bg-[#d96536] transition-colors font-medium flex items-center justify-center gap-2 group"
                            >
                                I AGREE
                                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
