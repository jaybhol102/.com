"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Download, Mail, Linkedin, Github, ChevronDown,
  MapPin, Briefcase, Award, Server
} from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { personalInfo, typingRoles, achievements } from "@/data/portfolio";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const current = typingRoles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && displayed === current) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && displayed === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        return;
      }
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const quickStats = [
    { icon: Briefcase, label: "Experience", value: "4+ Years" },
    { icon: Server, label: "AWS Services", value: "20+" },
    { icon: Award, label: "Certified", value: "AWS CCP" },
    { icon: MapPin, label: "Location", value: "India" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient-bg mesh-gradient" />
      <ParticleBackground />

      {/* Radial glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT: Content */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-white">Hi, I&apos;m</span>
                <span className="block gradient-text mt-1">
                  {personalInfo.firstName}
                </span>
                <span className="block text-white/90">{personalInfo.lastName}</span>
              </h1>
            </motion.div>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 justify-center lg:justify-start"
            >
              <span className="text-white/40 text-lg font-mono">&gt;</span>
              <span className="text-xl md:text-2xl font-mono font-semibold text-blue-400">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-blue-400 ml-0.5 animate-pulse" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.resumeUrl}
                download
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {[
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400/40" },
                { icon: Github, href: personalInfo.github, label: "GitHub", color: "hover:text-purple-400 hover:border-purple-400/40" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "hover:text-cyan-400 hover:border-cyan-400/40" },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-white/40 bg-white/5 transition-all duration-200 hover:-translate-y-0.5 ${color}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2"
            >
              {quickStats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2 p-3 rounded-xl bg-white/3 border border-white/8">
                  <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-xs text-white/40">{label}</div>
                    <div className="text-sm font-semibold text-white/90">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="relative flex-shrink-0 order-1 lg:order-2"
          >
            {/* Outer ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 animate-spin-slow opacity-70" style={{ padding: "3px" }}>
                <div className="w-full h-full rounded-full bg-[#080B14]" />
              </div>

              {/* Inner glow ring */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10" />

              {/* Profile image */}
              <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-blue-900/50 to-purple-900/50">
                {/* Placeholder - replace with actual profile image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
                  <span className="text-6xl sm:text-7xl font-black gradient-text select-none">JB</span>
                </div>
                {/* Uncomment when you have a profile.jpg in /public: */}
                {/* <Image src="/profile.jpg" alt="Jaynarayan Bhol" fill className="object-cover" /> */}
              </div>

              {/* Floating tech badges */}
              {[
                { label: "AWS", color: "bg-orange-500/20 border-orange-500/40 text-orange-300", angle: -30, radius: 130 },
                { label: "K8s", color: "bg-blue-500/20 border-blue-500/40 text-blue-300", angle: 45, radius: 130 },
                { label: "Docker", color: "bg-cyan-500/20 border-cyan-500/40 text-cyan-300", angle: 120, radius: 130 },
                { label: "Terraform", color: "bg-purple-500/20 border-purple-500/40 text-purple-300", angle: 200, radius: 130 },
              ].map(({ label, color, angle, radius }) => {
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <motion.div
                    key={label}
                    animate={{ y: [y, y - 6, y] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute px-2.5 py-1 rounded-lg text-xs font-bold border backdrop-blur-sm ${color}`}
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 12px)`,
                    }}
                  >
                    {label}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Achievement Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {achievements.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-black gradient-text">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </span>
              <span className="text-xs text-white/40 text-center">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
        className="absolute bottom-8 text-white/30 hover:text-white/60 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
