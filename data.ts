import {
  About,
  Achivements,
  Education,
  ProjectsWebiste,
  Reference,
  Service,
  Work,
} from "./type";

import CommandIcon from "@/public/icons/command.svg";
import DeveloperIcon from "@/public/icons/developermode.svg";
import DesktopIcon from "@/public/icons/desktop.svg";
import ServerIcon from "@/public/icons/server.svg";

import JavaScriptIcon from "@/public/icons/javascript.svg"
import CppIcon from "@/public/icons/cpp.svg";
import CIcon from "@/public/icons/c.svg";
import JavaIcon from "@/public/icons/java.svg";
import PythonIcon from "@/public/icons/python.svg";

import AngularIcon from "@/public/icons/angular.svg";
import EmberIcon from "@/public/icons/ember.svg";
import VueIcon from "@/public/icons/vue.svg";
import ReactIcon from "@/public/icons/react.svg";
import SolidIcon from "@/public/icons/solid.svg";
import NodeIcon from "@/public/icons/node.svg";
import TailwindIcon from "@/public/icons/tailwind.svg";
import BootstrapIcon from "@/public/icons/bootstrap.svg";
import MaterialIcon from "@/public/icons/material.svg";

import VsCodeIcon from "@/public/icons/vscode.svg";
import AndoridStudioIcon from "@/public/icons/androidstudio.svg";
import GitIcon from "@/public/icons/git.svg";
import JupyterIcon from "@/public/icons/jupyter.svg";
import XamppIcon from "@/public/icons/xampp.svg";

export const about: About[] = [
  {
    des: ` I'm Shruthi Sivagnanam, currently working as Member Techincal Staff in Zoho Corporation Private Limited.
    A passionate frontend developer with a sound knowledge of Javascript Frameworks. 
    Interested to know and explore the current technologies and trends in the IT world.`,
  },
];

export const services: Service[] = [
  {
    Icon: CommandIcon,
    title: "Frontend Development",
    about:
      "Experience on Javascript framework - <b> React, Ember, Angular, Vue, Solid and Next </b>",
  },
  {
    Icon: DeveloperIcon,
    title: "MERN Stack Development",
    about:
      "Full stack website with Javascript Framework and no-SQL database. <b> MongoDb-Express-React-Node </b> ",
  },
  {
    Icon: DesktopIcon,
    title: "Desktop Application",
    about:
      "Have a good experience on developing Desktop Application using <b>Java Swing</b>-<b>JDBC</b> ",
  },
  {
    Icon: ServerIcon,
    title: "End-product",
    about:
      "Able to create an end product for <b>Machine learning and Deep learning models</b>",
  }
];

export const education_details: Education[] = [
  {
    course: "Computer Science And Engineering",
    institute: "University College of Engineering BIT Campus",
    year: "2020-24",
    percentage: "CGPA: 8.34",
  },
  {
    course: "12th Grade",
    institute: "Sri Vageesha Vidyashram CBSE",
    year: "2019-20",
    percentage: "462/500",
  },
  {
    course: "10th Grade",
    institute: "Sri Vageesha Vidyashram CBSE",
    year: "2017-18",
    percentage: "421/500",
  },
];

export const work_details: Work[] = [
  {
    title: "Member Techincal Staff - Frontend Developer",
    companyName: "Zoho Corporation Pvt Ltd",
    duration: "2024",
    ip: "Member Techincal Staff",
    des: "Zoho Loans - (Angular JS, Vue JS, Solid JS)",
  },
  {
    title: "Techincal Trainee - Frontend Developer",
    companyName: "Zoho Corporation Pvt Ltd",
    duration: "2024",
    ip: "Techincal Trainee",
    des: "Detective and Zoho Loans - (Ember JS, Angular JS)",
  },
  {
    title: "Intern Student",
    companyName: "NIT Trichy",
    duration: "2023",
    ip: "Internship",
    des: "Deep Learning Projects (Rice pest detection and Fall armyworm detection)",
  }
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

export const programmingLanguage = [
  {
    iconName: JavaScriptIcon,
    text: 'Javascript',
  },
  {
    iconName: CppIcon,
    text: 'Cpp',
  },
  {
    iconName: CIcon,
    text: 'C',
  },
  {
    iconName: JavaIcon,
    text: 'Java',
  },
  {
    iconName: PythonIcon,
    text: 'Python',
  }
]

export const frameworks = [
  {
    iconName: AngularIcon,
    text: 'Angular',
  },
  {
    iconName: EmberIcon,
    text: 'Ember',
  },
  {
    iconName: VueIcon,
    text: 'Vue',
  },
  {
    iconName: ReactIcon,
    text: 'React',
  },
  {
    iconName: SolidIcon,
    text: 'Solid',
  },
  {
    iconName: NodeIcon,
    text: 'Node',
  },
  {
    iconName: TailwindIcon,
    text: 'Tailwind',
  },
  {
    iconName: BootstrapIcon,
    text: 'Bootstrap',
  },
  {
    iconName: MaterialIcon,
    text: 'Material',
  }
]

export const toolsAndIde = [
  {
    iconName: VsCodeIcon,
    text: 'VsCode',
  },
  {
    iconName: AndoridStudioIcon,
    text: 'Andorid Studio',
  },
  {
    iconName: GitIcon,
    text: 'Git',
  },
  {
    iconName: JupyterIcon,
    text: 'Jupyter',
  },
  {
    iconName: XamppIcon,
    text: 'Xampp',
  }
]

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
