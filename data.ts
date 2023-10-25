import { FaServer } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import {
  About,
  Achivements,
  Education,
  ProjectsWebiste,
  Reference,
  Service,
  Skill,
  Work,
} from "./type";
import { AiOutlineMobile } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const about: About[] = [
  {
    des: " I'm Shruthi Sivagnanam, currently pursing BE Degree [4th year] in Computer Science. A budding web developer with 2+ years experiences. Looking forward to work with professionals.",
  },
];

export const services: Service[] = [
  {
    Icon: MdDeveloperMode,
    title: "MERN Stack Development",
    about:
      "I can develop MERN Stack website. <b> MongoDb-Express-React-Node </b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Desktop Application",
    about:
      "Have a good experience on developing Desktop Application using <b>Java Swing</b>-<b>JDBC</b> ",
  },
  {
    Icon: AiOutlineMobile,
    title: "Android Application development",
    about:
      "Designed and developed few robust android application with <b>Java</b>",
  },
  {
    Icon: FaServer,
    title: "End-product",
    about:
      "Able to create an end product for <b>Machine learning and Deep learning models</b>",
  },
];

export const education: Education[] = [
  {
    course: "Computer Science And Engineering",
    institute: "University College of Engineering BIT Campus",
    year: "2020-24",
    percentage: "85%",
  },
  {
    course: "12th Grade",
    institute: "Sri Vageesha Vidyashram CBSE",
    year: "2019-20",
    percentage: "92%",
  },
];

export const work: Work[] = [
  {
    title: "Intern Student",
    companyName: "NIT Trichy",
    duration: "3 months",
    ip: "Internship",
    des: "Deep Learning Projects (Rice pest detection and Fall armyworm detection)",
  },
  {
    title: "Full Stack Developer",
    companyName: "Exposys Data Labs",
    duration: "1 month",
    ip: "Internship",
    des: "Mass Mail Dispatcher Project",
  },
];

export const achivements: Achivements[] = [
  {
    title: "TCS CodeVita",
    des: "Secured global rank of 4328 in TCS Codevita 2022",
  },
  {
    title: "International Conference in RMK College",
    des: "Design and Creation of an app for text and speech recognition of Sign Language - Sign Aloud",
  },
];

export const reference: Reference[] = [
  {
    name: "Dr. S. Nalini",
    des: "Assistant Professor",
    insitute: "UCE BIT Campus",
  },
  {
    name: "Dr. T. Mithila",
    des: "Assistant Professor",
    insitute: "UCE BIT Campus",
  },
  {
    name: "Dr. U. Srinivasulu Reddy",
    des: "Associate  Professor",
    insitute: "NIT Trichy",
  },
];

export const language: Skill[] = [
  {
    Icon: BsCircleFill,
    skill: "Java",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    skill: "C",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    skill: "Cpp",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    skill: "Python",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    skill: "JavaScript",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    skill: "React",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    skill: "Node",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    skill: "Express",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    skill: "Php",
    level: "80%",
  },
];
export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    skill: "VsCode",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    skill: "Android Studio",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    skill: "Jupyter Notebook",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    skill: "Google Colab",
    level: "80%",
  },

  {
    Icon: BsCircleFill,
    skill: "Xampp",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    skill: "Git",
    level: "80%",
  },
];

export const projects_details: ProjectsWebiste[] = [
  {
    title: "Sign Language Recognition System",
    projectUrl: "https://github.com/Shruthi-Sivagnanam/sign-aloud",
    webisteUrl: "",
    des: "Under the guidance of DR. S. Nalini(Assistant Professor)",
  },
  {
    title: "Resume Builder",
    projectUrl: "https://github.com/Shruthi-Sivagnanam/resume-builder",
    webisteUrl:
      "https://resume-builder-k9d8xqsp5-shruthi-sivagnanam.vercel.app/",
    des: "Build Your resume and download the pdf",
  },
  {
    title: "Mass Mail Dispatcher",
    projectUrl: "https://github.com/Shruthi-Sivagnanam/emailHunt",
    webisteUrl: "https://email-hunt.vercel.app/",
    des: "Project associated with Exposys Data Labs",
  },
  {
    title: "Pizza Delivery Web App",
    projectUrl: "https://github.com/Shruthi-Sivagnanam/pizza-delivery-system",
    webisteUrl: "",
    des: "MERN application with payment gateway",
  },
  {
    title: "Online Feedback System",
    projectUrl: "https://github.com/Shruthi-Sivagnanam/feedback",
    webisteUrl: "",
    des: "Associated with UCE BIT Campus",
  },
  {
    title: "HTML, CSS, JS Editor",
    projectUrl: "https://github.com/Shruthi-Sivagnanam/code-editor",
    webisteUrl: "https://code-editor-10e9qfqi9-shruthi-sivagnanam.vercel.app/",
    des: "Code editor developed with react.js",
  },
];
