"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "purple" | "cyan" | "green" | "none";
  onClick?: () => void;
  delay?: number;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = "none",
  onClick,
  delay = 0,
}: GlassCardProps) {
  const glowClass = {
    blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
    purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]",
    cyan: "hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]",
    green: "hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]",
    none: "",
  }[glow];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      onClick={onClick}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "cursor-pointer",
        glowClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
