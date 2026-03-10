"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Home, Users, Briefcase, BookOpen, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/", icon: Home },
    { name: "ABOUT US", href: "/about", icon: Users },
    { name: "PRACTICE AREAS", href: "/practice-areas", icon: Briefcase },
    { name: "PUBLICATIONS", href: "/publications", icon: BookOpen },
  ];

  // Mobile menu container animation
  const menuVariants = {
    hidden: { opacity: 0, height: 0, clipPath: 'inset(0% 0% 100% 0%)' },
    visible: {
      opacity: 1,
      height: 'auto',
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom bouncy ease out
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      clipPath: 'inset(0% 0% 100% 0%)',
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  } as const;

  // Mobile link item animation
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
  } as const;

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tighter text-foreground leading-none">
            LEGAL<span className="text-primary">NEXUS</span>
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-foreground/60 mt-1">
            ADVOCATES & CONSULTANTS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary transition-colors"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-background border-t border-secondary/20 shadow-2xl overflow-hidden"
          >
            <div className="py-6 px-6 flex flex-col gap-2 max-h-[80vh] overflow-y-auto custom-scrollbar">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.div key={link.name} variants={linkVariants}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/10 p-3 rounded-xl transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="text-primary" size={20} />
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div variants={linkVariants} className="mt-4 pt-4 border-t border-secondary/20">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 w-full bg-foreground text-background py-4 rounded-xl font-medium hover:bg-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageSquare size={20} />
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
