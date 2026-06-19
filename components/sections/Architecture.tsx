"use client";

import { motion } from "framer-motion";
import { GitBranch, Settings, Package, Archive, Layers, Activity, ArrowRight, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  "git-branch": GitBranch,
  settings: Settings,
  package: Package,
  archive: Archive,
  layers: Layers,
  activity: Activity,
};

const pipeline = [
  {
    id: "code",
    step: "01",
    title: "Source Control",
    desc: "Code pushed to GitLab/GitHub triggers pipeline",
    tools: ["GitLab", "GitHub", "Bitbucket"],
    icon: "git-branch",
    color: "from-gray-600 to-slate-700",
    glow: "shadow-gray-500/20",
    border: "border-gray-500/30",
  },
  {
    id: "ci",
    step: "02",
    title: "CI Pipeline",
    desc: "Jenkins/ArgoCD builds, tests, and validates",
    tools: ["Jenkins", "ArgoCD", "SonarQube"],
    icon: "settings",
    color: "from-blue-600 to-indigo-700",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/30",
  },
  {
    id: "build",
    step: "03",
    title: "Build & Package",
    desc: "Docker image built and tagged with version",
    tools: ["Docker", "Maven", "BuildKit"],
    icon: "package",
    color: "from-cyan-600 to-sky-700",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/30",
  },
  {
    id: "registry",
    step: "04",
    title: "Registry",
    desc: "Image pushed to AWS ECR / Docker Hub",
    tools: ["AWS ECR", "Docker Hub", "Nexus"],
    icon: "archive",
    color: "from-orange-500 to-amber-600",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/30",
  },
  {
    id: "k8s",
    step: "05",
    title: "Kubernetes",
    desc: "Deployed to EKS with rolling updates & HPA",
    tools: ["EKS", "Helm", "Kubectl"],
    icon: "layers",
    color: "from-purple-600 to-violet-700",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/30",
  },
  {
    id: "monitor",
    step: "06",
    title: "Monitoring",
    desc: "Prometheus metrics, Grafana dashboards, alerts",
    tools: ["Prometheus", "Grafana", "Datadog"],
    icon: "activity",
    color: "from-green-600 to-emerald-700",
    glow: "shadow-green-500/20",
    border: "border-green-500/30",
  },
];

const infrastructure = [
  { label: "Multi-AZ VPC", desc: "Highly available network" },
  { label: "Auto Scaling", desc: "Dynamic capacity management" },
  { label: "Load Balancing", desc: "Traffic distribution via ELB" },
  { label: "IAM Roles", desc: "Least-privilege access" },
  { label: "S3 / EBS", desc: "Persistent storage layers" },
  { label: "CloudWatch", desc: "Logs & metric visibility" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/8 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="DevOps Architecture"
          title="CI/CD"
          titleGradient="Pipeline Flow"
          description="An end-to-end automated delivery pipeline from source code to production monitoring."
        />

        {/* Pipeline Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {pipeline.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Arrow connector (desktop) */}
                {i < pipeline.length - 1 && (
                  <div className="absolute top-8 -right-2 z-10 hidden lg:block">
                    <ArrowRight className="w-4 h-4 text-white/20" />
                  </div>
                )}

                <div className={`group p-5 rounded-2xl border ${step.border} bg-white/3 hover:bg-white/5 transition-all duration-300 h-full flex flex-col gap-3 shadow-lg ${step.glow} hover:shadow-xl`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white/30">{step.step}</span>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} bg-opacity-20`}
                      style={{ background: "rgba(255,255,255,0.08)" }}>
                      <Icon className="w-4 h-4 text-white/80" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white/90 mb-1">{step.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {step.tools.map((tool) => (
                      <span key={tool} className={`px-1.5 py-0.5 rounded text-[10px] font-medium bg-gradient-to-r ${step.color} bg-opacity-15 text-white/60`}
                        style={{ background: "rgba(255,255,255,0.06)" }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual pipeline flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl border border-white/8 bg-white/3 mb-8"
        >
          <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Pipeline Visualization</h3>
          <div className="flex items-center gap-2 flex-wrap">
            {pipeline.map((step, i) => (
              <div key={step.id} className="flex items-center gap-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, type: "spring" }}
                  className={`px-4 py-2 rounded-xl bg-gradient-to-r ${step.color} text-white text-sm font-semibold shadow-lg`}
                >
                  {step.title}
                </motion.div>
                {i < pipeline.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.05 }}
                    className="flex items-center gap-1"
                  >
                    <div className="w-6 h-px bg-gradient-to-r from-white/30 to-white/10" />
                    <ArrowRight className="w-3 h-3 text-white/30" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* AWS Infrastructure overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/8 bg-white/3"
          >
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">AWS Infrastructure Components</h3>
            <div className="grid grid-cols-2 gap-3">
              {infrastructure.map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/8">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white/80">{label}</div>
                    <div className="text-xs text-white/40">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5"
          >
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Deployment Strategy</h3>
            <div className="space-y-3">
              {[
                { label: "Rolling Updates", desc: "Zero-downtime deployments with K8s rolling strategy" },
                { label: "Blue-Green Deploy", desc: "Instant traffic switching between environments" },
                { label: "GitOps Workflow", desc: "ArgoCD syncs cluster state from Git repository" },
                { label: "Auto Rollback", desc: "Automatic rollback on health check failures" },
                { label: "HPA / VPA", desc: "Horizontal & vertical pod autoscaling by metrics" },
                { label: "Secrets Management", desc: "K8s secrets + AWS SSM for secure config" },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-2.5 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-1.5" />
                  <div>
                    <span className="font-semibold text-white/80">{label}</span>
                    <span className="text-white/40"> — {desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
