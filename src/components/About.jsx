import React from "react";
import {Tilt} from "react-tilt";
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

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        If you've found your way to this page, you're probably trying to get to know more about me. 
        First things first: <code>tabs&gt;&gt;&gt;spaces.</code>
        <br />
        <br />
        I'm a tech enthusiast; broadly interested in full-stack web development. I am currently hooked to
        machine learning. I read engineering blogs on system design in my spare time (that is not an expression).
        I characterize myself as a geek-strovert (yep, I coined the term). 
        <br />
        <br />

        I love conversations about technology, businesses, and startups. I'm into fitness, and I re-watch "Suits" every month. 
        Judge me all you want, but I loved the Indian version of "The Office". 
         </motion.p>
      
      <motion.div variants={textVariant()} className='mt-8'>
        <h7>Support me by buying me dinner.</h7>
      </motion.div>


      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");