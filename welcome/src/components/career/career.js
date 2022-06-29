import React, { useState, useEffect, useCallback } from "react";
import "./career.css"
import barclap from "../../images/barclap.jpeg";
import fineducs from "../../images/fineduc.png";
import lalic from "../../images/lalic.png";
import '../../fonts/Vogue/vogue-light.ttf';
const Career = () => {
  const [show, setShow] = useState("show");
  const [black, setBlack] = useState("hide");

  const revert = () => {
    setShow("show");
    setBlack("hide");
  }

  return (
    <div>
        <div className="descriptionContainer">
          <div className="careerText">
            <span>Ma carrière</span>
          </div>
          <div className="flexArea">
            <div className="logo">
              <img style={{marginTop:"6%",maxWidth:"200px"}} src={barclap}></img>
            </div>
            <div className="logo">
            <img style={{maxWidth:"200px"}} src={fineducs}></img>
            </div>
            <div className="logo">
            <img style={{marginTop:"2%",maxWidth:"200px"}} src={lalic}></img>
            </div>
          </div>
          <div className="flexArea">
          <div className="career">
            <div className="intershipTitle">Stage - Barclap (4 mois)</div>
            <span>Mon premier stage et aussi ma première expérience proffesionnel dans le monde informatique</span>
          </div>
          <div className="career">
          <div className="intershipTitle">Stage - Fineduc (4 mois)</div>
          </div>
          <div className="career">
          <div className="intershipTitle">Stage - Lalic (6 mois)</div>
          </div>
          </div>
        </div>
    </div>
  );
};


export default Career;