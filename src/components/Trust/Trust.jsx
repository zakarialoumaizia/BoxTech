import React from "react";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Trust = () => {
  return (
    <section className="bg-brandWhite py-16 mt-20">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-6 text-4xl font-bold text-darkBlue text-center"
        >
          Developer and Moderators?
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            
            <p className=" text-3xl font-semibold">Zakaria Loumaizia</p>
            <p className="">
            The owner of the idea of ​​the site and the developer of this site, who provides technical services at good prices.
            </p>
            
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            
            <p className="text-3xl font-semibold">Site Managers and Staff</p>
            <p className="">
              
            </p>
            <p className="text-sm text-gray-400">
            We have highly skilled and capable employees who are committed to time and very good prices.
              
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;