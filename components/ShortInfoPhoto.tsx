import React from "react";
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
      <div className="h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:w-72 lg:h-72 xl:w-96 xl:h-96">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.d4YOrL9_RwxXRd0RKAaShAHaEK&pid=Api"
          alt="Me"
          className="w-full h-full rounded-full"
          //width={25}
          //height={25}
        />
      </div>
    </section>
  );
};

export default ShortInfoPhoto;
