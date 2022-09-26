import React from "react";
import Image from "next/image";
import BlurAnimatedText from "./BlurAnimatedText";

const ShortInfoPhoto = () => {
  return (
    <section className="flex flex-wrap justify-around items-center mb-4 max-w-7xl mx-auto">
      {/* INFO */}
      <div
        className={`w-56 sm:w-64 md:w-96 lg:w-1/2 relative bg-opacity-20 bg-back p-0 rounded-md`}
      >
        <p className="main-title ">Hi, I{"'"}m Angel Hernandez!</p>
        <p className="main-title ">I{"'"}m</p>

        <BlurAnimatedText />
      </div>

      {/* PHOTO */}
      <div className="relative
        h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:w-72 lg:h-72
        xl:w-96 xl:h-96">
        <Image 
          src="/me.jpeg"
          alt="Me"
          layout="fill"
          className="rounded-full"
        />
      </div>
    </section>
  );
};

export default ShortInfoPhoto;
