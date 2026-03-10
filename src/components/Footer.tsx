import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#2A2A2A] text-white pt-20 pb-10 px-6 md:px-12 rounded-t-[3rem] mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 border-b border-gray-700 pb-12">
                <div className="max-w-md">
                    <h2 className="text-4xl font-bold mb-6 tracking-tight">LEGAL NEXUS</h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Advocates & Consultants providing factual, comprehensive legal services across diverse practice areas.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors"
                    >
                        GET IN TOUCH <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="flex gap-16">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-gray-300 mb-2">QUICK LINKS</h3>
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                        <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                        <Link href="/practice-areas" className="text-gray-400 hover:text-white transition-colors">Practice Areas</Link>
                        <Link href="/publications" className="text-gray-400 hover:text-white transition-colors">Publications</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-gray-300 mb-2">LEGAL</h3>
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Legal Nexus Advocates & Consultants. All rights reserved.</p>
                <p className="mt-2 md:mt-0 text-center">
                    In compliance with the Bar Council of India rules. This website is for informational purposes only.
                </p>
            </div>
        </footer>
    );
}
