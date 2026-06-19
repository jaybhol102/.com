"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleGradient,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("flex flex-col gap-4 mb-16", alignClass, className)}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {badge}
        </motion.div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
        {title}{" "}
        {titleGradient && (
          <span className="gradient-text">{titleGradient}</span>
        )}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className={cn("flex gap-1", align === "center" ? "justify-center" : "justify-start")}>
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="h-1 w-4 rounded-full bg-blue-500/30" />
        <div className="h-1 w-2 rounded-full bg-blue-500/20" />
      </div>
    </motion.div>
  );
}
