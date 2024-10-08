import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Socials from "./Socials";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {" "}
      <div>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar></Navbar>
        <Socials></Socials>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}
