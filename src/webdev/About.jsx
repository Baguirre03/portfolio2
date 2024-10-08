import HeaderFadeIn from "../motion/HeaderFadeIn";
import ParagraphFadeIn from "../motion/ParagraphFadeIn";
import me from "../assets/ben-ski.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-12 shadow-sm font-spartan web-about items-center justify-center content-center flex flex-col min-h-screen max-h-fit"
    >
      <div className="about-container flex flex-col md:flex-row p-20">
        <div className="about-col-left flex-1 md:w-2/3 p-4">
          {" "}
          <HeaderFadeIn content="about"></HeaderFadeIn>
          <br></br>
          <ParagraphFadeIn duration={0.4}>
            <p>
              I am currently a university student at Loyola University Chicago.
              Here I am studying marketing with a minor in computer science.
              About halfway through my collegiate journey and some marketing
              internships (3), I found that coding was a better fit for me.
              Since then, I have been learning web development via{" "}
              <a
                className="text-blue-600"
                href="https://www.theodinproject.com/"
              >
                The Odin Project
              </a>
              .
            </p>
          </ParagraphFadeIn>
          <br></br>
          <ParagraphFadeIn duration={0.6}>
            There I am also an active community member (and moderator) and
            contribute as much as I can since its an open source curriculum.
            Apart from coding and marketing, I love to do Wordle, listen to
            music and podcasts, doodle, and take photos with my film camera (as
            seen to the right).
          </ParagraphFadeIn>
        </div>
        <div className="about-col-right hidden lg:block lg:flex-1 ">
          <img
            src={me}
            alt="Ben Skiing"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
