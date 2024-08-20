import { motion } from "framer-motion";
import mobile from "../mobile";

export default function DivFadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: mobile ? 1 : 0, y: 50 }}
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
