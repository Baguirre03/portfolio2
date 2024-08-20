import tests from "../assets/landscape.jpg";
import ProjectButton from "./ProjectButton";
import Skill from "./SkillsUsed";

const testSkills = ["react", "js", "css", "tailwind", "nodejs"];
const testLinks = ["one", "two", "three"];

export default function ProjectCard({ title, links, skills }) {
  return (
    <div className="project-card bg-white text-black shadow-sm p-8 flex border overflow-hidden sh mb-4 ">
      <img src={tests} alt="Photo" className="w-1/3 object-cover h-full" />
      <div className="p-4 flex-1">
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-xl mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          alias est ex odio doloribus, hic rem vel cum temporibus nesciunt,
          deserunt dignissimos, nam consequatur quaerat eius? Quos expedita quia
          optio?
        </p>
        <div className="skill-container flex mt-2 gap-5">
          {testSkills.map((skill) => (
            <Skill>{skill}</Skill>
          ))}
        </div>
        <div className="flex gap-4 mt-3">
          {testLinks.map((link) => (
            <ProjectButton>{link}</ProjectButton>
          ))}
        </div>
      </div>
    </div>
  );
}
