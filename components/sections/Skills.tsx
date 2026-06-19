"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud, Layers, Settings, Activity, Code, Database, Shield,
  Box, GitBranch, Terminal, Cpu, BarChart2, Eye, Bell, Monitor, Globe, Package, Server, Zap
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  cloud: Cloud, layers: Layers, settings: Settings, activity: Activity, code: Code,
  database: Database, shield: Shield, box: Box, "git-branch": GitBranch, terminal: Terminal,
  cpu: Cpu, "bar-chart": BarChart2, eye: Eye, bell: Bell, monitor: Monitor, globe: Globe,
  package: Package, server: Server, zap: Zap, anchor: Layers, archive: Box,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Technical Skills"
          title="Tools &"
          titleGradient="Technologies"
          description="A comprehensive toolkit for building and managing enterprise cloud infrastructure."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skills.map((cat, i) => (
            <motion.button
              key={cat.category}
              onClick={() => setActiveCategory(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === i
                  ? "text-white"
                  : "text-white/50 hover:text-white/80 bg-white/3 border border-white/8"
              }`}
            >
              {activeCategory === i && (
                <motion.span
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cat.color} opacity-20 border border-white/20`}
                />
              )}
              <span className="relative">{cat.category}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {skills[activeCategory].items.map((skill, i) => {
              const Icon = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className={`group relative p-5 rounded-2xl border ${skills[activeCategory].borderColor} ${skills[activeCategory].bgColor} overflow-hidden cursor-default`}
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skills[activeCategory].color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className={`p-3 rounded-xl ${skills[activeCategory].bgColor} border ${skills[activeCategory].borderColor}`}>
                      <Icon className={`w-6 h-6 bg-gradient-to-r ${skills[activeCategory].color}`} style={{ filter: "brightness(1.5)" }} />
                    </div>
                    <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors leading-tight">
                      {skill.name}
                    </span>
                    {/* Progress bar */}
                    <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: i * 0.08 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skills[activeCategory].color}`}
                      />
                    </div>
                    <span className="text-xs text-white/30">{skill.level}%</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* All skills overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-6 rounded-2xl bg-white/3 border border-white/8"
        >
          <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">All Technologies At a Glance</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Jenkins", "ArgoCD",
              "Prometheus", "Grafana", "Datadog", "Ansible", "Python", "Shell Scripting",
              "GitLab CI", "GitHub Actions", "Maven", "Nginx", "Apache", "Linux",
              "EC2", "EKS", "ECS", "Lambda", "S3", "CloudWatch", "VPC", "IAM",
              "Route 53", "RDS", "SNS", "SQS", "ECR", "SonarQube", "Nexus", "JIRA",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
