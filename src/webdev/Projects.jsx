import ProjectCard from "../components/ProjectCard";
import HeaderFadeIn from "../motion/HeaderFadeIn";
import SlideInRight from "../motion/SlideIn";
import SlideInLeft from "../motion/SlideInLeft";
import blog from "../assets/blog.png";
import members from "../assets/members-only.png";
import shop from "../assets/shopping.png";
import battleship from "../assets/battleship.png";

const projects = [
  {
    title: "Fullstack Blog Project",
    description:
      "Developed a blog application that includes a RESTful API using Node.js and Express, paired with a responsive user interface built with React and Tailwind CSS. The application features secure user authentication through JWT. Additionally, I structured the project with distinct repositories for the frontend and backend.",
    links: [
      {
        title: "Front End",
        src: "https://github.com/Baguirre03/blog/tree/main",
      },
      {
        title: "Back End",
        src: "https://github.com/Baguirre03/blog-api/tree/main",
      },
      { title: "Live", src: "https://top-blog-ba.netlify.app/" },
    ],
    skills: ["Express", "Node.js", "React", "JWT", " MongoDB", "Tailwind CSS"],
    src: blog,
  },
  {
    title: "Members Only",
    description:
      "A fullstack message board that features user-specific content and strong security. It uses Passport.js for account management and Bcrypt for secure password hashing. The platform includes a role-based access control system, which customizes the user interface and message visibility based on user roles and secret passcodes.",
    links: [
      {
        title: "Repository",
        src: "https://github.com/Baguirre03/members-only",
      },
      { title: "Live", src: "https://members-only-top.fly.dev/" },
    ],
    skills: ["Node.JS", "MongoDB", "Express", "Passport.js", "Pug", "CSS"],
    src: members,
  },
  {
    title: "TDD Shopping Card",
    description:
      "Developed a test-driven development mock shopping cart using React and its testing library. Grabs items from a mock product API and displays them from a real-time fetch. Users can add to cart and view cart as well as incorporating React Router between the home and shop page.",
    links: [
      {
        title: "Repository",
        src: "https://github.com/Baguirre03/shopping-cart",
      },
      { title: "Live", src: "https://the-super-cool-shop.netlify.app/" },
    ],
    skills: ["React", "React Testing Library", "Vite", "CSS"],
    src: shop,
  },
  {
    title: "Battleship",
    description:
      "Battleship game made using a test driven development approach. Built a smart AI to play against using a recursive algorithm, along with an interactive game-board and live updates",
    links: [
      { title: "Repository", src: "https://github.com/Baguirre03/battleship" },
      { title: "Live", src: "https://baguirre03.github.io/battleship/" },
    ],
    skills: ["JavaScript", "HTML", "CSS"],
    src: battleship,
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
            let slideRight = false;
            if (index % 2) slideRight = true;
            return slideRight ? (
              <SlideInRight key={project.title}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  links={project.links}
                  src={project.src}
                  skills={project.skills}
                ></ProjectCard>
              </SlideInRight>
            ) : (
              <SlideInLeft key={project.title}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  links={project.links}
                  src={project.src}
                  skills={project.skills}
                ></ProjectCard>
              </SlideInLeft>
            );
          })}
        </div>
      </div>
    </section>
  );
}
