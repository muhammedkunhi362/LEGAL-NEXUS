"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-6"
          >
            Backing Clients That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d96536]">
              Move Forward
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Legal Nexus is an early-stage law firm passionate about human-centered
            solutions. We provide factual, comprehensive consulting across diverse practice areas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/practice-areas"
              className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-primary transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Our Practice Areas
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-secondary/50 text-foreground rounded-full font-medium hover:border-primary transition-colors w-full sm:w-auto justify-center"
            >
              Meet The Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Hello from your future partners.
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Let's turn your vision into the next big thing—together. We go beyond simple consultation—we're hands-on partners committed to your structural success.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              When you're building the next breakthrough, we bring the expertise, network, and resources to scale your operational compliance and litigation strategies.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Registered</h4>
                  <p className="text-sm text-foreground/60">Bar Council of India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-sm text-foreground/60">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#2A2A2A] rounded-3xl p-10 text-white shadow-xl relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary rounded-full blur-3xl opacity-20" />

            <h3 className="text-3xl font-bold mb-8">At a Glance</h3>

            <div className="space-y-8 relative z-10">
              <div>
                <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Practice Details</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Corporate Advisory</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Civil & Commercial Litigation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Technology & Data Privacy Law</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Intellectual Property</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">Quick Contact</h4>
                <div className="flex flex-col gap-4">
                  <a href="tel:08049595965" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Phone size={20} />
                    <span>080 4959 5965</span>
                  </a>
                  <a href="mailto:contact@legalnexus.in" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail size={20} />
                    <span>contact@legalnexus.in</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
