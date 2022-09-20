import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        form.current ? form.current : "",
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Email sent! Thank you. :)");
        },
        (error) => {
          alert("Something went wrong. :(")
        }
      );
  };

  return (
    <div className="col-span-2 sm:col-span-1">
      <p className="text-white text-center text-3xl py-2">
        Send an email
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="
            w-full md:w-[49%]
            float-left rounded-lg bg-highlight !text-white
            border-none focus:border-none
            h-12 px-5 text-base border-0 focus:bg-elevated-highlight
            "
          required
        />
        <input
          type="email"
          placeholder="email"
          className="
            w-full sm:w-[49%] sm:ml-[2px]
            float-right rounded-lg bg-highlight !text-white
            h-12 px-5 text-base border-0 focus:bg-elevated-highlight
            "
          name="email"
          required
        />

        <input
          type="text"
          placeholder="subject"
          className="
            w-full rounded-lg bg-highlight
            !text-white h-12 px-5 text-base 
            border-0 my-3 focus:bg-elevated-highlight
            "
          name="subject"
          required
        />
        <textarea
          name="message"
          required
          placeholder="message"
          className="
            w-full border-0 rounded-lg bg-highlight 
            text-white text-lg p-5 h-[150px] resize-none 
            overflow-y-auto custom-scrollbar
            focus:bg-elevated-highlight
            "
        />

        <button
          type="submit"
          className="
            text-third py-2 px-3 border-2
            border-third font-semibold
            rounded-md mt-3 float-right tracking-widest
            hover:text-white hover:bg-third
            "
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
