import { motion } from "framer-motion";
import mobile from "../mobile";

export default function ParagraphFadeIn({ children, duration }) {
  return (
    <motion.div
      initial={{ opacity: mobile ? 1 : 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: duration },
      }}
      viewport={{ once: false, amount: 0.5 }}
      className="relative z-0 text-2xl font-black"
    >
      {children}
    </motion.div>
  );
}
