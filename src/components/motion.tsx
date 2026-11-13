"use client";
import { motion, useReducedMotion } from "motion/react";
export function Reveal({ children, className = "" }: {children: React.ReactNode; className?: string}) {
  const reduced = useReducedMotion();
  return <motion.div data-reveal className={className} initial={{opacity:0, y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.08}} transition={{duration:reduced?0:.5}}>{children}</motion.div>;
}
