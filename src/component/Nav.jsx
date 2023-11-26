import React from "react";
// import icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsTools,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          {/* here, Link is not from React-Router-Dom, it's from React-Scroll package
           which makes it like <a> tag and jumps to a particular to="idName" location 
           where a div is given a particular id='idName'*/}

          {/* smooth: Animate the scrolling, is a scroll animation, true by default
          there are other scroll animation functions in
          React-Scroll
           
           spy:Make Link selected when scroll is at its targets position, means if we scroll to certain section the link 
           will be automatically selected as active

           activeClass:class applied when element is reached, means when the link is active
           
           offset: Scroll additional px ( like padding ), how much from the top will the element be shown, takes both positive and negative values
           */}
          <Link
            to="home"
            className="navLinkButton"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-150}
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            className="navLinkButton"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BiUser />
          </Link>
          <Link
            to="skills"
            className="navLinkButton"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsTools />
          </Link>
          <Link
            to="services"
            className="navLinkButton"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            className="navLinkButton"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            className="navLinkButton"
            activeClass="active"
            smooth={true}
            spy={true}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
