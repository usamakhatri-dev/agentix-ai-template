'use client';
import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
const EASE = [0.22, 1, 0.36, 1] as const;
const revealVariants: Variants = { hidden: { opacity: 0, y: 24 }, visible: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: EASE } }) };
export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={delay} className={className}>{children}</motion.div>;
}
const containerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } };
export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className={className}>{children}</motion.div>;
}
export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <motion.div variants={itemVariants} className={cn(className)}>{children}</motion.div>;
}
