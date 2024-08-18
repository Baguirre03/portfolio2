import ButtonLink from "../components/ButtonLink";
import { FaArrowDown } from "react-icons/fa6";
import { IconContext } from "react-icons";
import HeaderFadeIn from "../motion/HeaderFadeIn";
import DivFadeIn from "../motion/DivFadeIn";

export default function Hero() {
  return (
    <section className="web-hero relative h-full min-h-screen flex items-center justify-center bg-white flex-col">
      <div className="relative z-10 text-center px-6 py-12">
        <DivFadeIn>
          <h1 className=" font-extrabold mb-6 text-gray-900 sm:text-5xl md:text-6xl">
            Ben Aguirre
            <br />A Full-Stack Developer
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            I'm a current senior at Loyola Unversity Chicago sudent, studying
            marketing and computer science. <br />I love to build projects and
            solve unique problems :)!
          </p>
          <div className="flex justify-center space-x-4">
            <ButtonLink to="contact" content="Contact Me"></ButtonLink>
          </div>
        </DivFadeIn>
      </div>
      <div className="absolute arrow flex justify-center bottom-4">
        <IconContext.Provider
          value={{
            size: "3em",
            className: "global-class-name",
            title: "scroll-arrow",
          }}
        >
          <div>
            <FaArrowDown />
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
}
