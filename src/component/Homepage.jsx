import React from "react";
import Layout from "../layout/Layout";
import Header from "./Header";
import Banner from "./Banner";
import Nav from "./Nav";
import About from "./About";
import MySlider from "./MySlider";
import Services from "./Services";
import Work from "./Work";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <Layout title={"Tanjil mahmud"}>
      <div className="bg-no-repeat bg-cover overflow-hidden bg-slate-800">
        <Banner />
        <Nav />
        <About />
        <MySlider />
        <Services />
        <Work />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    </Layout>
  );
};

export default Homepage;
