import {
  codewarsB,
  codewarsB2,
  resumeEn,
  resumeEs,
  githubB,
  peopleT1,
  freecode3,
  codewars,
  freecode1,
  freecode2,
  cert_api,
  cert_js,
  iiot,
  cyberops,
  scrum,
  ccna,
  lifelong,
  academyaws,
  devnet,
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
    php,
    mxL,
    enL,
    esL,
    cm1,
    cm2,
    onlinestore1,
    hookbank,
    gmail,
    phone,
    github,
    logo
} from "../assets";
import {  facebook, instagram, linkedin, twitter } from "../assets";

export const imagesLanguages={
    es:esL,
    en:enL
}
export const languagesNav=[
    {
        name:'en',
        title:'Inglés',
        icon: enL
    },
    {

        name:'es',
        title:'Español',
        icon: esL
}
];
  
  
export const navLinks = [
    {
        id: "about",
        title: "Sobre mi",
    },
    {
        id: "work",
        title: "Mi trabajo",
    },
    {
        id: "contact",
        title: "Contacto",
    },
    {
        id: "projects",
        title: "Proyectos",
    },
];
  
export const footerLinks = {
    preview:{
        title: "Resumen",
        links: [
            {
                name: "Sobre Mi",
                link: "about",
            },
            {
                name: "Experiencia",
                link: "work",
            },
            {
                name: "Proyectos",
                link: "projects",
            },
            {
                name: "Contacto",
                link: "contact",
            },
            
        ],
    },
    contact:{
        title: "Contáctame",
        links: [
            {
                name: "luismartinezjpg@gmail.com",
                icon: gmail,
                link: "mailto:luismartinezjpg@gmail.com",
            },
            
            {
                name: "Pídemelo por correo",
                icon:phone,
                link: "#contact",
            },
            {
                name: "LinkedIn",
                icon:linkedin,
                link: "https://www.linkedin.com/in/luis-martinez-kyb/"
            },
            {
              name: "Ve mi Currículum",
              icon:logo,
              link: "https://raw.githubusercontent.com/luismartinezkyb/repo_images_me/main/luis_martinez_cv.jpg",
            },
            {
              name: "Perfil de GitHub",
              icon:github,
              link: "https://github.com/luismartinezkyb",
            },
            
            
        ],
    },
    
    professional:{
        title: "Profesional",
        links: [
            {
                name: "Ve mi Currículum",
                link: "https://raw.githubusercontent.com/luismartinezkyb/repo_images_me/main/luis_martinez_cv.jpg",
            },
            {
              name: "Perfil de GitHub",
              link: "https://github.com/luismartinezkyb",
            },
            {
                name: "Contáctame por Slack!",
                link: "luisramonmartinezarredondo08@gmail.com",
            },
        ],
    },
};
export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/luismartinezkyb/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/Luis.Martinez1805k",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://twitter.com/Luis_Mkyb",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/in/luis-martinez-kyb/",
    },
];
const badges2 = [
  {
    title: "Soluciones de CodewStars ",
    icon: codewarsB,
    public_url:'https://www.codewars.com/users/luismartinezkyb',
    image:codewars
  },
  {
    title: "Stats en Github ",
    icon: githubB,
    public_url:'https://github.com/luismartinezkyb/codewars',
    image:codewars
  },
  
];

