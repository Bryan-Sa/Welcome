import React, { useState, useEffect, useCallback, useRef } from "react";
import "./career.css"
import barclap from "../../images/barclap.jpeg";
import fineducs from "../../images/fineduc.png";
import lalic from "../../images/lalic.png";
import '../../fonts/Vogue/vogue-light.ttf';
const Career = () => {
  const firstDivRef = useRef();
  const secondDivRef = useRef();
  const [show, setShow] = useState("show");
  const [black, setBlack] = useState("hide");

  const revert = () => {
    setShow("show");
    setBlack("hide");
  }
  const handleScrollFirst = (scroll) => {
    secondDivRef.current.scrollLeft = scroll.target.scrollLeft;
  };

  const handleScrollSecond = (scroll) => {
    firstDivRef.current.scrollLeft = scroll.target.scrollLeft;
  };
 
  return (
    <div>
      <div className="descriptionContainer">
        <div className="careerText">
          <span>Ma carrière</span>
        </div>
        <div className="flexAreaLogo" id="logoScroll"onScroll={handleScrollSecond}
        ref={secondDivRef}>
          <div className="logo">
            <img style={{ marginTop: "6%", maxWidth: "200px" }} src={barclap}></img>
          </div>
          <div className="logo">
            <img style={{ maxWidth: "200px" }} src={fineducs}></img>
          </div>
          <div className="logo">
            <img style={{ marginTop: "2%", maxWidth: "200px" }} src={lalic}></img>
          </div>
          <div className="logo">
            <img style={{ marginTop: "2%", maxWidth: "200px" }} src={lalic}></img>
          </div>
        </div>
        <div className="flexArea" id="careerScroll"onScroll={handleScrollFirst}
        ref={firstDivRef}>
          <div className="career">
            <div className="intershipTitle">Stage - Barclap (4 mois)</div>
            <div className="flexAreaText" style={{marginTop:"5%"}}>
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Langages:
              </div>
              <div style={{marginLeft:"1%",}}>
                Javascript - HTML - CSS - Typescript
              </div>
            </div>
            <div className="flexAreaText">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Missions:
              </div>
              <div style={{marginLeft:"1%",}}>
                Intégration web
              </div>
            </div>
            <div className="flexAreaText">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Localisation:
              </div>
              <div style={{marginLeft:"1%",}}>
                Boulogne Billancourt - France
              </div>
            </div>

            <div className="flexAreaDescription">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Un peu plus en détail:
              </div>
              <div style={{marginLeft:"2%",marginTop:"2%"}}>
                <span>Mon premier stage et ma première expérience professionnel dans le monde vaste de l'informatique.</span>
                <br></br>
                <span>Durant cette période de 4 mois au sein d'une start up dynamique, j'ai eu la chance d'être supervisé par un développeur sénior et de travailler en paire avec une graphique designer.</span>
                <br></br>
                <span>Mon rôle était d'intégrer les designs graphics sur le site internet et de le mettre à jour.</span><br></br>
                <span>J'ai découvert la joie du Typescript et affiner mes compétences en HTML/JS/CSS</span>
              </div>
            </div>

          </div>
          <div className="career">
            <div className="intershipTitle">Stage - Fineduc (4 mois)</div>

            <div className="flexAreaText" style={{marginTop:"5%"}}>
            </div>
            <div className="flexAreaText">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Missions:
              </div>
              <div style={{marginLeft:"1%",}}>
                Installation et maintien du parc informatique du groupe ionis
              </div>
            </div>
            <div className="flexAreaText">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Localisation:
              </div>
              <div style={{marginLeft:"1%",}}>
                Epitech Paris, Kremlin Biceptre
              </div>
            </div>

            <div className="flexAreaDescription">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Un peu plus en détail:
              </div>
              <div style={{marginLeft:"2%",marginTop:"2%"}}>
                <span>Loin derrière les ordinateurs, les programmes et les compilations, j'ai eu l'occasion de découvrir le côté très manuel de l'informatique</span>
                <br></br>
                <span>Mon rôle était d'installer divers équipements informatiques, vérifier l'état des appareils déjà poser et bien sûr entretenir tous les parcs informatique du groupe IONIS à l'aide de mon équipe.</span><br></br>
              </div>
            </div>
          </div>
          <div className="career">
            <div className="intershipTitle">Stage - Lalic (6 mois)</div>
            <div className="flexAreaText" style={{marginTop:"5%"}}>
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Langages:
              </div>
              <div style={{marginLeft:"1%",}}>
                Javascript - HTML - CSS - php
              </div>
            </div>
            <div className="flexAreaText">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Missions:
              </div>
              <div style={{marginLeft:"1%",}}>
                Mise a jour et maintien du site web lalic.fr
              </div>
            </div>
            <div className="flexAreaText">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Localisation:
              </div>
              <div style={{marginLeft:"1%",}}>
                Boulogne Billancourt - France
              </div>
            </div>

            <div className="flexAreaDescription">
              <div style={{marginLeft:"2%",fontWeight:"bold"}}>
                Un peu plus en détail:
              </div>
              <div style={{marginLeft:"2%",marginTop:"2%"}}>
                <span>Au cours de cette période de 6 mois, j'ai travaillé en étroite collaboration avec notre développeur d'affaires et notre directeur de la communication.</span>
                <br></br>
                <span>Sous leurs directives ,j'ai installées et mises à jour le site internet.</span><br></br>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};


export default Career;