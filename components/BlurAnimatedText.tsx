import React, { useEffect, useState } from "react";
import { doAnimate, stopAnimation } from "../animation/blurAnimation";

import styles from "../styles/Animations.module.css";

const BlurAnimatedText = () => {
  const [isVisible, setIsVisible] = useState(false);

  //Resolve hydratation error
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if(!isVisible) return;

    doAnimate(
      document.getElementById("text1"),
      document.getElementById("text2")
    );

    () => {
      stopAnimation();
    }
  }, [isVisible]);

  if(!isVisible) return <></>; 

  return (
    <>
      <div className={`${styles.blur_container} h-auto md:h-14`} id="container">
        <span className={`${styles.blur_text} main-title`} id="text1" />
        <span className={`${styles.blur_text} main-title`} id="text2" />
      </div>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default BlurAnimatedText;
