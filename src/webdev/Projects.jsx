import ProjectCard from "../components/ProjectCard";
import HeaderFadeIn from "../motion/HeaderFadeIn";
import ParagraphFadeIn from "../motion/ParagraphFadeIn";

const projects = [
  {
    title: "Project Title 1",
    description:
      "Brief description of the project, highlighting key aspects and technologies used.",
    link: "#",
  },
  {
    title: "Project Title 2",
    description:
      "Brief description of the project, highlighting key aspects and technologies used.",
    link: "#",
  },
  {
    title: "Project Title 3",
    description:
      "Brief description of the project, highlighting key aspects and technologies used.",
    link: "#",
  },
  {
    title: "Project Title 4",
    description:
      "Brief description of the project, highlighting key aspects and technologies used.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-gray-200 font-spartan min-h-screen bg-white py-12"
    >
      <div className="container mx-auto px-4">
        <div className="header-container flex w-full text-center justify-center">
          <HeaderFadeIn content="Projects">Projects</HeaderFadeIn>
        </div>
        <br />
        <div className="flex flex-col w-full justify-center">
          {projects.map((project, index) => {
            // let delay = `0.${index}`;
            // let numDelay = 0.2 + +delay;
            return (
              <ParagraphFadeIn key={index} duration={0.3}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                ></ProjectCard>
              </ParagraphFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
