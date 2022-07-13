import React, { useState, useEffect, useCallback } from "react";
import Header from "../header/header";
import Playgroundcore from "./playgroundCore";
import Footer from "../footer/footer";
const Playground = () => {
  return (
    <div>
      <Header></Header>
       <Playgroundcore></Playgroundcore>
      <Footer></Footer>
    </div>
  );
};


export default Playground;