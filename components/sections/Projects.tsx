"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Megaphone, Globe, Heart, ArrowUpRight, CheckCircle, TrendingUp, X
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  "building-2": Building2,
  megaphone: Megaphone,
  globe: Globe,
  heart: Heart,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Projects"
          title="Featured"
          titleGradient="Work"
          description="Real-world projects delivering measurable business impact through DevOps automation."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Globe;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative p-6 rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.color} cursor-pointer overflow-hidden`}
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${project.badgeColor} border ${project.borderColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${project.badgeColor}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 group-hover:text-white/70 transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white/90 group-hover:text-white transition-colors mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-white/40 mb-3">
                    {project.company} · {project.period}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Impact badge */}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/8 mb-4">
                    <TrendingUp className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="text-xs text-white/70">{project.impact}</span>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-md text-[11px] bg-white/8 border border-white/10 text-white/50">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] bg-white/8 border border-white/10 text-white/50">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0d1117] shadow-2xl"
            >
              {/* Modal header gradient */}
              <div className={`h-1 w-full bg-gradient-to-r ${selectedProject.color.replace("/20", "")}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${selectedProject.badgeColor} mb-2 inline-block`}>
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2>
                    <p className="text-sm text-white/40 mt-1">{selectedProject.company} · {selectedProject.period}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-white/70 leading-relaxed mb-6">{selectedProject.longDescription}</p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Key Highlights</h3>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-green-400/70 flex-shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-green-400/70 font-medium uppercase tracking-wider">Business Impact</span>
                      <p className="text-sm text-white/80 mt-0.5">{selectedProject.impact}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/8 border border-white/12 text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
