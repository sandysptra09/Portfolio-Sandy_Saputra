import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Variants untuk animasi kartu
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.1, rotate: 2, transition: { duration: 0.3 } },
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          The technology that I usually use
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <motion.div
            className="w-32 h-32 flex flex-col items-center justify-center bg-tertiary rounded-2xl shadow-lg p-4 hover:shadow-2xl"
            key={technology.name}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain filter drop-shadow-lg"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            />
            <p className="mt-2 text-center text-white text-sm font-semibold tracking-wider">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
