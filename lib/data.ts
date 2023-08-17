import React from "react";
import { RiComputerLine } from 'react-icons/ri';
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import RDQWebPage from "@/public/rdqWebPage.png";
import KaijuuPage from "@/public/kaijuu8Project.png";
import CrudMangas from "@/public/crudMangas.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Frontend Developer",
    location: "Guanajuato, Gto.",
    description:
      "While I was in college, some friends and I got together to develop websites for local businesses.",
    icon: React.createElement(RiComputerLine),
    date: "2019-2020",
  },
  {
    title: "Sales Engineer",
    location: "Querétaro, Qro.",
    description:
      "This job was not centered on programming, but in industrial products sales, but a year ago I developed the current company web page",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "IBM: Python for Data Science",
    location: "Online",
    description:
      "In order to learn data science, I enrolled in this course offered by IBM. I learned to program with python and learned to use libraries such as Pandas and Numpy.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Frontend Developer",
    location: "Guanajuato, Gto",
    description:
      "I'm currently working as a frontend developer for an open source organization, called UpVent Technologies. My stack includes React, Next.js, TypeScript, Tailwind/Bootstrap and Laravel. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "RDQ México",
    description:
      "I worked as a frontend developer on this web page for 2 months. The company wanted a simple but good-looking web site, so I decided to use Html, CSS and Vanilla JS.",
    tags: ["Html", "CSS", "Vanilla JS", "EmailJS"],
    imageUrl: RDQWebPage,
    url: "http://rdqmexico.com/",
  },
  {
    title: "Kaijuu No. 8 - Project",
    description:
      "Kaijuu No.8 is one of my favorite mangas, so I decided to make my own fansite to encourage more people to read this amazing manga, which is about to have an anime.",
    tags: ["React", "TypeScript", "React Router DOM", "Bootstrap"],
    imageUrl: KaijuuPage,
    url: "https://github.com/Adolf97/kaijuu8_page_react",
  },
  {
    title: "CRUD de Mangas",
    description:
      "As a frequent manga reader, I want to know how many and what mangas I've read, so I decided to create my own CRUD for mangas",
    tags: ["PHP", "MySQL", "Laravel", "Bootstrap", "React"],
    imageUrl: CrudMangas,
    url: "https://github.com/Adolf97/crud_mangas_laravel",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Svelte",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "PHP",
  "Laravel",
  "Symfony",
  "Python",
  "Flask",
  "MySQL",
  "Framer Motion",
] as const;