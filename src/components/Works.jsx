import React, { useState, useRef, useEffect } from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasClicked, setHasClicked] = useState(false); // Track button clicks
  const projectsPerPage = 4;
  const headerRef = useRef(null);

  // Calculate the indices for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    } else {
      // Return to the first page if you have reached the last page
      setCurrentPage(1); 
    }
    // Mark that a button was clicked
    setHasClicked(true); 
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    } else {
      // Return to the last page if on the first page
      setCurrentPage(totalPages); 
    }
    // Mark that a button was clicked
    setHasClicked(true); 
  };

  // Scroll to the header only if a button was clicked
  useEffect(() => {
    if (hasClicked && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage, hasClicked]);

  return (
    <>
      <motion.div variants={textVariant()} ref={headerRef}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className='mt-10 flex justify-center md:justify-start md:space-x-4 gap-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1 && currentProjects.length === projectsPerPage}
          className='px-4 py-2 bg-tertiary text-white rounded-md disabled:bg-gray-800'
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages && currentProjects.length < projectsPerPage}
          className='px-4 py-2 bg-tertiary text-white rounded-md disabled:bg-gray-800'
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
