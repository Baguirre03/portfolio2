import { Link } from "react-router-dom";
import pdf from "../assets/Ben_Aguirre_Resume_2024.pdf";

export default function Navbar() {
  return (
    <nav className="sticky nav-section w-full bg-transparent flex-nowrap">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">
          <Link to="/" className="hover:text-blue-500 text-black">
            BA
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <a
            onClick={() => {
              const el = document.getElementById("home");
              el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </span>
          </a>{" "}
          <a
            onClick={() => {
              const el = document.getElementById("about");
              el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </span>
          </a>{" "}
          <a
            onClick={() => {
              const el = document.getElementById("projects");
              el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Projects
            </span>
          </a>{" "}
          <a
            onClick={() => {
              const el = document.getElementById("contact");
              el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
            </span>
          </a>{" "}
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Resume
            </span>
          </a>{" "}
        </div>
        <button
          className="md:hidden flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => {
            const el = document.querySelector(".nav-links-small-each");
            el.classList.toggle("shown");
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="nav-links-small-each md:hidden w-max-full">
        <div className="px-2 space-y-1 w-screen md:hidden flex flex-col justify-start items-end">
          <a
            onClick={() => {
              const el = document.getElementById("home");
              el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </span>
          </a>{" "}
          <a
            onClick={() => {
              const el = document.getElementById("about");
              el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </span>
          </a>{" "}
          <a
            onClick={() => {
              const el = document.getElementById("projects");
              el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Projects
            </span>
          </a>{" "}
          <a
            onClick={() => {
              const el = document.getElementById("contact");
              el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
            </span>
          </a>{" "}
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="hover:cursor-pointer text-gray-700 hover:text-blue-600 duration-300 group transition-all ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-blue-600 to-blue-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Resume
            </span>
          </a>{" "}
        </div>
      </div>
    </nav>
  );
}
