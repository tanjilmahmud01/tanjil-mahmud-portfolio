import { useState } from "react";

import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import About from "./component/About";
import Services from "./component/Services";
import Work from "./component/Work";
import Contact from "./component/Contact";
import MySlider from "./component/MySlider";
import { Route, Routes } from "react-router-dom";
import Resume from "./component/Resume";
import Homepage from "./component/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </>
  );
}

export default App;
