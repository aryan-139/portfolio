import {
  mobile,
  backend,
  creator,
  web,
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
  figma,
  docker,
  deepsight,
  zipy,
  prowess,
  wealthbridge,
  library,
  bytebit,
  bit,
  futuresfirst,
  himanshu,
  nishant,
  karthik,
  educationalinitiatives,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "FastAPI",
    icon: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
  },
  {
    name: "postgresql",
    icon: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "AWS",
    icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Educational Initiatives",
    icon: educationalinitiatives,
    iconBg: "#383E56",
    date: "August 2024 - Present",
    points: [
      "Currently mapped to the Core and CDP SBU whose function is to create a centralised platform decouple systems.",
      "Building a Common Authoring Platform to unify content authoring and management, powering 9 products.",
      "Developed an E2E test container creation and multi-level, multi persona review workflow for paper authoring.",
      "Engineered a scalable content versioning module to generate and manage localized variants of questions, streamlining cross-regional content development.",
      "Implementing item-tagging feature with tag normalisation, duplicate prevention, and periodic cleanup ensuring metadata integrity.",
    ],
  },
  {
    title: "Quant Market Analyst",
    company_name: "Futures First",
    icon: futuresfirst,
    iconBg: "#383E56",
    date: "January 2024 - June 2024",
    points: [
      "Developed strategies and tools which enabled trading the US 2-5-10 Year Treasuries, Fed Fund, SOFR Futures using various techniques involving Scalping, Spreads, Butterflies and Condors inorder to manage risk and hedge positions.",
      "Dealt with dynamic market data and created financial models to lock trades under varied scenarios.",
      "Executed trades backed by forward curve analysis, hitting impact, and open-interest analysis of US STIRs futures.",
    ],
  },
  {
    title: "Computer Vision Software Engineer Intern",
    company_name: "Deepsight AI Labs",
    icon: deepsight,
    iconBg: "#383E56",
    date: "July 2023 - August 2023",
    points: [
      "Proposed the architecture, and implemented an end-to-end project of a sophisticated Visitor Management Solution with Facial Recognition based check-in, and checkout system.",
      "This impacted the organisation to have 34% faster registrations and reduced manual errors by 70%, benchmarked against the previous system.",
      "Designed and executed the entire frontend of the Administrative Dashboard, strategically incorporating Key Performance Indicators (KPIs) for data-driven insights and actionable decision-making.",
      "Proficiently diagnosed and fixed bugs and critical memory leaks in the existing software at priority, significantly boosting performance by 800% ",
    ],
  },
  {
    title: "Technical Content Engineer Intern",
    company_name: "Zipy.ai",
    icon: zipy,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Worked on the technical documentation for the software , including API reference and troubleshooting guides.",
      "Wrote and published 9 technical articles on the company blog, which had over 30,000 hits.",
      "Skills and Tools used: React, JavaScript, Node.js, Express.js, Javascript Frameworks, Error-Monitoring",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Prowess",
    icon: prowess,
    iconBg: "#383E56",
    date: "July 2022 - Aug 2022",
    points: [
      "Built a Resume Parser System in the profile-building section, which dynamically auto-populates the fields after parsing the media through the JSON response from the API.",
      "Integrated a Stripe payment gateway to the platform for users wanting to upgrade their plan, and for employers.",
      "Worked with a fully remote team which were spread out in different time zones.",
    ],
  },
  {
    title: "MS. Mathematics and Computing",
    company_name: "Birla Institute of Technology",
    icon: bit,
    iconBg: "#E6DEDD",
    date: "May 2019 - Present",
    points: [
      "President, Rotaract Club of BIT Mesra- Spearheaded a team of 170 members for the institute's socio-cultural chapter, Rotaract Club.",
      "Editor-in-Chief, News and Publications Society- Took interviews of imminent personalities, and wrote multiple editorials and articles to college newspaper. Interfaced with the college administration and the media houses to get the newspaper published.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aryan is a web-wizard who transformed our vision into reality at unbelievable pace.",
    name: "Himanshu Singh",
    designation: "Founder and CEO",
    company: "Prowess",
    image: himanshu,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aryan does.",
    name: "Nishant Veer",
    designation: "CEO and CTO",
    company: "Deepsight AI Labs",
    image: nishant,
  },
  {
    testimonial:
      "Aryan, has an extremely strong work ethic and his contributions to our tech blogs totally exceeded our expectations.",
    name: "Karthik MSN",
    designation: "Co-Founder",
    company: "Zipy.ai",
    image: karthik,
  },
];

const projects = [
  {
    name: "Wealthbridge",
    description:
      "Developed a full-stack finance dashboard with Machine Learning predictions and forecasting abilities using the MERN stack (MongoDB, Express, React, Node). Developed the backend using Node.js and Express.js as the framework, and used MongoDB to store all the        financial and user-specific data.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],
    image: wealthbridge,
    source_code_link: "https://github.com/aryan-139/wealthbridge",
  },
  {
    name: "LibraryPlus",
    description:
      "LibraryPlus is a Library Management System, which aims to fix the efficiency and organization issues faced by libraries. It is an admin based web application, which allows the admin to manage the library, and the users to access the library. One can issue books, return books, search for books, and view the library catalog.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/aryan-139/Libraryplus",
  },
  {
    name: "ByteBit",
    description:
      "The Huffman Coding Compression System is a software tool that utilizes the Huffman coding algorithm to compress and decompress files. Huffman coding is a popular lossless data compression algorithm that assigns variable-length codes to different characters based on their frequencies in the input file.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
      {
        name: "multer",
        color: "blue-text-gradient",
      },
    ],
    image: bytebit,
    source_code_link: "https://github.com/aryan-139/bytebit",
  },
];

export { services, technologies, experiences, testimonials, projects };
