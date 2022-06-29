import React, { useState, useEffect, useCallback } from "react";
import "./header.css"
const Header = () => {
  return (
    <div className="navbar">
      <div className="myName">
        <span className="titleName">Bryan SA</span>
      </div>
      <div style={{ width: "100%" }}>
        <div className="menu">
          <button>Playground</button>
          <button variant="light">API</button>
          <button variant="light">Curiculum</button>
        </div>
      </div>
    </div>
  );
};


export default Header;