"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Architecture from "@/components/sections/Architecture";
import TechStack from "@/components/sections/TechStack";
import ResumeSection from "@/components/sections/ResumeSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <Hero />

      <div className="section-divider" />
      <About />

      <div className="section-divider" />
      <Achievements />

      <div className="section-divider" />
      <Skills />

      <div className="section-divider" />
      <Experience />

      <div className="section-divider" />
      <Projects />

      <div className="section-divider" />
      <Architecture />

      <div className="section-divider" />
      <TechStack />

      <div className="section-divider" />
      <Certifications />

      <div className="section-divider" />
      <ResumeSection />

      <div className="section-divider" />
      <Contact />

      <Footer />
    </main>
  );
}
