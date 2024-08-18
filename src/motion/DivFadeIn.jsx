import { motion } from "framer-motion";

export default function DivFadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
