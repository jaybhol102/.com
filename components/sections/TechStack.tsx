"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const techGroups = [
  {
    group: "Cloud",
    color: "from-orange-500/20 to-yellow-500/20",
    border: "border-orange-500/20",
    items: [
      { name: "AWS", abbr: "AWS", color: "text-orange-400" },
      { name: "Azure", abbr: "AZ", color: "text-blue-400" },
      { name: "EC2", abbr: "EC2", color: "text-orange-300" },
      { name: "EKS", abbr: "EKS", color: "text-orange-300" },
      { name: "Lambda", abbr: "λ", color: "text-orange-400" },
      { name: "S3", abbr: "S3", color: "text-orange-300" },
    ],
  },
  {
    group: "Containers",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    items: [
      { name: "Docker", abbr: "🐳", color: "text-cyan-400" },
      { name: "Kubernetes", abbr: "☸", color: "text-blue-400" },
      { name: "Helm", abbr: "⚓", color: "text-blue-300" },
      { name: "ECR", abbr: "ECR", color: "text-blue-300" },
      { name: "ECS", abbr: "ECS", color: "text-blue-400" },
      { name: "Podman", abbr: "PM", color: "text-blue-300" },
    ],
  },
  {
    group: "CI/CD",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20",
    items: [
      { name: "Jenkins", abbr: "J", color: "text-red-400" },
      { name: "ArgoCD", abbr: "Argo", color: "text-orange-400" },
      { name: "GitLab CI", abbr: "GL", color: "text-orange-400" },
      { name: "Terraform", abbr: "TF", color: "text-purple-400" },
      { name: "Ansible", abbr: "A", color: "text-red-400" },
      { name: "Maven", abbr: "mvn", color: "text-red-300" },
    ],
  },
  {
    group: "Monitoring",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
    items: [
      { name: "Prometheus", abbr: "P", color: "text-orange-400" },
      { name: "Grafana", abbr: "G", color: "text-orange-400" },
      { name: "Datadog", abbr: "DD", color: "text-purple-400" },
      { name: "CloudWatch", abbr: "CW", color: "text-orange-300" },
      { name: "Sentry", abbr: "S", color: "text-pink-400" },
      { name: "Alert Mgr", abbr: "AM", color: "text-yellow-400" },
    ],
  },
  {
    group: "Languages",
    color: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/20",
    items: [
      { name: "Python", abbr: "Py", color: "text-yellow-400" },
      { name: "Bash", abbr: "sh", color: "text-green-400" },
      { name: "YAML", abbr: "yml", color: "text-pink-400" },
      { name: "SQL", abbr: "SQL", color: "text-blue-400" },
      { name: "HCL", abbr: "HCL", color: "text-purple-400" },
      { name: "Groovy", abbr: "Grv", color: "text-yellow-300" },
    ],
  },
  {
    group: "DevTools",
    color: "from-cyan-500/20 to-teal-500/20",
    border: "border-cyan-500/20",
    items: [
      { name: "Git", abbr: "git", color: "text-orange-400" },
      { name: "Linux", abbr: "🐧", color: "text-yellow-400" },
      { name: "Nginx", abbr: "N", color: "text-green-400" },
      { name: "SonarQube", abbr: "SQ", color: "text-blue-400" },
      { name: "Nexus", abbr: "Nx", color: "text-blue-300" },
      { name: "JIRA", abbr: "J", color: "text-blue-500" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tech Stack"
          title="Technology"
          titleGradient="Ecosystem"
          description="The complete toolkit I use to build, ship, and operate production-grade systems."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className={`p-5 rounded-2xl border ${group.border} overflow-hidden`}
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${group.color} text-xs font-semibold text-white/70 mb-4`}>
                {group.group}
              </div>

              <div className="grid grid-cols-3 gap-2">
                {group.items.map((tech, ti) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + ti * 0.04 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all cursor-default"
                  >
                    <div className={`text-lg font-bold font-mono ${tech.color} group-hover:scale-110 transition-transform`}>
                      {tech.abbr}
                    </div>
                    <span className="text-[10px] text-white/40 text-center leading-tight">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated ticker */}
        <div className="mt-12 overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 * 20] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 whitespace-nowrap"
          >
            {[...Array(3)].flatMap(() =>
              ["AWS", "Kubernetes", "Docker", "Terraform", "Jenkins", "ArgoCD", "Prometheus", "Grafana",
               "Ansible", "Python", "Bash", "GitLab", "Linux", "EKS", "Lambda", "CloudWatch", "Datadog", "Helm", "Nginx", "SonarQube"]
            ).map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/3 text-xs text-white/40 font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
