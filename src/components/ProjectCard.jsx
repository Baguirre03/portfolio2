import tests from "../assets/landscape.jpg";
import ProjectButton from "./ProjectButton";

export default function ProjectCard({ title, threeLink }) {
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
        <div className="flex gap-4">
          <ProjectButton>Link</ProjectButton>
          <ProjectButton>Link2</ProjectButton>
          {threeLink && <ProjectButton>Link</ProjectButton>}
        </div>
      </div>
    </div>
  );
}
