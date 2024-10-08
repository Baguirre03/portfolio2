import { FaArrowDown } from "react-icons/fa6";
import { IconContext } from "react-icons";
import DivFadeIn from "../motion/DivFadeIn";

export default function Hero() {
  return (
    <section
      id="home"
      className="font-spartan web-hero relative h-full min-h-screen flex items-center justify-center bg-white flex-col"
    >
      <div className="relative z-10 text-center px-6 py-12">
        <DivFadeIn>
          <h1 className="font-extrabold mb-6 text-gray-900 sm:text-5xl md:text-6xl">
            Ben Aguirre
            <br />
            Full-Stack Developer
          </h1>
          <p className="text-lg mb-8 md:text-2xl text-gray-700">
            I'm a current senior at Loyola Unversity Chicago, studying marketing
            and computer science. <br />I love to build projects and solve
            unique problems! Currently looking for a full-time job after
            graduation.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              onClick={() => {
                const el = document.getElementById("contact");
                el.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
            >
              Contact Me
            </a>
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
