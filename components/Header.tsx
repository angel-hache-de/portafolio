import Image from "next/image";
import React, { FC } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";

import animations from "../styles/Animations.module.css";
import styles from "../styles/Home.module.css";

import SideMenu from "./SideMenu";

interface Props {
  showBackColor: boolean;
}

const Header: FC<Props> = ({ showBackColor }) => {

  return (
    <nav
      className={`
        ${showBackColor ? "bg-black": "bg-transparent"} text-white h-14 
        overflow-hidden flex items-center sticky w-full
        px-8 z-20 top-0 left-0 transition-all duration-700 ease-in
      `}
    >
      {/* Left Side and middle side */}
      <div
        className="
            flex cursor-pointer relative 
            md:basis-1/3 justify-start basis-full"
      >
        <Image
          src="https://tse2.mm.bing.net/th?id=OIP.d4YOrL9_RwxXRd0RKAaShAHaEK&pid=Api"
          alt="Me"
          className="rounded-full !hidden md:!block"
          width={45}
          height={45}
        />
        <span
          className={`${animations.animated} ${styles.header_title} !left-1/2 md:!left-24`}
        >
          Angel Hdz
        </span>
      </div>

      {/* Right side */}

      {/*<Bars3Icon className="h-6 w-6 text-white absolute right-2 md:hidden" />*/}

      <div className="hidden md:flex relative gap-5 basis-2/3 justify-end">
        <a className={animations.animated_link} href="#about">
          About me
        </a>
        <a className={animations.animated_link} href="#projects">
          Projects
        </a>
        <a className={animations.animated_link} href="#contact">
          Contact
        </a>
      </div>

      {/*<SideMenu />*/}
    </nav>
  );
};

export default Header;
