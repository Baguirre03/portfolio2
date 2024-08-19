import { motion } from "framer-motion";

export default function SlideIn({ children, duration }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.3, duration: duration },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="relative z-0 text-2xl font-black"
    >
      {children}
    </motion.div>
  );
}
