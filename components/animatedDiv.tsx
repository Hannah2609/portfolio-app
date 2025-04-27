"use client";
import { motion } from "framer-motion";

const AnimatedDiv = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default AnimatedDiv;
