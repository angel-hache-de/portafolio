import React, { FC } from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  images: string[];
}

const ProjectSlideshow: FC<Props> = ({ images }) => {
  return (
    <Slide easing="ease" duration={700} arrows={false}>
      {images.map((slideImage, index) => (
        <div className={"each-slide"} key={index}>
          <div
            style={{ backgroundImage: `url(${slideImage})` }}
            className="bg-cover bg-no-repeat bg-center h-[240px]"
          >
            {/*<span>{slideImage.caption}</span>*/}
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default ProjectSlideshow;
