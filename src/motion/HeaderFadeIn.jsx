import { motion } from "framer-motion";

export default function HeaderFadeIn({ content }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      viewport={{ once: true, amount: 0.5 }}
      className="relative z-0 font-black uppercase sm:text-5xl md:text-6xl"
    >
      {content}
    </motion.h1>
  );
}
