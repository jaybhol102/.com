"use client";

import { motion } from "framer-motion";
import { Download, FileText, Eye, CheckCircle, Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/portfolio";

const resumeHighlights = [
  "4+ years DevOps & Cloud Engineering experience",
  "AWS Certified Cloud Practitioner",
  "Kubernetes & Docker container orchestration",
  "Terraform IaC for multi-environment setups",
  "CI/CD pipelines with Jenkins & ArgoCD",
  "Prometheus + Grafana observability stack",
  "Python & Bash scripting automation",
  "Multi-cloud: AWS & Azure experience",
];

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-purple-950/10 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Resume"
          title="Download My"
          titleGradient="CV / Resume"
          description="A comprehensive overview of my skills, experience, and achievements."
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Resume preview card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl border border-white/10 bg-white/3 overflow-hidden">
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px)`
              }} />

              {/* Mock resume content */}
              <div className="relative space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-sm">
                    JB
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">{personalInfo.name}</div>
                    <div className="text-xs text-blue-400">{personalInfo.title}</div>
                    <div className="text-[11px] text-white/40">{personalInfo.email}</div>
                  </div>
                </div>

                {["Professional Summary", "Work Experience", "Technical Skills", "Projects", "Certifications"].map((section) => (
                  <div key={section} className="space-y-1.5">
                    <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider">{section}</div>
                    <div className="space-y-1">
                      <div className="h-2 bg-white/10 rounded-full w-full" />
                      <div className="h-2 bg-white/8 rounded-full w-4/5" />
                      <div className="h-2 bg-white/6 rounded-full w-3/5" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium">
                <FileText className="w-3.5 h-3.5" />
                PDF Ready
              </div>
            </div>
          </motion.div>

          {/* Right: Info + download */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">What&apos;s Inside</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                A professionally crafted resume covering 4 years of DevOps engineering experience,
                certifications, and key project achievements.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {resumeHighlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-white/60">
                  <CheckCircle className="w-4 h-4 text-green-400/70 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={personalInfo.resumeUrl}
                download="Jaynarayan_Bhol_Resume.pdf"
                className="group flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download PDF
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold transition-all duration-200"
              >
                <Eye className="w-4 h-4" />
                Preview
              </a>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-white/3 border border-white/8">
              <Briefcase className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <p className="text-xs text-white/50">
                Currently at <span className="text-blue-400 font-medium">Leewayhertz Pvt. Ltd.</span> · Open to senior DevOps opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
