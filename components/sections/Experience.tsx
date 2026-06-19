"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { experience } from "@/data/portfolio";

export default function Experience() {
  const [expanded, setExpanded] = useState<number>(1);

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Work Experience"
          title="Professional"
          titleGradient="Journey"
          description="4 years of building cloud infrastructure, automating deployments, and scaling systems."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-transparent transform -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-transparent md:hidden" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-[#080B14] transform -translate-x-1/2 top-6 z-10 shadow-lg shadow-blue-500/40 hidden md:block" />
                <div className="absolute left-8 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-[#080B14] transform -translate-x-1/2 top-6 z-10 md:hidden" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className="flex-1 ml-14 md:ml-0 md:max-w-[calc(50%-2rem)]">
                  <div
                    className={`group p-6 rounded-2xl border transition-all duration-300 cursor-pointer
                      ${expanded === job.id
                        ? "border-white/15 bg-white/5"
                        : "border-white/8 bg-white/3 hover:border-white/12 hover:bg-white/4"
                      }`}
                    onClick={() => setExpanded(expanded === job.id ? -1 : job.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        {/* Company logo */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white font-bold text-sm`}>
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white/90">{job.role}</h3>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className="text-sm font-medium text-blue-400">{job.company}</span>
                            {job.current && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/15 text-green-400 border border-green-500/25">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button className="text-white/30 hover:text-white/70 transition-colors flex-shrink-0 mt-1">
                        {expanded === job.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mt-3 text-xs text-white/40">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{job.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                      <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{job.type}</span>
                    </div>

                    {/* Description (always visible) */}
                    <p className="text-sm text-white/50 leading-relaxed mt-3">
                      {job.description}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {expanded === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 space-y-3">
                            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, ri) => (
                                <motion.li
                                  key={ri}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: ri * 0.05 }}
                                  className="flex items-start gap-2.5 text-sm text-white/60"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-400/70 flex-shrink-0 mt-0.5" />
                                  {resp}
                                </motion.li>
                              ))}
                            </ul>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {job.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
