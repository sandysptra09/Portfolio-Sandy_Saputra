import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';

import olympic from '../assets/certificate/olympic.jpg';
import startup from '../assets/certificate/startup.jpg';
import ujikom from '../assets/certificate/ujikom.jpg';
import topujikom from '../assets/certificate/topujikom.jpg';
import jurnal_ilmiah from '../assets/certificate/jurnal_ilmiah.jpg'

const Award = () => {
  const awards = [
    {
      title: "First Overall Champion in Software Engineering at SMK Assalaam Bandung",
      year: "2024",
      image: ujikom,
    },
    {
      title: "First Place in the Expertise Competency Exam of SMK Assalaam Bandung",
      year: "2024",
      image: topujikom,
    },
    {
      title: "Certificate of Appreciation: Contribution to the Webinar “Writing Scientific Journals with Creativity“",
      year: "2024",
      image: jurnal_ilmiah,
    },
    {
      title: "Active Participation in the TechUpdate Online Vol. 51 x Roadshow Gerakan Nasional 1000 Startup Digital",
      year: "2023",
      image: startup,
    },
    {
      title: "Golden Winner in National English and Science Olympic Global House at Province Level with a score between 957 – 995",
      year: "2022",
      image: olympic,
    },
  ];

  return (
    <>
      <div className="text-center">
        <p className={`${styles.sectionSubText}`}>Recognitions and Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Honors & Awards</h2>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className="max-w-sm w-full bg-tertiary p-6 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-white text-lg font-extrabold text-center">{award.title}</h3>
              <img 
                src={award.image} 
                alt={`${award.title} Certificate`} 
                className="mt-4 w-full h-auto object-cover rounded-md" 
              />
              <p className="text-gray-300 text-sm mt-4">{award.year}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Award, "");
