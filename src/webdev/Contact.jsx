import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-16 bg-white py-12 shadow-sm font-spartan web-about items-center justify-center content-center flex flex-col min-h-screen max-h-fit"
    >
      <ContactForm></ContactForm>
    </section>
  );
}
