import React from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";

//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";
import Layout from "../layout/Layout";

const About = () => {
  //   Number between 0 and 1 indicating the percentage that should be visible before triggering.
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4 ">
              I'm a Professional React and MERN stack Developer with 1 year of
              experience.
            </h3>
            <p className="mb-6">
              Some of my skill sets are available in this portfolio. Following
              are just for demonstration purpose.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={7} duration={5} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={5} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Delivered
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" smooth={true} spy={true}>
                {" "}
                <button className="btn btn-lg">Contact Me</button>
              </Link>
              <a className="text-gradient btn-link" href="#">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