const services = [
    {
      title: "Desarrollador Backend",
      icon: backend,
    },
    {
      title: "Desarrollador Frontend",
      icon: web,
    },
    {
        title: "Cloud Computing con AWS ",
        icon: mobile,
    },
    
    {
        title: "Configuración y administración de Servidores",
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
      name: "PHP",
      icon: php,
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
      title: "Desarrollador FullStack",
      company_name: "Innova Business Technology",
      icon: ibt,
      iconBg: "#383E56",
      date: "Sep 2022 - Actual",
      points: [
        "Desarrollé aplicaciones web usando Larave, JQuery, PHP, Javascript y otras tecnologías",
        "Colaboré con equipos funcionales incluidos diseñadores, mercadotecnia, producto Managers y otros desarrolladores para crear productos de alta calidad",
        "Desarrollé código bien estructurado, mantenible y testeado minuciosamente para una mejor entrega del producto.",
        "Construí una gran variedad de projectos como un SSO(Single Sign On), Funciones Lambda con API Gateway y la integración de ventana de pago online.",
        
        "Participe en revisiones de código y ayudé a brindar soluciones constructivas a otros desarrolladores.",
      ],
    },
    {
      title: "Desarrollador de Software",
      company_name: "ITC Instituto Tecnológico de Celaya",
      icon: tecno,
      iconBg: "#383E56",
      date: "Jun 2021 - Sep 2022",
      points: [
        "Trabajé con una gran variedad de tecnologías, desarrollé mi primer aplicación e-commerce fullstack con MERN (OnlineStore).",
        "Construí algunos proyectos personales como una Tienda en Linea con soporte para métodos de pago y checkouts de productos.",
        "Participe en algunos concursos y proyectos de software libre como un blog de noticias, un Chatbot escrito en python para ayudar a la gente a llegar al lugar correcto dentro de la institución.",
        "Mejoré mis habilidades blandas como persona, como desarrollador y aprendí a trabajar en equipo y a mejorar mi inteligencia emocional.",
        "Desarrollé varios proyectos mantenibles con el SDK Flutter en conjunto de Firebase(BaaS), soporte para Autenticación y autorización."
      ],
    },
    {
        title: "Mediador de Problemas",
        company_name: "Freelancer",
        icon: workana,
        iconBg: "#E6DEDD",
        date: "Jun 2021 - Sep 2021",
        points: [
            "Mantenimiento a paginas web usando soluciones en Html, Css y Javascript y otras tecnologías similares.",
            "Trabajé en un par de proyectos para resolver problemas especificos de clientes que no buscaban contratación de jornada completa.",
            "Contacté a clientes cara a cara para conocer sus requerimientos, comprender sus ideas y tratar de resolver sus necesidades lo más rápido posible.",
            
        ],
    },
    {
        title: "Desarrollador Web",
        company_name: "APDevs",
        icon: apdevs,
        iconBg: "#383E56",
        date: "Ago 2019 - Mayo 2021",
        points: [
            "Construí algunos sitios web amigables con herramientas como CMS Wordpress, CSS, Html y PHP.",
            "Inventarios de Puntos de venta e instalación.",
            "Implementé diseños responsivos asegurandome que sean compatibles con los diferentes navegadores.",
            "Desarrollé una Wiki para ayudar a los clientes a conocer el PoS, un tipo de asesoría virtual para conocer el punto de venta y como funciona."
            
        ],
    }
  ];
  const testimonials = [
    {
      testimonial:
        `
        Luis es sin duda un excelente ser humano en el cual puedes confiar y tener la seguridad que dará su 100% en cada nuevo reto que se le presente, mentalidad ganadora, el optimismo y su gran liderazgo a hecho que Luis sea un elemento importante en cualquier equipo además busca estar a la vanguardia de las mejores tecnologías y está dispuesto a transmitir ese conocimiento para ayudar a los demás`,
      name: "Andrés García",
      designation: " Software Engineer | Flutter Developer | Vue.js Developer ",
      company: "IBT",
      image: peopleT1,
      link:'https://www.linkedin.com/in/andresgardev/'
    },
    
  ];
  
  const projects = [
    {
      name: "Online Store",
      description:
        "Es una tienda en linea donde podrás encontrar diferentes productos y solamente podrás ser capaz de agregarlos a tu carrito siempre y cuando estés logueado, tiene soporte para hacer el checkout.",
      tags: [
        {
            name: "Nodejs",
            color: "text-green",
        },
        {
            name: "express",
            color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "materialUI",
          color: "pink-text-gradient",
        },
      ],
      image: onlinestore1,
      live:null,
      source_code_link: "https://github.com/luismartinezkyb/onlinestore",
    },
    {
      name: "Single Sign On",
      description:
        "Aplicación que sirve para poder loguear a los usuarios una sola vez y de ahí redirigirlos a sus respectivas entidades o dominios, esto evita que el usuario tenga que loguearse durante cada instancia.",
      tags: [
        {
          name: "laravel",
          color: "text-red",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
        {
            name: "Jquery",
            color: "blue-text-gradient",
          },
      ],
      image: cm2,
      live:null,
      source_code_link: "https://github.com/luismartinezkyb",
    },
    {
      name: "HookBank portfolio",
      description:
        "Pequeña Landing page que muestra información sobre una fintech, puede usarse como plantilla para diferentes proyectos y fue hecha con responsive design.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: hookbank,
      live:'https://luismartinezkyb.github.io/hookbank_portfolio_based/',
      source_code_link: "https://github.com/luismartinezkyb/hookbank_portfolio_based",
    },
  ];




const certifications = [
  {
    name:'AWS Academy Graduate - AWS Academy Cloud Foundations',
    image:academyaws,
    public_url:'https://www.credly.com/badges/690cc7a8-1760-4f7a-a7cc-7428f86ee6bc/public_url',
    description: `Earners of this badge have taken the AWS Academy Cloud Foundations course.`,
    tags: [
      {
          name: "architecture",
          color: "text-green",
      },
      {
          name: "aws",
          color: "pink-text-gradient",
      },
      {
        name: "devops",
        color: "blue-text-gradient",
      },
      {
        name: "cloud",
        color: "green-text-gradient",
      },
      
    ],
  },
  
  {
    name:'JavaScript Algorithms and Data Structures',
    image:freecode2,
    public_url:'https://www.freecodecamp.org/certification/luismartinez/javascript-algorithms-and-data-structures',
    description: `Developer Certification, representing approximately 300 hours of coursework.`,
    tags: [
      {
          name: "javascript",
          color: "text-green",
      },
      {
          name: "algorithms",
          color: "pink-text-gradient",
      },
      {
        name: "data-structures",
        color: "blue-text-gradient",
      },
      {
        name: "ES6+",
        color: "green-text-gradient",
      },
      
    ],
  },
  {
    name:'Back End Development and APIs',
    image:freecode2,
    public_url:'https://www.freecodecamp.org/certification/luismartinez/back-end-development-and-apis',
    description: "Developer Certification, representing approximately 300 hours of coursework.",
    tags: [
      {
          name: "APIs",
          color: "text-green",
      },
      {
          name: "Backend",
          color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      
    ],
  },
  {
    name:'Cisco CyberOps Associate',
    image:cyberops,
    public_url:'https://www.credly.com/badges/d4ba0b6c-8bbf-45df-9705-7ee00c419759/public_url',
    description: `Cisco verifies the earner of this badge successfully completed the CyberOps Associate course. The holder of this student-level credential has a broad understanding of Security Operations. They developed problem-solving skills to detect and analyze intrusions and monitor the network by completing up to 30 hours of 52 hands-on labs using virtual machines (Security Onion - ELK) and/or Cisco Packet Tracer.`,
    tags: [
      {
          name: "cisco",
          color: "text-green",
      },
      {
          name: "devops",
          color: "pink-text-gradient",
      },
      {
        name: "network",
        color: "blue-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "green-text-gradient",
      },
      
    ],
  },
  {
    name:'Introduction to IoT',
    image:iiot,
    public_url:'https://www.credly.com/badges/d535b624-b630-44eb-881a-31a8c4f32a56/public_url',
    description: "Cisco verifies the earner of this badge successfully completed the Introduction to Internet of Things course. The holder of this student-level credential has introductory knowledge of IoT and has an understanding how it enables the Digital Transformation along with emerging technologies such as data analytics, AI/ML and the increased attention on cybersecurity. They understand the importance of Intent Based Networking to be able to connect and secure tens of billions of new devices with ease.",
    tags: [
      {
          name: "iot",
          color: "text-green",
      },
      {
          name: "networking",
          color: "pink-text-gradient",
      },
      {
        name: "raspberry pi",
        color: "blue-text-gradient",
      },
      
      
    ],
  },
  {
    name:'CCNA: Introduction to Networks',
    image:ccna,
    public_url:'https://www.credly.com/badges/b12ab365-b616-489a-bcd9-5b7028aa2780/public_url',
    description: "Cisco verifies the earner of this badge successfully completed the Introduction to Networks course and achieved this student level credential. Earner has knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources. Earner participated in up to 54 labs and accumulated up to 14 hours of hands-on labs using Cisco hardware or Packet Tracer tool",
    tags: [
      {
          name: "ethernet",
          color: "text-green",
      },
      {
          name: "network fundamentals",
          color: "pink-text-gradient",
      },
      {
        name: "switching",
        color: "blue-text-gradient",
      },
      
      
    ],
  },
  {
    name:'DevNet Associate',
    image:devnet,
    public_url:'https://www.credly.com/badges/9cbf55ef-745c-432e-aafb-7ab5c1a3c65b/public_url',
    description: "Cisco verifies the earner of this badge successfully completed the DevNet Associate course, completed 25+ hands-on labs using a virtual lab environment and achieved this student level credential. The holder of this credential has a broad understanding in the areas of Python coding, using Linux, Cisco DevNet, Software Development and Design, Understanding and Using APIs, Network Fundamentals, Application Deployment and Security, Infrastructure and Automation and Cisco Platforms and Development.",
    tags: [
      {
          name: "JSON",
          color: "text-green",
      },
      {
          name: "PYTHON",
          color: "pink-text-gradient",
      },
      {
        name: "CLOUD",
        color: "blue-text-gradient",
      },
      {
        name: "devops",
        color: "green-text-gradient",
      },
      
    ],
  },
  
  {
    name:'Scrum Foundation Professional Certificate - SFPC™',
    image:scrum,
    public_url:'https://www.credly.com/badges/d2da10f9-5960-4145-9f41-d4bcc1e501c9/public_url',
    description: "Scrum Foundation Professional Certificate holders have developed the entry-level skills in Scrum that endorses their fundamental knowledge in this framework. They have demonstrated an understanding of the empirical Scrum pillars of transparency, inspection, and adaptation. Their primary focus is on the work of the Sprint to make the best possible progress toward these goals.",
    tags: [
      {
          name: "agile",
          color: "text-green",
      },
      {
          name: "scrum",
          color: "pink-text-gradient",
      },
      {
        name: "agile practices",
        color: "blue-text-gradient",
      },
      {
        name: "teams",
        color: "green-text-gradient",
      },
      
    ],
  },
  {
    name:'Lifelong Learning',
    image:lifelong,
    public_url:'https://www.credly.com/badges/2448e382-69f6-4a94-802e-1474486a3e4e/public_url',
    description: "This badge has been issued to the candidates who have demonstrated their unwavering commitment to lifelong learning, which is vitally important in today's ever-changing and expanding digital world. It also identifies the qualities of an open, disciplined, and constantly evolving mind, capable of using and contributing knowledge to develop a more equal and better world.",
    tags: [
      {
          name: "lifelong learning",
          color: "text-green",
      },
      {
          name: "carrer development",
          color: "pink-text-gradient",
      },
      {
        name: "certiprof",
        color: "blue-text-gradient",
      },
      
    ],
  },
  
];

const heroText=[
'Fullstack Developer altamente dedicado y calificado', 
'con más de 3+ años de experiencia desarrollando y construyendo',
'soluciones Back-end y Front-end de alta calidad',
'involucrado en tecnologías AWS.'

]
const contactHeaders= [
  'Activa la magia!',
  'Volver a lite'
]  

const headers = {
    me:{
        text:[
            'Hola, Soy',
            "Luis"
        ]
    },
    about:{
        title:'Sobre Mi', 
        subtitle: "Un poco de mi",
        text:[
            "Soy un desarrollador fullstack eficiente en ambos desarrollos, backend y fronted, con una sólida comprensión de los principios del desarrollo de software, estructura de datos y algoritmos.",
            `Sólida habilidad para resolver problemas y generar una entrega de código de alta calida en tiempo. Experiencia demostrada en la creación de soluciones robustas, escalables y fáciles de usar. Siempre aplicando tecnologías, frameworks y herramientas modernas en el backend y en frontend. Comprometido a seguir aprendiendo, mejorar mis habilidades de programación y a mantenerse al día con las nuevas tecnologías.`,
            `Soy de aprendizaje rápido y me gusta colaborar con clientes para crear software eficiente y escalable que pueden resolver problemas en el mundo real.`,
            "Me acabo de graduar de la carrera de Ingeniería en Sistemas Computacionales del Tecnológico de México en Celaya soy un #AIEnthusiast",
            
        ]
    },
    overview:{
        title:'Introducción', 
        subtitle: 'Más sobre mi',
        text:[
            "Soy un desarrollador de software con experiencia en lenguajes de programación como Javascript, Typescript, Php, Dart y habilidades en frameworks como Reactjs, Nodejs, Laravel, NextJs, actualmente me encuentro aprendiendo SvelteJs y flask. He trabajado con varios stacks de tecnología como: MERN, PERN, FULL LARAVEL, FULL NEXTJS, LARAVEL+REACT.",
            "Competente en ambos entornos, backend y frontend, con una sólida comprensión de arquitectura web y patrones de diseño. Dedicado a escribir código limpio, mantenible que se adhiere a las mejores practicas de la industria.",
            
            `Experiencia participando en todas las etapas de desarrollo o ciclo de vida, desde los requerimientos y diseños, al desarrollo, testeo y despliegue en producción. 
            Tengo habilidades en metodología Agile y usando herramientas como Jira, Trello, Youtrack y Slack para mejorar la Ingeniería de Software. Me considero como un solucionador de problemas proactivo que siempre busca mejorar sus habilidades personales y profesionales.`,            
        ]
    },
    experience:{
        title:'Experiencia Laboral', 
        subtitle: 'Lo que he hecho en la industria',
        text:[
        ]
    },
    project:{
        title:'Proyectos', 
        subtitle: 'Algo de mi trabajo',
        text:[
            'Los siguientes proyectos muestran mis habilidades y experiencia dentro de la industria y el mundo de la tecnología, cada proyecto contiene una breve explicación de su existencia y contiene un enlace directo al repositorio en el que se encuentra, así como a algún live demo. Esto refleja mis capacidades de resolver algunos problemas complejos, trabajar con diferentes tecnologías y administrar un proyecto con un versionador de proyectos como lo es Git.'
            
        ]
    },
    certification:{
      title:'Mis Certificaciones', 
      subtitle: 'E insignias',
      subtext:'Codewars es una comunidad educativa de programación de sistemas. En la plataforma, los desarrolladores de software participan en desafíos de programación conocidos como kata. Estos ejercicios entrenan un rango de habilidades en una variedad de lenguajes de programación y se completan dentro de un ambiente de desarrollo integrado en línea, en el que los usuarios tienen la posibilidad de ganar rangos y honor.',
      subtext2:' Echa un vistazo a mi perfil y a los problemas que he resuelto!',
      text:[
        "Estas son unas de mis cerficaciones que he obtenido en sitios online, desde AWS cloud foundations, hasta insignias de Codewars, por favor, visita mi perfil en cada uno de estos sitios para conocer más sobre mi trabajo."
        
      ]
    },
    testimonial:{
      title:'Recomendaciones', 
      subtitle: 'Lo que otros dicen de mi',
      text:[
        
      ]
    },
    contact:{
      title:'Contacto', 
      subtitle: 'Mándame un mensaje',
      text:[
        "Tu Nombre",
        "Tu Email",
        "Tu Mensaje"
      ],
      text2:[
        "Ingresa tu Nombre",
        "Ingresa tu Email",
        "Que quieres decirme?"
      ]
    },
    footer:{
      title:'Footer', 
      subtitle: 'Please',
      text:[
        'Este sitio web está hecho con ReactJs + Vite + TailwindCss y no te rastrea',
        '2023© Luis Martinez. Todos los derechos reservados.'
      ],

    },
  }
  const contact2={
    title: "Contáctame",
    links: [
        {
            name: "luismartinezjpg@gmail.com",
            icon: gmail,
            link: "mailto:luismartinezjpg@gmail.com",
        },
        
        {
            name: "Pídemelo por correo",
            icon:phone,
            link: "#contact",
        },
        {
            name: "LinkedIn",
            icon:linkedin,
            link: "https://www.linkedin.com/in/luis-martinez-kyb/"
        },
        {
          name: "Ve mi Currículum",
          icon:logo,
          link: resumeEs,
        },
        
        
        
    ],
}

const messageSuccess='Se ha enviado el correo correctamente!'
const messageError='No se pudo enviar el mensaje, intente de nuevo.'
export {messageSuccess, messageError, services, technologies, experiences, testimonials, projects, heroText, headers, contactHeaders, badges2, certifications, contact2};
  