"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Home, Users, Briefcase, BookOpen, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Users },
    { name: "Practice Areas", href: "/practice-areas", icon: Briefcase },
    { name: "Publications", href: "/publications", icon: BookOpen },
  ];

  // Mobile menu container animation
  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10, transformOrigin: "top" },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1], // Custom bouncy ease out
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
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
    <div className={`fixed w-full z-50 transition-all duration-300 flex justify-center px-4 md:px-6 ${scrolled ? "top-3" : "top-8"}`}>
      <nav className="relative w-full max-w-5xl bg-background/50 dark:bg-black/30 backdrop-blur-xl md:backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-full pl-6 pr-3 py-2.5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col group py-1">
          <span className="text-xl md:text-[22px] font-bold tracking-tighter text-foreground leading-none">
            LEGAL<span className="text-primary">NEXUS</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.15em] text-foreground/50 mt-1">
            ADVOCATES & CONSULTANTS
          </span>
        </Link>

        {/* Desktop Nav - The Pill Container */}
        <div className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full p-1.5 ml-8">
          {navLinks.map((link) => {
            const isExactActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-300 ${isExactActive
                  ? "bg-black/10 dark:bg-white/10 text-foreground shadow-sm"
                  : "text-foreground/70 hover:text-primary hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Action / Desktop */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="w-[46px] h-[46px] rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-foreground hover:bg-black/10 dark:hover:bg-white/10 hover:text-primary transition-all group shadow-sm hover:shadow"
            aria-label="Contact Us"
            title="Contact Us"
          >
            <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden w-[46px] h-[46px] mr-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-foreground hover:bg-black/10 dark:hover:bg-white/10 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-[calc(100%+0.75rem)] left-0 w-full bg-background/40 dark:bg-[#0a0a0a]/50 backdrop-blur-3xl border border-black/10 dark:border-white/10 shadow-2xl rounded-3xl overflow-hidden z-50 p-2"
            >
              <div className="bg-background/20 dark:bg-white/5 rounded-2xl flex flex-col gap-1 p-3">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isExactActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                  return (
                    <motion.div key={link.name} variants={linkVariants}>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-3 text-base font-medium p-3 rounded-xl transition-all ${isExactActive
                          ? "bg-black/10 dark:bg-white/10 text-foreground"
                          : "text-foreground/80 hover:text-primary hover:bg-black/5 dark:hover:bg-white/5"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className={isExactActive ? "text-primary" : "text-foreground/50"} size={18} />
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div variants={linkVariants} className="mt-2 pt-2 border-t border-black/10 dark:border-white/10">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-foreground text-background py-3.5 rounded-xl text-sm font-semibold hover:bg-primary transition-all shadow-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <MessageSquare size={18} />
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
