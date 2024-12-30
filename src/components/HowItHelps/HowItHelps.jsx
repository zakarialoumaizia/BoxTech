import React from "react";
import Card from "./CardComp.jsx";
import Icon1 from "../../assets/icon/1.png";
import Icon2 from "../../assets/icon/2.png";
import Icon3 from "../../assets/icon/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const HowItHelps = () => {
  return (
    <section>
      <div className="container py-16 my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <motion.div
                variants={SlideRight(0.2)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon1}
                  heading="Professionalism"
                  text="Adherence to high standards and quality in work."
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon2}
                  heading="Time"
                  text="Efficient management to meet deadlines and improve productivity."
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.6)}
                whileInView={"animate"}
                initial="initial"
              >
                <Card
                  icon={Icon3}
                  heading="Price"
                  text="The cost of a service or product, reflecting its value."
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            whileInView={"animate"}
            initial="initial"
            className="flex flex-col xl:justify-center xl:pr-14"
          >
            <h1 className="text-3xl font-bold text-darkBlue">
            Why us?
            </h1>
            <p className=" text-gray-400 mt-4">
            Because we offer the best prices, provide the best customer service, and are professionals.
            </p>
            
            <button className="w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300">
              Read More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;