import React from "react";
// images
import image from "../assets/pro-pic-4.jpg";
// icons
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//framer motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import Layout from "../layout/Layout";

const Banner = () => {
  return (
    <Layout title={"Tanjil Mahmud"}>
      <section
        className="min-h-[85vh] lg:min-h-[85vh] flex items-center"
        id="home"
      >
        <Helmet>
          <title>Tanjil Mahmud</title>
        </Helmet>
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            {/* text */}
            {/* flex-1 means allow a flex item to grow and shrink as needed, ignoring its initial size: */}
            <div className="flex-1 text-center font-secondary lg:text-left">
              {/*leading => line height */}
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
              >
                TANJIL <span>MAHMUD</span>
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]"
              >
                <span className="text-white mr-4">I am a</span>
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "React Programmer",
                    2000,
                    "MERN Developer",
                    2000,
                  ]}
                  speed={50}
                  className="text-accent "
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
              {/* max-w-lg => max-width: 32rem (512px) */}
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Web Programmer with experience in React JS to develop and
                maintain full-stack responsive websites. Keen to work
                collaboratively to achieve organizational excellence,
                maintaining timeline and budget. Keeping up with the
                everchanging technology stacks to hone my development skills.
              </motion.p>
              {/* max-w-max => max-width: max-content means the width will extend as much as the content goes */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 items-center mx-auto lg:mx-0 mb-12"
              >
                <Link to="contact" smooth={true} spy={true}>
                  {" "}
                  <button className="btn btn-lg">Contact Me</button>
                </Link>

                <a href="#" className="text-gradient btn-link">
                  My Portfolio
                </a>
              </motion.div>
              {/* socials */}
              <motion.div
                variants={fadeIn("down", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex mx-auto lg:mx-0 text-[30px] gap-x-6 max-w-max "
              >
                <a href="https://www.linkedin.com/in/tanjil-mahmud01/">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/tanjilmahmud01">
                  <FaGithub />
                </a>
                <a href="https://www.facebook.com/tanjil.mahmud/">
                  <FaFacebook />
                </a>
              </motion.div>
            </div>
            {/* image */}
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
            >
              <img src={image} alt="profile image" />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Banner;
