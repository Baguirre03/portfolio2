import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoNewspaperOutline } from "react-icons/io5";
import pdf from "../assets/Ben_Aguirre_Resume_2024.pdf";

export default function Socials() {
  return (
    <div className="socials fixed bottom-0 left-0 mb-4 ml-4 flex flex-col space-y-4">
      <a
        href="https://github.com/baguirre03"
        target="_blank"
        rel="noopener noreferrer"
        className=" text-gray-800 hover:text-gray-600 transition duration-300"
        aria-label="GitHub"
      >
        <IconContext.Provider
          value={{
            size: "45",
            className: "global-class-name",
            color: "black",
          }}
        >
          <div>
            <FaGithub />
          </div>
        </IconContext.Provider>
      </a>
      <a
        href="https://linkedin.com/in/ben-aguirre"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600 transition duration-300"
        aria-label="LinkedIn"
      >
        <IconContext.Provider
          value={{
            size: "45",
            className: "global-class-name",
            color: "blue",
          }}
        >
          <div>
            <FaLinkedin />
          </div>
        </IconContext.Provider>
      </a>
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-600 transition duration-300"
        aria-label="Resume"
      >
        <IconContext.Provider
          value={{
            size: "45",
            className: "global-class-name",
            color: "black",
          }}
        >
          <div>
            <IoNewspaperOutline />
          </div>
        </IconContext.Provider>
      </a>
    </div>
  );
}
