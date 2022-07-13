import React, { useState, useEffect, useCallback } from "react";
import "./playgroundCore.css"
import Api from "../api"
const Playgroundcore = () => {

    const [dogsurl, setDogsurl] = useState("");
    useEffect(() => {
       const fetchUrl = async() => {
        let url = await Api.Dogs();
     
            setDogsurl(url.message);
            console.log(url.message)
      
       }
       fetchUrl();
      }, []);

    const resetDogs = async() => {
        let urls =  await Api.Dogs();
            setDogsurl(urls.message);
            console.log(urls.message)
    }
    return (
        <div>
            <div className="playgroundContainer">
                <span className="playground">
                    Dans cette page vous trouverez de la détente et de la bonne humeur.
                </span>
                <div>
                    <span className="playground">
                        Ici vous aurez l'occasion de génerer des images de chiens aléatoirement, trouver votre adresse ip ect...
                    </span>
                </div>
            </div>
            <div className="dogsContainer">
                <div className="imgDogs">
                    <img style={{maxHeight:"45vh", minHeight:"45vh"}} src={dogsurl}></img>
                </div>
                <div style={{marginTop: "2%"}}>
                <button onClick={resetDogs} className="button">
                    Anoter one please !
                </button>
                </div>
            </div>

        </div>
    );
};


export default Playgroundcore;