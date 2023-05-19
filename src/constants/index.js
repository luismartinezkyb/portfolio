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
  workana
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Problem Solver",
    company_name: "Freelancer",
    icon: workana,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "APdevs",
    icon: apdevs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
