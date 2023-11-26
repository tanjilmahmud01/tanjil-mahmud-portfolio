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

function App() {
  return (
    <>
      <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
        <Header />
        <Banner />
        <Nav />
        <About />
        <MySlider />
        <Services />
        <Work />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    </>
  );
}

export default App;
