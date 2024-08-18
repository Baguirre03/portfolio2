import { motion } from "framer-motion";

export default function ParagraphFadeIn({ children, duration }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: duration },
      }}
      viewport={{ once: false, amount: 0.5 }}
      className="relative z-0 text-3xl font-black uppercase"
    >
      {children}
    </motion.p>
  );
}
