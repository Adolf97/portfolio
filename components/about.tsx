"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section 
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">International Trade</span>, I decided to pursue my
        passion for programming. I have made a lot of courses and bootcamps, mainly focused on{" "}
        <span className="font-medium">frontend development</span>.{" "}
        <span className="italic">What I like most about programming</span> is that you can turn an idea into reality. I also <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. 
      </p>
      <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">React, Next.js and Laravel</span>
        . I am also familiar with TypeScript and Python, and I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a frontend
        developer.
      </p>
      <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching anime and going with friends to eat carne asada. I also enjoy{" "}
        <span className="font-medium">learning new things</span>; I am currently
        learning about{" "}
        <span className="font-medium">electronics and PLC programming</span>. I am also
        learning how to play the drums.
      </p>
    </motion.section>
  )
}
