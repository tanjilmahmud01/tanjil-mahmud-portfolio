import React from "react";
// images

import Logo from "../assets/logo.svg";

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

          <a
            className="text-accent text-3xl font-primary font-semibold leading-9 uppercase"
            href=""
          >
            Tanjil <br /> <span className="text-white uppercase">Mahmud</span>
          </a>

          {/* button */}
          <button className="btn btn-sm md:btn-md lg:btn-lg">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
