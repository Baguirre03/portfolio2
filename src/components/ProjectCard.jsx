import tests from "../assets/landscape.jpg";
import ProjectButton from "./ProjectButton";
import Skill from "./SkillsUsed";

const testSkills = ["react", "js", "css", "tailwind", "nodejs"];
const testLinks = ["one", "two", "three"];

export default function ProjectCard({
  title,
  links,
  skills,
  src,
  description,
}) {
  return (
    <div className="project-card bg-white text-black shadow-sm p-4 sm:p-8 flex flex-col sm:flex-row border overflow-hidden mb-4">
      <img
        src={src}
        alt="Photo"
        className="project-photo w-full sm:w-1/3 object-cover h-48 sm:h-auto border-b sm:border-none"
      />
      <div className="p-4 flex-1">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-base sm:text-xl mb-2">{description}</p>
        <div className="skill-container flex flex-wrap mt-2 gap-3 sm:gap-5">
          {skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-3">
          {links.map((link) => (
            <ProjectButton key={link} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
