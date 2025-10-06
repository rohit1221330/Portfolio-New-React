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
    title: "Janki Prefab System",
    description: "An advanced full-stack business website for a prefab manufacturing company, featuring enquiry forms, JWT login, admin management, and a dynamic product catalog.",
    tags: ["React", "Django", "PostgreSQL", "TailwindCSS"],
    image: "/projects/JPS.png",
    link: "https://youtu.be/TymHFBSLIME",
    category: 'Full Stack',
  },
  {
    title: "Task Management System",
    description: "A full-stack task management application featuring secure user authentication, a dynamic dashboard with data visualization charts to track productivity, and automated task reminders.",
    tags: ["React", "JavaScript", "TailwindCSS", "Django"],
    image: "/projects/to-do.png",
    link: "https://smart-todo-react.vercel.app/",
    category: 'Full Stack',
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects, skills, and experience with a modern and interactive UI design.",
    tags: ["Html", "CSS", "JavaScript"],
    image: "/projects/Portfolio.png",
    link: "https://rohit-dhyani-portfolio.netlify.app/",
    category: 'Frontend',
  },
  {
    title: "Automated Resume Relevance Check System",
    description: "A machine learning-based application that evaluates resumes against job descriptions, providing automated and consistent relevance scoring.",
    tags: ["Streamlit", "Python"],
    image: "/projects/Automated.png",
    link: "https://youtu.be/UxRXtkNF4JM",
    category: 'Full Stack',
  },
  {
    title: "Employee Management System",
    description: "A frontend application for managing employees with features like adding, editing, and deleting employee records.",
    tags: ["React", "TailwindCSS"],
    image: "/projects/EMS.png",
    link: "https://github.com/rohit1221330/Employee-Management-System",
    category: 'Frontend',
  },
 
];


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