import React, { FC } from "react";

interface Props {
    text: string;
}

const SideMenuLink: FC<Props> = ({text}) => {
  return (
    <a
      className="
            border-l-4 border-red-600 mx-3 text-center
            hover:scale-110 hover:bg-zinc-900
            shadow-2xl shadow-red-600 hover:text-red-600
            transition-all duration-500"
      href="#"
    >
      {text}
    </a>
  );
};

export default SideMenuLink;
