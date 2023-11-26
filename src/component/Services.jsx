import React from "react";
//icon
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Services = () => {
  //services data
  //later will be coming from Sanity

  const services = [
    {
      name: "Professional Course on React by CordersTrust Bangladesh",
      description: `A Front End Web Development course with React JS organized by EDGE under the ICT Division Ministry, Bangladesh Government.`,
      link: "Learn More",
    },
    {
      name: "BSC in Computer Science and Technology",
      description: `Graduated from North South University, Dhaka, Bangladesh with CGPA of 3.81`,
      link: "Learn More",
    },
    {
      name: "Mandarin Chinese HSK-4",
      description: `Completed Intermediate Level Reading, Writing and Speaking Proficiency from Tongji University, Shanghai, China with a score of 284/300`,
      link: "Learn More",
    },
  ];
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text and image background*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">My Educational Background</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Computer Science and Engineering Graduate with professional
              training of React JS and MERN stack
            </h3>
            <Link to="contact" smooth={true} spy={true}>
              {" "}
              <button className="btn btn-lg">Contact Me</button>
            </Link>
          </motion.div>
          {/* servies */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              {services.map((service, index) => {
                //destructure individual service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[170px] mb-[38px] flex "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-semibold leading-tight ">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn mb-[42px]">
                        <BsArrowUpRight className="text-white" />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
