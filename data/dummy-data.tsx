import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

export const projects = [
  {
    id: 1,
    projectName: "Proje1",
    buttonUrl: "url",
    imageUrl: "/project.jpg",
    description: "description",
  },
  {
    id: 2,
    projectName: "Proje2",
    buttonUrl: "url",
    imageUrl: "/project.jpg",
    description: "description 2",
  },
  {
    id: 3,
    projectName: "Proje 3",
    buttonUrl: "url",
    imageUrl: "/project.jpg",
    description: "description 3",
  },
  {
    id: 4,
    projectName: "Proje 4",
    buttonUrl: "url",
    imageUrl: "/project.jpg",
    description: "description 4",
  },
  {
    id: 5,
    projectName: "Proje 5",
    buttonUrl: "url",
    imageUrl: "/project.jpg",
    description: "description 5",
  },
];

export const skills = [
  "React.js",
  "React Native",
  "Vue.js",
  "Next.js",
  "Vite.js",
  "Node.js",
  "C# (.Net Frameworks)",
  "HTML",
  "CSS",
];

export const aboutMe = {
  imageUrl: "/me.jpeg",
  info: "I am a Software Developer with experience in both frontend and backend technologies. I completed my internship at Havelsan, and during my second year at university, I worked at Avmeda as a Junior Developer, where I used React.js and Node.js. Most recently, I worked at Brew Interactive, where I focused on React.js, Vite.js, Vue.js, React Native and Next.js.",
};

export const experience = [
  {
    company: "Brew Bilişim",
    title: "Software Developer",
    time: "10/2021 - 10/2025",
    description:
      "I worked as a frontend developer. I use React.js, Vue.js, Next.js, Vite.js and React Native.",
    projects:
      "Mobilet, Tezmaksan, Skoda, BeforeSunset, Loyl, Pyramos, HiringCycle, VillaSepeti Mobile App, Room3D and Slack AI Bot.",
  },
  {
    company: "HAVELSAN AŞ.",
    title: "Intern",
    time: "07/2021 - 09/2021",
    description:
      "I completed my internship. I created an object tracking and detection application with Python.",
    projects: "Object Tracking and Detection application",
  },
  {
    company: "Avmeda",
    title: "Junior Developer",
    time: "08/2020 - 03/2021",
    description:
      "I worked as a Junior Developer. I created a web interface to control soilless farming with React.js and Node.js",
    projects: "Web Interface",
  },
];

export const contacts = [
  {
    key: "github",
    type: "url",
    icon: <FiGithub />,
    info: "https://github.com/zeyneptufekci99",
  },
  {
    key: "linkedin",
    type: "url",
    icon: <CiLinkedin />,
    info: "https://www.linkedin.com/in/zeynep-tufekci/",
  },
  {
    key: "phone",
    type: "phone",
    icon: <BsTelephone />,
    info: "+905439716343",
  },
  {
    key: "mail",
    type: "mail",
    icon: <IoMailOutline />,
    info: "zeyneptufekci1999@gmail.com",
  },
];
