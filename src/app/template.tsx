"use client";
import { motion, useReducedMotion } from "motion/react";
export default function Template({children}:{children:React.ReactNode}) {
  const reduced=useReducedMotion();
  return <motion.div data-page-transition initial={{opacity:0}} animate={{opacity:1}} transition={{duration:reduced?0:.22}}>{children}</motion.div>;
}
