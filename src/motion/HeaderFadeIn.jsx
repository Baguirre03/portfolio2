import { motion } from "framer-motion";
import mobile from "../mobile";

export default function HeaderFadeIn({ content }) {
  return (
    <motion.h1
      initial={{ opacity: mobile ? 1 : 0, y: mobile ? 0 : 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: false, amount: 0.5 }}
      className="relative z-0 font-black uppercase sm:text-5xl md:text-6xl"
    >
      {content}
    </motion.h1>
  );
}
