"use client";

import React from 'react';
import Image from 'next/image';
import ProfilePic from '@/public/personal-photo-2.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'
      id='home'
    >

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ProfilePic}
              alt='Picture of my husband'
              quality="95"
              priority={true}
              className='rounded-full border-[0.35rem] border-white h-24 w-24 object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            className='text-4xl absolute bottom-0 left-0'
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, My name is <span className="font-bold">Adolfo Ramírez</span>. I am a <span className="font-bold">full-stack developer</span> with <span className="font-bold">4 years of experience</span>. I enjoy building sites with <span className="font-bold">Laravel and React (Next.js)</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
            href="#contact" 
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me
            <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>

        <a 
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href="/CV.pdf" 
          download={true}
        >
            Download CV 
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a 
          href="https://www.linkedin.com/in/adolfo-ram%C3%ADrez-31b733179/"
          target='_blank'
          className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60'>
            <BsLinkedin />
        </a>

        <a 
          href="https://github.com/Adolf97"
          target='_blank'
          className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full text-[1.38rem] focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/60'>
            <FaGithubSquare />
        </a>
      </motion.div>

    </section>
  )
}
