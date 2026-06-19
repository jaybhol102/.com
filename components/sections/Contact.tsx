"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, Linkedin, Github, Send, CheckCircle, MessageSquare, MapPin, Clock
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/portfolio";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (integrate with EmailJS, Resend, or Formspree)
    await new Promise((r) => setTimeout(r, 1500));

    setLoading(false);
    setSent(true);
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jaybl",
      href: personalInfo.linkedin,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jaynarayan-bhol",
      href: personalInfo.github,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-blue-600/5 to-transparent blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Work"
          titleGradient="Together"
          description="Open to senior DevOps roles, cloud consulting, and infrastructure automation projects."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-white/10 bg-white/3 space-y-4"
            >
              <h3 className="text-lg font-bold text-white">Contact Details</h3>
              <div className="space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href, color, bg, border }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3.5 rounded-xl border ${border} ${bg} hover:opacity-90 transition-all group`}
                  >
                    <div className={`p-2 rounded-lg bg-white/10 ${color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40">{label}</div>
                      <div className={`text-sm font-medium ${color}`}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-2xl border border-white/8 bg-white/3 space-y-3"
            >
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                India (Open to Remote / Relocation)
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-green-400" />
                Response time: Within 24 hours
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-medium">Available for new opportunities</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl border border-white/10 bg-white/3">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/50">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/50">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/50">Subject *</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="DevOps Engineer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/50">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hello Jaynarayan, I'm reaching out about..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-500/60 focus:bg-white/8 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || sent}
                  className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30"
                >
                  {sent ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Message Sent!
                    </>
                  ) : loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
