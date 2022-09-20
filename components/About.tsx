import React from "react";
import { softSkills, technologies } from "../database/projects";
import SimpleCardsCollection from "./SimpleCardsCollection";

const About = () => {
  return (
    <section
      id="about"
      className="bg-base w-full overflow-hidden scroll-smooth"
    >
      <div
        className="
           flex flex-wrap-reverse
          justify-center md:justify-between
          items-center relative section-container
          "
      >
        <img
          src="/blob.svg"
          alt="blob"
          className="
          -left-[25rem] -translate-y-1/4
          min-w-[1000px] w-[1000px]
          absolute top-1/2 md:-left-[19rem] z-0 
          rotate-[150deg] md:-translate-y-1/2 
        "
        />
        {/* PICTURE */}
        <aside className="my-5 md:my-0 z-10">
          <img
            src="/th.jpeg"
            alt="little donkey"
            className="
                w-40 rounded-full
                md:w-60 lg:w-80 z-10
              "
          />
        </aside>

        {/* INFO */}
        <div className="basis-full md:basis-3/5 overflow-x-hidden z-10">
          <h1 className="my-2 section-title">About Me</h1>
          <p className="info-text text-justify">
            I{"'"}m Angel Hernandez, i{"'"}m currently studying{" "}
            <strong>computer systems engineering at ESCOM, IPN</strong>. I also
            studied{" "}
            <strong>
              programming technician at CECyT 9 {'"'}Juan de Dios B&aacute;tiz
              {'"'}{" "}
            </strong>
            (IPN high school). I really enjoy programming and learn about
            related stuff!
          </p>

          <br />
          <p className="info-text text-justify">
            I know to develop restfull APIs and web apps with:
          </p>

          <SimpleCardsCollection data={technologies} />

          <br />
          <p className="text-justify info-text">
            Throughout my time in highschool and university, i{"'"}ve learned
            these soft skills:
          </p>

          <br />
          <SimpleCardsCollection data={softSkills} />

          <br />
          <p className="text-justify info-text">
            I also have knowledge about data {" "}
            <strong>
              structures and complexity of algorithms.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
