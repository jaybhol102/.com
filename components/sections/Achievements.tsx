"use client";

import { motion } from "framer-motion";
import { Calendar, Cloud, GitBranch, Box, Server } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    icon: Calendar,
    value: 4,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "In DevOps & Cloud",
    color: "from-blue-600 to-blue-700",
    glow: "shadow-blue-500/25",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
  },
  {
    icon: Cloud,
    value: 12,
    suffix: "+",
    label: "Cloud Projects",
    sublabel: "Delivered Successfully",
    color: "from-orange-500 to-yellow-600",
    glow: "shadow-orange-500/25",
    border: "border-orange-500/20",
    bg: "bg-orange-500/10",
  },
  {
    icon: GitBranch,
    value: 25,
    suffix: "+",
    label: "CI/CD Pipelines",
    sublabel: "Built & Maintained",
    color: "from-green-600 to-emerald-600",
    glow: "shadow-green-500/25",
    border: "border-green-500/20",
    bg: "bg-green-500/10",
  },
  {
    icon: Box,
    value: 50,
    suffix: "+",
    label: "K8s Deployments",
    sublabel: "Applications Deployed",
    color: "from-purple-600 to-violet-600",
    glow: "shadow-purple-500/25",
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
  },
  {
    icon: Server,
    value: 20,
    suffix: "+",
    label: "AWS Services Used",
    sublabel: "Across Projects",
    color: "from-cyan-600 to-teal-600",
    glow: "shadow-cyan-500/25",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-purple-950/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono text-blue-400/70 mb-2">{'// impact metrics'}</p>
          <h2 className="text-2xl font-bold text-white/80">By the Numbers</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map(({ icon: Icon, value, suffix, label, sublabel, color, glow, border, bg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className={`relative p-5 rounded-2xl border ${border} bg-gradient-to-br ${color} bg-opacity-5 overflow-hidden group cursor-default shadow-lg ${glow}`}
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              {/* BG gradient blob */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity`} />

              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${bg} mb-3`}>
                <Icon className={`w-5 h-5`} style={{ color: "inherit" }} />
              </div>

              <div className="text-3xl font-black text-white mb-1">
                <AnimatedCounter value={value} suffix={suffix} />
              </div>
              <div className="text-sm font-semibold text-white/80 leading-tight">{label}</div>
              <div className="text-xs text-white/40 mt-1">{sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
