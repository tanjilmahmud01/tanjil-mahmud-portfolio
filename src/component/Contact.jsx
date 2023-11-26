import React, { useRef } from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//email
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Has Been Sent! Thanks!", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(`Sorry! An Error Occured! More Details: ${error.text}`, {
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="lg:section py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2">
                Get In Touch With Me
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br />
                Together
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type="text"
              name="user_email"
              placeholder="Your Email"
            />

            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
              name="message"
            ></textarea>

            <input className="btn btn-lg" type="submit" value="Send Message" />

            {/* <button >Send Message</button> */}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
