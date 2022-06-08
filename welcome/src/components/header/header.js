import React, { useState, useEffect, useCallback } from "react";
import "./header.css"
const Header = () => {
  return (
    <div className="navbar">
      <div className="myName">
        <span className="titleName">Welcome</span>
      </div>
      <div style={{ width: "100%" }}>
        <div className="menu">
          <button>Mon parcours</button>
          <button variant="light">Mes expériences</button>
          <button variant="light">Télécharger mon CV</button>
        </div>
      </div>
    </div>
  );
};


export default Header;