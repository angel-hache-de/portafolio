import React, { FC } from "react";

import { SoftSkill, Technology } from "../interfaces";
import SimpleCard from "./SimpleCard";

interface Props {
  data: (Technology | SoftSkill)[];
}

const SimpleCardsCollection: FC<Props> = ({ data }) => {
  return (
    <ul
      className="
        mx-auto flex bg-transparent max-w-full h-[250px] gap-3 
        overflow-x-auto custom-scrollbar
        items-center
    "
    >
      {data.map((card) => (
        <SimpleCard key={card.name} label={card.name} image={card.image} />
      ))}
      {/*{project.techs.map((tech) => (
        <figure key={tech} className="w-[40px] flex-[0_0_auto]">
          <Image
            src={tech}
            alt="Tech logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </figure>
      ))}*/}
    </ul>
  );
};

export default SimpleCardsCollection;
