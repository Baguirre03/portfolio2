import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Socials from "./Socials";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar></Navbar>
      <Socials></Socials>
      <Hero></Hero>
      <About></About>
    </>
  );
}
