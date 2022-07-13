import React, { useState, useEffect, useCallback } from "react";
import "./header.css"
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="myName">
        <span className="titleName"
        onClick={(event) => {
          navigate("/");
        }}
        >Bryan SA</span>
      </div>
      <div style={{ width: "100%" }}>
        <div className="menu">
          <button onClick={(event) => {
            navigate("/playground");
          }}>Playground</button>
          <button variant="light">API</button>
          <button variant="light">Curiculum</button>
        </div>
      </div>
    </div>
  );
};


export default Header;