import React from "react";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-base py-4 scroll-smooth">
      <div className="grid grid-cols-2 gap-4 mx-auto section-container">
        <h1 className="col-span-2 section-title">
          Contact me
        </h1>
        <ContactForm />
        <SocialMedia />
      </div>
    </section>
  );
};

export default ContactSection;
