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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ibt,
  apdevs,
  workana,
  tecno,
  
  graphql,
  pgsql,
  next,
  aws,
  flutter,
  gnu,
  laravel,
  firebase,
  lambda,
} from "../assets";
import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";

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

export const footerLinks = [
  {
      title: "Useful Links",
      links: [
          {
              name: "Content",
              link: "https://www.hoobank.com/content/",
          },
          {
              name: "How it Works",
              link: "https://www.hoobank.com/how-it-works/",
          },
          {
              name: "Create",
              link: "https://www.hoobank.com/create/",
          },
          {
              name: "Explore",
              link: "https://www.hoobank.com/explore/",
          },
          {
              name: "Terms & Services",
              link: "https://www.hoobank.com/terms-and-services/",
          },
      ],
  },
  {
      title: "Community",
      links: [
          {
              name: "Help Center",
              link: "https://www.hoobank.com/help-center/",
          },
          {
              name: "Partners",
              link: "https://www.hoobank.com/partners/",
          },
          {
              name: "Suggestions",
              link: "https://www.hoobank.com/suggestions/",
          },
          {
              name: "Blog",
              link: "https://www.hoobank.com/blog/",
          },
          {
              name: "Newsletters",
              link: "https://www.hoobank.com/newsletters/",
          },
      ],
  },
  {
      title: "Partner",
      links: [
          {
              name: "Our Partner",
              link: "https://www.hoobank.com/our-partner/",
          },
          {
              name: "Become a Partner",
              link: "https://www.hoobank.com/become-a-partner/",
          },
      ],
  },
];
export const socialMedia = [
  {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
  },
  {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
  },
  {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
  },
  {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Cloud Computing with AWS ",
    icon: mobile,
  },
  
  {
    title: "Server Administrator",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "PosgreSQL",
    icon: pgsql,
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "AWS Cloud Computing",
    icon: aws,
  },
  {
    name: "AWS Cloud Computing",
    icon: lambda,
  },
  {
    name: "NEXT js",
    icon: next,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "GNU",
    icon: gnu,
  },
  
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Innova Business Technology",
    icon: ibt,
    iconBg: "#383E56",
    date: "Sep 2022 - Actual",
    points: [
      "Developing and maintaining web applications using Laravel, JQuery, PHP, Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed well-structure, maintainable code and thoroughly test your own work.",
      "I Developed a variety of projects like a Single Sign On, Lambda Functions with API Gateway and a payment window integration.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ITC Instituto Tecnológico de Celaya",
    icon: tecno,
    iconBg: "#383E56",
    date: "Jun 2021 - Sep 2022",
    points: [
      "I worked with a variety of technologies, learn from scratch how to build a fullstack application with MERN stack",
      "I built some projects by my own like an Online Store with checkout and payment method support.",
      "Participating in some contests and open-source projects like a News Blog, a chatbot written in python to help people get to the right place.",
      "Developed well-structure, maintainable Flutter Projects with the BaaS Firebase, Authentication and authorization support.",
    ],
  },
  {
    title: "Problem Solver",
    company_name: "Freelancer",
    icon: workana,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Sep 2021",
    points: [
      "Maintaining web applications using Html, Css and Javascript Solutions and other related technologies.",
      "Working on a few projects to solve specific problems without having a full time contract",
      "Face to face with clients who wants their problem been solved ASAP.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "APdevs",
    icon: apdevs,
    iconBg: "#383E56",
    date: "Aug 2019 - May 2021",
    points: [
      "I built some nice-friendly web pages with tools like CMS Wordpress, CSS, HTML, PHP.",
      "PoS Inventory service and installation",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I developed a wiki to help clients to get started with the PoS, some kind of advising to know how the PoS works",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const heroText=[
  'Highly skilled and dedicated Full Stack Developer ', 
  'with 3+ years of experience in designing and developing',
  'high-performance Backend and Frontend solutions.'
]


const headers = {
  about:{
    title:'About Me', 
    subtitle: "A LITTLE ABOUT MYSELF",
    text:[
      `I'm a fullstack developer proficient in both front-end and back-end development, with a strong understanding of software development principles, data structures, and algorithms. `,
      `Strong problem-solving abilities and a track record of delivering high-quality code on time. Demonstrated expertise in creating robust, scalable, and user-friendly solutions. Always applying modern frontend and backend technologies, frameworks, and tools. Committed to staying up-to-date with emerging technologies and continuously enhancing programming skills.`,
      "I'm a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real-world problems.",
      "I've just graduated from Systems Engineering at the Instituto Tecnológico de México en Celaya #AIEnthusiast"
    ]
  },
  overview:{
    title:'Overview', 
    subtitle: 'Introduction',
    text:[
      "I'm a software developer with experience in programming languages like Javascript, Typescript, PHP, Dart and expertise in frameworks like React, Nodejs, Laravel, NextJs and currently learning Sveltejs. Experienced with different TechStacks like: MERN, PERN, LARAVEL, NEXTJS, LARAVEL+REACT.",
      
      `Proficient in both front-end and back-end development, with a strong understanding of web architecture and design patterns. 
      Dedicated to writing clean, maintainable code that adheres to industry best practices.`,
      
      `Experienced in participating in all stages of the development lifecycle, from requirements gathering and design, to development, testing, and deployment. 
      Skilled in Agile methodologies and using tools like Jira, Trello, Youtrack and Slack. A proactive problem solver who is passionate about staying up-to-date with the latest technologies and techniques in the field.`,
      
    ]
  },
  experience:{
    title:'Work Experience', 
    subtitle: 'WHAT I HAVE DONE SO FAR',
    text:[
    ]
  },
  project:{
    title:'Projects', 
    subtitle: 'My Work',
    text:[
      'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and some of it with live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage project effectively with git as tool.'
    ]
  },
  certification:{
    title:'My Certifications', 
    subtitle: 'AND BADGES',
    text:[

    ]
  },
  testimonial:{
    title:'Testimonials', 
    subtitle: 'WHAT OTHER SAY',
    text:[
      
    ]
  },
  contact:{
    title:'Testimonials', 
    subtitle: 'WHAT OTHER SAY',
    text:[
      
    ]
  }
}

export { services, technologies, experiences, testimonials, projects, heroText, headers};
