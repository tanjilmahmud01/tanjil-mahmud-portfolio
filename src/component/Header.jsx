import React from "react";
// images

import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          {/* need to chnage the logo */}
          {/* <a href="#">
            <img src={Logo} alt="logo" />
          </a> */}

          <Link
            className="text-accent text-3xl font-primary font-semibold leading-9 uppercase"
            to={"/"}
          >
            Tanjil <br /> <span className="text-white uppercase">Mahmud</span>
          </Link>

          {/* button */}
          <Link to={"/resume"}>
            <button className="btn btn-sm md:btn-md lg:btn-lg">
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
