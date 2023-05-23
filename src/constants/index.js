import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  computovision,
  codeparva,
  khoros,
  gupshup,
  resortSearch,
  ibsc,
  spa,
  graphql,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Computovision",
    icon: computovision,
    iconBg: "#FFF",
    date: "May 2018 - July 2021",
    points: [
      "Collected requirements from internal teams to design impactful graphics.",
      "Designed and built user-friendly interfaces for clients using WordPress and Joomla.",
      "Enhanced clients' websites by working on the CMS backend, modifying themes, and implementing SEO strategies."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Codeparva",
    icon: codeparva,
    iconBg: "#FFF",
    date: "Sep 2018 - Jan 2020",
    points: [
      "Integrated REST APIs and delivered the deposit and withdrawal UI feature for the self-storage service using React, Redux, Material UI, Formik, and React-virtualized.",
      "Designed and created over 30 responsive landing pages for the company and clients using HTML, CSS, and Javascript.",
      "Streamlined website development by creating templates using Angular 6, reducing developers' time by 70%.",
      "Developed reusable and readable components using React and upheld best coding practices and documentation to shorten onboarding time for new team members.",
      "Conducted comprehensive unit testing to ensure high-quality product delivery."
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Khoros",
    icon: khoros,
    iconBg: "#FFF",
    date: "Jan 2020 - Sep 2022",
    points: [
      "Improved the UI subsystem of the product using React, Typescript, and NextJs, resulting in a more user-friendly interface.",
      "Designed and implemented a data schema and API Layer using GraphQL, improving server-to-client interactions and overall performance.",
      "Collaborated with designers and product managers to enhance the overall user experience of the product.", "Automated postman testing for APIs, boosting team productivity by 60%.", 
      "Actively solved bugs, wrote unit tests, and reviewed code to ensure high-quality product delivery."
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Gupshup",
    icon: gupshup,
    iconBg: "#FFF",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Resort Search",
    description:
      "Crafted using React JS, HTML CSS. Implementation of a very common feature in ECommerce and Hospitality websites - filtering items as per the arguments passed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: resortSearch,
    source_code_link: "https://github.com/",
  },
  {
    name: "Single Page Business Site",
    description:
      "I like the UI of one the site so mimic single page business website which is mainly focused on a business venture.",
    tags: [
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: spa,
    source_code_link: "https://github.com/",
  },
  {
    name: "IBSC 2017",
    description:
      "A website for IEEE Bombay Sectional Congress Conference held on 27th - 29th January. Technologies used includes HTML, CSS, Bootstrap, JavaScript, jQuery.",
    tags: [
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ibsc,
    source_code_link: "https://github.com/",
  },
];

export { navLinks, technologies, experiences, projects };
