import React, { FC } from "react";

import { SocialMedia } from "../interfaces";

interface Props {
  sm: SocialMedia;
}

const SocialIcon: FC<Props> = ({ sm }) => {
  return (
    <div
      className="
        flex items-center h-20 w-20 overflow-hidden hover:w-full
        transition-all duration-1000 rounded-lg p-2
        delay-500 bg-elevated-base ease-in-out hover:overflow-auto
        "
    >
      <img
        src={process.env.NEXT_PUBLIC_ASSET_PREFIX!+sm.image}
        alt={"Social media icon"}
        className="w-16 transition-all duration-1000 social-icon"
      />
      {sm.link ? (
        <a href={sm.link} target={"_blank"} rel="noreferrer" 
          className="text-white text-2xl ml-5 underline">
          {sm.media}
        </a>
      ) : (
        <span className="text-white text-2xl ml-5 ">
          {sm.media}
        </span>
      )}
    </div>
  );
};

export default SocialIcon;
