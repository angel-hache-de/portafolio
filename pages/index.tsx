import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import ShortInfoPhoto from "../components/ShortInfoPhoto";

import Blob from "../rrrainbow.svg";
import Shape from "../ssshape.svg";
import animations from "../styles/Animations.module.css";
import styles from "../styles/Home.module.css";
import About from "../components/About";
import Projects from "../components/Projects";
import { Background, Parallax } from "react-parallax";
import SocialMedia from "../components/SocialMedia";
import ContactForm from "../components/ContactForm";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Header showBackColor={scrollPosition > 30} />

      <div className="overflow-x-hidden -my-12">
        <section className={`min-h-screen w-screen relative pt-10 flex items-center`}>
          <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
            <div className={animations.bubbles}>
              <img src="/rrrainbow.svg" alt="back" className="w-full" />
              <img src="/rrrainbow.svg" alt="back" className="w-full" />
              <img src="/rrrainbow.svg" alt="back" className="w-full" />
              <img src="/rrrainbow.svg" alt="back" className="w-full" />
              <img src="/rrrainbow.svg" alt="back" className="w-full" />
              <img src="/rrrainbow.svg" alt="back" className="w-full" />
            </div>
          </div>
          <ShortInfoPhoto />
        </section>

        {/*<Parallax strength={500}>
            <Background className="bg-green-300">
              <div className="bg-green-300 w-screen h-screen">

              </div>
            </Background>
          </Parallax>*/}
        <About />
        <Projects />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
