import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-4 flex flex-col md:flex-row justify-start items-start'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-2xl leading-[30px]'
        >
          <p>
            I'm an experienced Frontend Developer specializing in web application development using
            JavaScript, React.js, and related technologies. As a Software Engineering (RPL) graduate, I have built
            skills in designing and implementing responsive, intuitive, and visually appealing user interfaces.
            Throughout my career, I have worked on various projects, including the development of e-commerce
            applications and personal portfolio websites.
          </p>
          <p className='mt-4'>
            I'm proficient in using modern frameworks such as
            React.js, Vite, and Tailwind CSS to create optimized, fast, and efficient web pages. In addition, I also
            have expertise in using animation tools such as Framer Motion to enhance user engagement and
            enrich visual experiences.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-10 md:mt-0 md:ml-10 flex-shrink-0'
        >
          <img
            src='/overview/myself.jpg'
            alt='Your Name'
            className='rounded-lg object-cover w-[400px] h-[400px]'
          />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
