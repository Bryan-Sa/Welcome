import React, { useState, useEffect, useCallback } from "react";
import "./presentation.css"
const Presentation = () => {
  const [show, setShow] = useState("hide");
  const [black, setBlack] = useState("show");

  const revert = () => {
    setShow("show");
    setBlack("hide");
  }

  return (
    <div>
      <div className={black}>
      <div className="blackroom">
      </div>
      <div className="blackroomfirstDescription">
          Il fait un peu sombre ici...
        </div>
        <div className="blackroomsecondDescription" onClick={revert}>
          Illuminer tout ça
        </div>
        </div>
      <div className={show}>
        <div className="bonjourContainer">
          <span className="bonjour">
            Bonjour.
          </span>
        </div>
        <div className="descriptionContainer">
          <span className="description">
            Bienvenue sur mon site internet créer en
            react js ayant pour objectif de me présenter a vous visiteur curieux.
          </span>
        </div>
      </div>
    </div>
  );
};


export default Presentation;