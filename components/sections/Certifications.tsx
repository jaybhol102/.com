"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { certifications, education } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Credentials"
          title="Certifications &"
          titleGradient="Education"
          description="Professional credentials validating cloud expertise and academic foundation."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              Professional Certifications
            </h3>
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className={`group relative p-6 rounded-2xl border ${cert.borderColor} overflow-hidden`}
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Gradient BG */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

                <div className="relative flex items-start gap-5">
                  {/* Badge */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex flex-col items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{cert.logo}</span>
                    <span className="text-[10px] font-bold text-white/90">{cert.badge}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-white/90">{cert.name}</h3>
                      <span className="flex-shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium bg-green-500/15 text-green-400 border border-green-500/25 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        Active
                      </span>
                    </div>
                    <p className="text-sm text-blue-400 font-medium mt-0.5">{cert.issuer}</p>

                    <div className="flex flex-wrap gap-3 mt-3 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        Issued: {cert.issued}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        Expires: {cert.expires}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {cert.skills.map((skill) => (
                        <span key={skill} className={`px-2 py-0.5 rounded-md text-[11px] ${cert.bgColor} border ${cert.borderColor} text-white/60`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* In Progress */}
            <div className="p-4 rounded-2xl border border-dashed border-white/15 bg-white/2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white/30" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/50">Next Certification</p>
                  <p className="text-xs text-white/30">AWS Solutions Architect – Associate (In Progress)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education + Skills summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Education</h3>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/3"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white font-bold text-xs`}>
                    UU
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white/90">{edu.degree}</h3>
                    <p className="text-sm text-blue-400 font-medium">{edu.institution}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-white/40">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{edu.year}</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Learning highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border border-white/8 bg-white/3"
            >
              <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Continuous Learning</h3>
              <div className="space-y-3">
                {[
                  { topic: "Kubernetes Advanced Patterns", status: "Active", color: "text-blue-400" },
                  { topic: "AWS Solutions Architect", status: "In Progress", color: "text-orange-400" },
                  { topic: "GitOps with ArgoCD & Flux", status: "Completed", color: "text-green-400" },
                  { topic: "Terraform Advanced Modules", status: "Completed", color: "text-green-400" },
                  { topic: "Platform Engineering", status: "Exploring", color: "text-purple-400" },
                ].map(({ topic, status, color }) => (
                  <div key={topic} className="flex items-center justify-between text-sm">
                    <span className="text-white/60">{topic}</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-white/8 ${color}`}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
