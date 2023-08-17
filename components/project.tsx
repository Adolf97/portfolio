"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {

  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.25 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section 
      className='relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20'
    >
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-6 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] group-hover:opacity-50'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {
              tags.map((tag, index) => (
                <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>{tag}</li>
              ))
            }
          </ul>
        </div>

        <div 
          className="opacity-0 absolute w-auto h-auto rounded-lg overflow-hidden bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 group-hover:opacity-100 transition"
        >
          {
            url ? (
              <a
                className="flex flex-col justify-center items-center text-center p-5 font-semibold text-sm borderBlack text-black/90 tracking-[0.25rem] bg-gray-300 uppercase"
                href={url} 
                target="_blank"
              >
                Visit Project
                <AiOutlineGithub className="mt-2 text-2xl" />
              </a>
            ) : (
              <p>Sorry</p>
            )
          }
        </div>

        <Image 
          className='absolute hidden sm:block top-10 right-[-15rem] w-[35rem] rounded-t-lg shadow-2xl 
          transition 
          group-hover:scale-[1.04] 
          group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-2 

          group-even:left-[-15rem]
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2' 
          src={imageUrl} 
          alt="Project I worked on" 
          quality={85} 
        />
      </section>
    </motion.div>
  )
}