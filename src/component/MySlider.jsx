import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

import Skill1 from "../assets/skill-1.png";
import Skill2 from "../assets/skill-2.png";
import Skill3 from "../assets/skill-3.png";
import Skill4 from "../assets/skill-4.png";
import Skill5 from "../assets/skill-5-4.png";
import Skill6 from "../assets/skill-6-2.png";
import Skill7 from "../assets/skill-7.png";
import Skill8 from "../assets/skill-8.png";
import Skill9 from "../assets/skill-9.png";
import Skill10 from "../assets/skill-10.png";
import Skill11 from "../assets/skill-11.png";
import { Link } from "react-scroll";

const MySlider = () => {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-10 lg:gap-x-10 lg:flex-row lg:justify-start lg:items-center  h-full">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" lg:w-1/3"
          >
            <div className="flex flex-col justify-start items-start">
              <h2 className="h2 text-accent mb-6">My Skill Set</h2>
              <h3 className="h3 max-w-[455px] mb-16">
                I'm expert in various Front End Web Development Tools and
                Technologies.
              </h3>
              <Link to="work" smooth={true} spy={true}>
                {" "}
                <button className="btn btn-lg">See My Work</button>
              </Link>
            </div>
          </motion.div>
          {/* slider */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h-full lg:flex-1 lg:w-1/2 "
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={false}
              loop={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={false}
              navigation={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            >
              <SwiperSlide>
                <img className="h-full" src={Skill1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-ful" src={Skill8} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill9} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill10} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="h-full" src={Skill11} alt="" />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MySlider;
