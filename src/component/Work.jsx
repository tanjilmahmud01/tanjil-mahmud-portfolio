import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

import Img1 from "/src/assets/portfolio-img1.png";
import Img2 from "/src/assets/portfolio-img2.png";
import Img3 from "/src/assets/portfolio-img3.png";
import Alhabib from "/src/assets/al-habib-work.png";
import DummyJson from "/src/assets/dummy-json-work-2.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus magnam numquam modi quis provident assumenda sunt
                ratione sint necessitatibus ullam?
              </p>
              <button className="btn btn-sm">View All Projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                {/* img */}
              </div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Alhabib}
                alt="project-1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-500 z-50 flex items-center gap-x-4">
                <div className="">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-sm"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    See Details
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <img src={Img1} alt="" />
                      <h3 className="font-bold text-2xl text-primary mt-4">
                        Project Title
                      </h3>
                      <p className="font-semibold text-lg text-primary mt-1 mb-2">
                        Project Type: <span>Commercial</span>
                      </p>
                      <hr className="font-semibold border-1 border-orange-600" />
                      <p className="py-2 font-semibold text-sm text-primary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nam amet blanditiis quia obcaecati numquam quam
                        laboriosam qui dolores impedit id.
                      </p>
                      <hr className="font-semibold border-1 border-orange-600" />
                      <p className="py-2 font-semibold text-sm text-primary">
                        Technology Used: Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Nam amet blanditiis quia obcaecati
                        numquam quam laboriosam qui dolores impedit id.
                      </p>
                      <div className="flex gap-4">
                        <button className="btn btn-sm">
                          <a href="https://al-habib-equipments.web.app/">
                            Live
                          </a>
                        </button>
                        <button className="btn btn-sm">
                          <a href="https://github.com/tanjilmahmud01/al-habib-equips">
                            GitHub
                          </a>
                        </button>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>

                <button className="btn btn-sm">
                  <a href="https://al-habib-equipments.web.app/">Live</a>
                </button>
                <button className="btn btn-sm">
                  <a href="https://github.com/tanjilmahmud01/al-habib-equips">
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </motion.div>

          {/* More images */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col justify-between sm:gap-y-10 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                {/* img */}
              </div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={DummyJson}
                alt="project-2"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-500 z-50 flex items-center gap-x-4">
                <div className="">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-sm"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    See Details
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <img src={DummyJson} alt="" />
                      <h3 className="font-bold text-2xl text-primary mt-4">
                        Project Title
                      </h3>
                      <p className="font-semibold text-lg text-primary mt-1 mb-2">
                        Project Type: <span>Commercial</span>
                      </p>
                      <hr className="font-semibold border-1 border-orange-600" />
                      <p className="py-2 font-semibold text-sm text-primary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nam amet blanditiis quia obcaecati numquam quam
                        laboriosam qui dolores impedit id.
                      </p>
                      <hr className="font-semibold border-1 border-orange-600" />
                      <p className="py-2 font-semibold text-sm text-primary">
                        Technology Used: Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Nam amet blanditiis quia obcaecati
                        numquam quam laboriosam qui dolores impedit id.
                      </p>
                      <div className="flex gap-4">
                        <button className="btn btn-sm">
                          <a href="https://al-habib-equipments.web.app/">
                            Live
                          </a>
                        </button>
                        <button className="btn btn-sm">
                          <a href="https://github.com/tanjilmahmud01/al-habib-equips">
                            GitHub
                          </a>
                        </button>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>

                <button className="btn btn-sm">
                  <a href="https://al-habib-equipments.web.app/">Live</a>
                </button>
                <button className="btn btn-sm">
                  <a href="https://github.com/tanjilmahmud01/al-habib-equips">
                    GitHub
                  </a>
                </button>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                {/* img */}
              </div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Alhabib}
                alt="project-1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-500 z-50 flex items-center gap-x-4">
                <div className="">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-sm"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    See Details
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                      <img src={Img1} alt="" />
                      <h3 className="font-bold text-2xl text-primary mt-4">
                        Project Title
                      </h3>
                      <p className="font-semibold text-lg text-primary mt-1 mb-2">
                        Project Type: <span>Commercial</span>
                      </p>
                      <hr className="font-semibold border-1 border-orange-600" />
                      <p className="py-2 font-semibold text-sm text-primary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nam amet blanditiis quia obcaecati numquam quam
                        laboriosam qui dolores impedit id.
                      </p>
                      <hr className="font-semibold border-1 border-orange-600" />
                      <p className="py-2 font-semibold text-sm text-primary">
                        Technology Used: Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Nam amet blanditiis quia obcaecati
                        numquam quam laboriosam qui dolores impedit id.
                      </p>
                      <div className="flex gap-4">
                        <button className="btn btn-sm">
                          <a href="https://al-habib-equipments.web.app/">
                            Live
                          </a>
                        </button>
                        <button className="btn btn-sm">
                          <a href="https://github.com/tanjilmahmud01/al-habib-equips">
                            GitHub
                          </a>
                        </button>
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>

                <button className="btn btn-sm">
                  <a href="https://al-habib-equipments.web.app/">Live</a>
                </button>
                <button className="btn btn-sm">
                  <a href="https://github.com/tanjilmahmud01/al-habib-equips">
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
