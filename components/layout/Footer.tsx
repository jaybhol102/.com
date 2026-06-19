"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone, Terminal, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-[#040608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold gradient-text-blue">Jaynarayan Bhol</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              DevOps Engineer specializing in cloud infrastructure, Kubernetes, and CI/CD automation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Skills", "Experience", "Projects", "Architecture", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-white/40 hover:text-blue-400 transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/70 uppercase tracking-wider">Connect</h4>
            <div className="space-y-2">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-sm text-white/40 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 flex items-center gap-1.5">
            © 2025 Jaynarayan Bhol · Built with{" "}
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            {" "}using Next.js & Tailwind CSS
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-blue-400 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
