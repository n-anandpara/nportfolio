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
  airbnbClone,
  github_logo,
  linkedIn_logo
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
    id: "projects",
    title: "Projects",
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
    title: "Senior Software Engineer",
    company_name: "Gupshup",
    icon: gupshup,
    iconBg: "#FFF",
    date: "March 2023 - Present",
    company_link: "https://www.gupshup.io/",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Khoros",
    icon: khoros,
    iconBg: "#FFF",
    date: "Jan 2020 - Sep 2022",
    company_link: "https://khoros.com/",
    points: [
      "Improved the UI subsystem of the product using React, Typescript, and NextJs, resulting in a more user-friendly interface.",
      "Designed and implemented a data schema and API Layer using GraphQL, improving server-to-client interactions and overall performance.",
      "Collaborated with designers and product managers to enhance the overall user experience of the product.", "Automated postman testing for APIs, boosting team productivity by 60%.", 
      "Actively solved bugs, wrote unit tests, and reviewed code to ensure high-quality product delivery."
    ],
  },
    {
    title: "Software Engineer",
    company_name: "Codeparva",
    icon: codeparva,
    iconBg: "#FFF",
    date: "Sep 2018 - Jan 2020",
    company_link: "https://codeparva.com/",
    points: [
      "Integrated REST APIs and delivered the deposit and withdrawal UI feature for the self-storage service using React, Redux, Material UI, Formik, and React-virtualized.",
      "Designed and created over 30 responsive landing pages for the company and clients using HTML, CSS, and Javascript.",
      "Streamlined website development by creating templates using Angular 6, reducing developers' time by 70%.",
      "Developed reusable and readable components using React and upheld best coding practices and documentation to shorten onboarding time for new team members.",
      "Conducted comprehensive unit testing to ensure high-quality product delivery."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Computovision",
    icon: computovision,
    iconBg: "#FFF",
    date: "May 2018 - July 2021",
    company_link: "https://www.computovision.com/",
    points: [
      "Collected requirements from internal teams to design impactful graphics.",
      "Designed and built user-friendly interfaces for clients using WordPress and Joomla.",
      "Enhanced clients' websites by working on the CMS backend, modifying themes, and implementing SEO strategies."
    ],
  },
];

const projects = [
  {
    name: "Airbnb Clone",
    description:
      "It is clone of airbnb where a service that lets property owners rent out their spaces to travelers looking for a place to stay. Travelers can rent a space for multiple people to share, a shared space with private rooms, or the entire property for themselves.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: airbnbClone,
    source_code_link: "https://github.com/n-anandpara/airbnb-clone",
    site_link: "https://airbnb-clone-n.vercel.app/",
  },
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
    source_code_link: "https://github.com/n-anandpara/beach-resort",
    site_link: "https://reactjs-beach-resort-app.netlify.app/",
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
    source_code_link: "https://github.com/n-anandpara/Business-demo-website",
    site_link: "https://single-page-business.netlify.app/",
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
    source_code_link: "https://github.com/n-anandpara/IBSC17",
    site_link: "https://ibsc17.netlify.app/",
  },
];


const footer = [
  {
    name: "linkedIn",
    logo: linkedIn_logo,
    link: "https://www.linkedin.com/in/ncanandpara/"
  },
  {
    name: "github",
    logo: github_logo,
    link: "https://github.com/n-anandpara"
  }
];

export { navLinks, technologies, experiences, projects, footer };
