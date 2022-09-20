import Image from "next/image";
import React from "react";

import SideMenuLink from "./SideMenuLink";

const SideMenu = () => {
  return (
    <div
      className="
        z-20 w-full h-full top-0 left-0 
        fixed flex"
    >
      <div
        className="
        h-full bg-black opacity-40 w-full"
      />
      <div
        className="
        bg-stone-900 opacity-100 h-full
        w-80 sm:w-1/2 md:w-1/4 flex flex-col gap-5 justify-center"
      >
        <div className="h-32 flex justify-center items-center">
          <Image
            src="https://tse2.mm.bing.net/th?id=OIP.d4YOrL9_RwxXRd0RKAaShAHaEK&pid=Api"
            alt="Me"
            className="rounded-full"
            width={90}
            height={90}
          />
        </div>

        <hr />
        <SideMenuLink text="About me" />
        <hr />
        <SideMenuLink text="Projects" />
        <hr />
        <SideMenuLink text="Media" />
      </div>
    </div>
  );
};

export default SideMenu;
