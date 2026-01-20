// src/constants/index.js
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiDjango } from 'react-icons/si';
import {  FaBriefcase, FaGraduationCap } from 'react-icons/fa'; // Example icons
import { MdEmail, MdPhone, MdLocationOn} from "react-icons/md";




export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const projects = [
  {
    title: "Prefab Construction Business Website",
    description:
      "A conversion-focused business website built to handle real client enquiries, showcase prefab solutions, and streamline lead management through a custom admin panel.",
    tags: ["Service Business", "Lead Generation", "Full Stack"],
    image: "/projects/JPS.png",
    link: "https://youtu.be/TymHFBSLIME",
    category: "Freelance",
  },

  {
    title: "Real Estate Business Website",
    description:
      "A modern real estate website designed to highlight property listings, build trust, and capture qualified buyer and seller enquiries through clear call-to-actions.",
    tags: ["Real Estate", "Lead Generation", "Frontend"],
    image: "/projects/real-estate.png",
    link: "https://premium-real-estate-one.vercel.app/",
    category: "Service Websites",
  },

  {
    title: "Agency Business Website",
    description:
      "A clean and professional agency website built to communicate services clearly, improve brand credibility, and drive inbound client enquiries.",
    tags: ["Agency Website", "Business Presence", "Frontend"],
    image: "/projects/CMO.png",
    link: "https://cultureofmarketing.com/",
    category: "Service Websites",
  },

  {
    title: "Video Editor Portfolio",
    description:
      "A personal portfolio website designed to showcase video work, build professional credibility, and help a freelance editor attract new clients.",
    tags: ["Personal Brand", "Portfolio", "Frontend"],
    image: "/projects/Manish.png",
    link: "https://portfolio-manish-coral.vercel.app/",
    category: "Freelance",
  },

  {
    title: "Task Management System",
    description:
      "A productivity-focused web application built to help users organize tasks, track progress visually, and manage daily workflows efficiently.",
    tags: ["Web Application", "Dashboard", "Full Stack"],
    image: "/projects/to-do.png",
    link: "https://smart-todo-react.vercel.app/",
    category: "Web Applications",
  },

  {
    title: "Portfolio Website – Editor",
    description:
      "A minimal personal portfolio created to present work, skills, and experience with a clean layout and smooth user experience.",
    tags: ["Personal Portfolio", "UI Design", "Frontend"],
    image: "/projects/Rudra.png",
    link: "https://portfolio-rudra-mu.vercel.app/",
    category: "Freelance",
  },
];

// {
//   title: "Automated Resume Relevance Check System",
//   description: "A machine learning-based application that evaluates resumes against job descriptions, providing automated and consistent relevance scoring.",
//   tags: ["Streamlit", "Python"],
//   image: "/projects/Automated.png",
//   link: "https://youtu.be/UxRXtkNF4JM",
//   category: 'Full Stack',
// },
// {
//   title: "Employee Management System",
//   description: "A frontend application for managing employees with features like adding, editing, and deleting employee records.",
//   tags: ["React", "TailwindCSS"],
//   image: "/projects/EMS.png",
//   link: "https://github.com/rohit1221330/Employee-Management-System",
//   category: 'Frontend',
// },


export const skills = [
  {
    title: "HTML5",
    icon: <FaHtml5 size={60} />,
  },
  {
    title: "CSS3",
    icon: <FaCss3Alt size={60} />,
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare size={60} />,
  },
  {
    title: "React.js",
    icon: <FaReact size={60} />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss size={60} />,
  },
  {
    title: "Node.js",
    icon: <FaNodeJs size={60} />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={60} />,
  },
  {
    title: "Django",
    icon: <SiDjango size={60} />,
  },
  {
    title: "Git",
    icon: <FaGitAlt size={60} />,
  },
];
export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Janki Prefab System",
    icon: FaReact,
    iconBg: "#383E56",
    date: "Oct 2024 – Present",
    points: [
      "Developed responsive web applications using React.js, improving mobile engagement by 30%.",
      "Implemented RESTful APIs with Django REST Framework, reducing API response time by 40%.",
      "Collaborated with design team to create intuitive UI/UX, increasing user task completion by 25%.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Job Vacancy Result",
    icon: FaBriefcase,
    iconBg: "#E6DEDD",
    date: "Jan 2025 – Mar 2025",
    points: [
      "Built responsive websites using HTML, CSS, and JavaScript, enhancing cross-device compatibility.",
      "Improved navigation efficiency by 15% through UI/UX enhancements.",
      "Participated in code reviews, reducing post-deployment bugs by 25%.",
    ],
  },
  {
    title: "BBA (FIA)",
    company_name: "Delhi University",
    icon: FaGraduationCap,
    iconBg: "#383E56",
    date: "2024 – Present",
    points: [
      "Studying financial markets, corporate finance, and investment banking.",
      "Balancing academics with hands-on full-stack projects and internships.",
    ],
  },
];
export const contactInfo = [
  {
    icon: <MdEmail size={25} />,
    title: "Email",
    detail: "rohitdhyani50@gmail.com",
  },
  {
    icon: <MdPhone size={25} />,
    title: "Phone",
    detail: "+91 9971770689",
  },
  {
    icon: <MdLocationOn size={25} />,
    title: "Location",
    detail: "New Delhi, India",
  },
];

export const testimonials = [
  {
    quote:
      "Working with him was a pleasure. The attention to detail and the quality of the final product were outstanding. I would highly recommend him for any web development project.",
    name: "Jane Doe",
    designation: "CEO",
    company: "Innovate Co.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    quote:
      "An incredibly talented developer who is not only skilled but also great at communicating. He delivered exactly what we needed, on time and on budget.",
    name: "John Smith",
    designation: "Project Manager",
    company: "Solutions Inc.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    quote:
      "He transformed our vision into a beautiful, functional website. His passion for frontend development is evident in his work. We couldn't be happier with the result.",
    name: "Lisa Ray",
    designation: "Marketing Head",
    company: "Creative Minds",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];