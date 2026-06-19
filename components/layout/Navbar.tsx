"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let current = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#080B14]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollTo("#hero")}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm hidden sm:block">
                <span className="gradient-text-blue">Jay</span>
                <span className="text-white/80">.</span>
                <span className="text-white/60 font-mono text-xs">dev</span>
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const section = link.href.replace("#", "");
                const isActive = activeSection === section;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                      isActive
                        ? "text-white"
                        : "text-white/50 hover:text-white/90"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/8 rounded-lg border border-white/10"
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#080B14]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/8 transition-all text-left"
                >
                  <span className="text-blue-400 font-mono text-xs">0{i + 1}.</span>
                  {link.label}
                </motion.button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
