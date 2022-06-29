import React, { useState, useEffect, useCallback } from "react";
import "./presentation.css"
import barclap from "../../images/barclap.jpeg";
import fineducs from "../../images/fineduc.png";
import lalic from "../../images/lalic.png";
import Career from "../career/career";
const Presentation = () => {
  const [show, setShow] = useState("show");
  const [black, setBlack] = useState("hide");

  const revert = () => {
    setShow("show");
    setBlack("hide");
  }

  return (
    <div>


      <div className={show}>
        <div className="bonjourContainer">
          <span className="bonjour">
          Bienvenue sur mon site internet créer avec
            react js ayant pour objectif de me présenter a vous visiteur curieux.
          </span>
          <div>
          <span className="bonjour">
         Ici vous trouverez un bref résumer de mes expérience en entreprise avec en bas mes différents contact et lien pour me joindre.
          </span>
          </div>
        </div>

        <Career></Career>

      </div>
    </div>
  );
};


export default Presentation;