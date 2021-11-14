import { useEffect, useState } from "react";

import CreateLesson from "../../../../assets/pictures/test/createLesson.png";
import FindLesson from "../../../../assets/pictures/test/findLesson.png";
import "./LandingExplications.scss";

const LandingExplications = () => {
  const setCurrentPositions = () => {
    if (document.getElementById("globalContainer") !== null) {
      const globalContainer = document.getElementById("globalContainer");
      const blocksContainer = document.getElementById("blocksContainer");
      const blockOne = document.getElementById("blockOne");
      const blockTwo = document.getElementById("blockTwo");

      const startScrollKey = globalContainer.offsetTop + 300;
      const endScrollKey =
        globalContainer.offsetTop +
        globalContainer.offsetHeight -
        blocksContainer.offsetHeight -
        300;
      const scroll = window.scrollY;
      const blockWidth = blocksContainer.offsetWidth;

      const getTranslation = () => {
        const pourcentage =
          ((scroll - startScrollKey) * 100) / (endScrollKey - startScrollKey);
        const translate = (blockWidth * pourcentage) / 100;
        if (translate < 0) {
          return 0;
        } else if (translate > blockWidth) {
          return blockWidth;
        } else {
          return translate;
        }
      };

      getTranslation();
      blockOne.style.transform = `translateX(calc(0px - ${getTranslation()}px))`;
      blockTwo.style.transform = `translateX(calc(${blockWidth}px - ${getTranslation()}px))`;
    }
  };

  useEffect(() => {
    setCurrentPositions();
    window.addEventListener(
      "resize",
      () => {
        setCurrentPositions();
      },
      false
    );
    window.addEventListener(
      "scroll",
      () => {
        setCurrentPositions();
      },
      false
    );
  }, []);

  return (
    <div className="landingExplications__stickyParent" id="globalContainer">
      <div className="landingExplications__stickyChild" id="blocksContainer">
        <div className="landingExplications__blockOne" id="blockOne">
          <div className="landingExplications__textContainer">
            <h1 className="landingExplications__title">
              Créez et partagez vos cours
            </h1>
            <p className="landingExplications__text">
              Extremely accessible, surprisingly simple, and immersive digital
              experiences that places your 3D model into the physical world.
              <br />
              <br />
              Augmented Reality takes you a step closer to the future of the Web
              while still being accessible on most Android, iOS, and iPad mobile
              devices
            </p>
          </div>
          <div className="landingExplications__imageContainer">
            <img src={CreateLesson} className="landingExplications__image" />
          </div>
        </div>
        <div className="landingExplications__blockTwo" id="blockTwo">
          <div className="landingExplications__textContainer">
            <h1 className="landingExplications__title">
              Retrouvez les cours créés par la communauté
            </h1>
            <p className="landingExplications__text">
              Extremely accessible, surprisingly simple, and immersive digital
              experiences that places your 3D model into the physical world.
              <br />
              <br />
              Augmented Reality takes you a step closer to the future of the Web
              while still being accessible on most Android, iOS, and iPad mobile
              devices
            </p>
          </div>
          <div className="landingExplications__imageContainer">
            <img src={FindLesson} className="landingExplications__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingExplications;
