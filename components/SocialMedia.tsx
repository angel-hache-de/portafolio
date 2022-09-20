import React from "react";
import { socialMedia } from "../database/projects";
import SocialIcon from "./SocialIcon";

const SocialMedia = () => {
  return (
    <aside className="col-span-2 sm:col-span-1">
      <p className="text-white text-center text-3xl py-2">
        Or find me in:
      </p>
      <div className="flex flex-col gap-4 items-center max-h-full">
        {socialMedia.map((sm) => (
          <SocialIcon key={sm.media} sm={sm} />
        ))}
      </div>
    </aside>
  );
};

export default SocialMedia;
