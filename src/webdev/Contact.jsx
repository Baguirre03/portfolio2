import ContactForm from "../components/ContactForm";
import DivFadeIn from "../motion/DivFadeIn";
import HeaderFadeIn from "../motion/HeaderFadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-gray-200 font-spartan bg-white py-12 shadow-sm  web-about items-center justify-center content-center flex flex-col min-h-screen max-h-fit"
    >
      <HeaderFadeIn content="Contact"></HeaderFadeIn>
      <br />
      <ContactForm></ContactForm>
    </section>
  );
}
