import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/homepage/home";
import Playground from "./components/playground/playground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/playground" element={<Playground></Playground>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
