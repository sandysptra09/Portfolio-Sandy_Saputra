import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Award = () => {
  const awards = [
    {
      title: "First Overall Champion in Software Engineering at SMK Assalaam Bandung",
      year: "2024",
    },
    {
      title: "First Place in the Expertise Competency Exam of SMK Assalaam Bandung",
      year: "2024",
    },
    {
      title: "Golden Winner in National English and Science Olympic Global House at Province Level with a score between 957 – 995",
      year: "2023",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Recognitions and Achievements</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Honors & Awards.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-8 ">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "tween", index * 0.3, 1)}
            className="max-w-sm w-full bg-tertiary p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-white text-lg font-extrabold text-center">{award.title}</h3>
              <p className="text-gray-300 text-sm mt-4">{award.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Award, "");
