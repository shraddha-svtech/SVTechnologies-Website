"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  category?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  category,
  children,
  isOpen = false,
  onToggle,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 overflow-hidden",
        isOpen
          ? "border-cyan-500/40 bg-slate-900/90 shadow-[0_0_25px_rgba(0,240,255,0.08)]"
          : "border-slate-800/80 bg-slate-900/40 hover:border-slate-700/80",
        className
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
      >
        <div className="flex flex-col gap-1 pr-4">
          {category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {category}
            </span>
          )}
          <span className="text-lg font-bold text-slate-100 font-heading">
            {title}
          </span>
        </div>
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/60 text-slate-300 transition-transform duration-300",
            isOpen && "rotate-180 border-cyan-500/50 text-cyan-400 bg-cyan-950/40"
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 text-sm text-slate-300 leading-relaxed border-t border-slate-800/40 mt-1 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
