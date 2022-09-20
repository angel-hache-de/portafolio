import React, { FC } from "react";
import Image from "next/image";

interface Props {
  image: string;
  label: string;
}

const SimpleCard: FC<Props> = ({ image, label }) => {
  return (
    <li className="simple-card flex-[0_0_auto]">
      <figure className="row-span-4 row-start-2 mx-auto">
        <Image
          src={image}
          alt="Tech logo"
          width={80}
          height={80}
          className="rounded-md"
        />
      </figure>
      <span className="text-center font-bold text-xl">{label}</span>
    </li>
  );
};

export default SimpleCard;
