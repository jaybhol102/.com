"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Cloud, Shield, GitBranch, Layers } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const highlights = [
  { icon: Cloud, text: "AWS & Azure Cloud Architecture", color: "text-orange-400" },
  { icon: Layers, text: "Kubernetes & Container Orchestration", color: "text-blue-400" },
  { icon: GitBranch, text: "CI/CD Pipeline Automation", color: "text-green-400" },
  { icon: Code2, text: "Infrastructure as Code (Terraform)", color: "text-purple-400" },
  { icon: Shield, text: "DevSecOps & SonarQube SAST", color: "text-cyan-400" },
  { icon: CheckCircle2, text: "24×7 Monitoring & Observability", color: "text-pink-400" },
];

const coreValues = [
  { title: "Automation First", desc: "Every manual process is an opportunity for automation." },
  { title: "Reliability Focused", desc: "Building resilient systems with 99.9% uptime targets." },
  { title: "Security Minded", desc: "Integrating security at every stage of the pipeline." },
  { title: "Continuous Learning", desc: "Staying ahead with the latest cloud-native technologies." },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="About Me"
          title="Passionate About"
          titleGradient="Cloud Infrastructure"
          description="Building and automating enterprise-grade infrastructure that scales."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                I&apos;m a <span className="text-white font-semibold">DevOps Engineer</span> with over 4 years of
                hands-on experience designing, implementing, and managing cloud-native infrastructure for
                organizations across financial services, advertising, and health-tech domains.
              </p>
              <p>
                Currently working at <span className="text-blue-400 font-semibold">Leewayhertz Pvt. Ltd.</span>,
                I specialize in architecting reliable CI/CD pipelines, automating infrastructure with Terraform,
                and orchestrating containerized workloads on Kubernetes clusters in AWS.
              </p>
              <p>
                My career has taken me through high-impact projects including a complete financial cloud transformation,
                a global advertising platform serving millions of daily ad impressions, and a serverless Azure
                monitoring solution covering 5 international markets.
              </p>
              <p>
                I hold the <span className="text-orange-400 font-semibold">AWS Certified Cloud Practitioner</span>{" "}
                credential and am actively expanding my expertise in advanced Kubernetes administration and
                GitOps workflows.
              </p>
            </div>

            {/* Core values */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {coreValues.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/3 border border-white/8 hover:border-blue-500/30 hover:bg-white/5 transition-all"
                >
                  <div className="text-sm font-semibold text-white/90 mb-1">{val.title}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{val.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white/80 mb-6">Areas of Expertise</h3>
            {highlights.map(({ icon: Icon, text, color }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-white/15 hover:bg-white/5 transition-all group"
              >
                <div className={`flex-shrink-0 p-2 rounded-lg bg-white/5 ${color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-white/70 group-hover:text-white/90 transition-colors font-medium">
                  {text}
                </span>
              </motion.div>
            ))}

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { label: "Current Role", value: "DevOps Engineer" },
                { label: "Company", value: "Leewayhertz" },
                { label: "Location", value: "India" },
                { label: "Education", value: "B.Sc. – Utkal University" },
              ].map(({ label, value }) => (
                <div key={label} className="p-3 rounded-xl bg-white/3 border border-white/8">
                  <div className="text-xs text-white/40 mb-1">{label}</div>
                  <div className="text-sm font-semibold text-white/80">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
