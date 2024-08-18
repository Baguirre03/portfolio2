import HeaderFadeIn from "../motion/HeaderFadeIn";
import ParagraphFadeIn from "../motion/ParagraphFadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="web-about items-center justify-center content-center max-h-svh flex flex-col min-h-screen"
    >
      <div className="about-container flex flex-col md:flex-row p-40">
        <div className="about-col-left flex-1 md:w-2/3">
          {" "}
          <HeaderFadeIn content="about"></HeaderFadeIn>
          <br></br>
          <ParagraphFadeIn duration={0.4}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nesciunt, pariatur? Saepe architecto eos labore eum, aliquam id
              possimus laudantium amet ipsa unde maxime quis dicta dignissimos
              ratione nulla corporis impedit.
            </p>
          </ParagraphFadeIn>
          <br></br>
          <ParagraphFadeIn duration={0.6}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            repudiandae qui debitis mollitia ad culpa autem quas eius, alias a
            vitae molestiae, vel quod quam officia est suscipit placeat
            explicabo.
          </ParagraphFadeIn>
        </div>
        <div className="about-col-right flex-1 md:w-1/3">picture here</div>
      </div>
    </section>
  );
}
