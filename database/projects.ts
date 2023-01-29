import { Project, SocialMedia, SoftSkill, Technology } from "../interfaces";

export enum SOFT_SKILLS_URL {
  ADAPT = "/icons/adapt-icon.svg",
  APPROACH = "/icons/approach-icon.svg",
  COMMUNICATION = "/icons/communication-icon.svg",
  PROBLEM_SOLVING = "/icons/problem-icon.svg",
  TEAMWORK = "/icons/teamwork-icon.svg",
  TIME_MANAG = "/icons/clock-icon.svg",
}

export enum SOCIAL_URL {
  FACEBOOK = "/icons/facebook-icon.svg",
  GITHUB = "/icons/github-icon.svg",
  GMAIL = "/icons/gmail-icon.svg",
  STACKOVERFLOW = "/icons/stackoverflow-icon.svg",
}

export enum TECH_PICURL {
  ANGULAR = "/icons/angular-icon.svg",
  CSS = "/icons/css-icon.svg",
  CYPRESS = "/icons/cypress-io-icon.svg",
  FIREBASE = "/icons/firebase-icon.svg",
  HTML = "/icons/html-icon.svg",
  JAVASCRIPT = "/icons/javascript-icon.svg",
  JEST = "/icons/jest-js-icon.svg",
  JWT = "/icons/jwt-icon.png",
  MATERIALUI = "/icons/material-ui-icon.svg",
  MONGODB = "/icons/mongodb-icon.svg",
  MYSQL = "/icons/mysql-icon.svg",
  NEXTAUTH = "/icons/nextauth-icon.svg",
  NEXTJS = "/icons/nextjs-icon.svg",
  NODEJS = "/icons/node-js-icon.svg",
  PAYPAL = "/icons/paypal-icon.svg",
  REACTJS = "/icons/react-js-icon.svg",
  REDUX = "/icons/redux-icon.svg",
  SASS = "/icons/sass-icon.svg",
  SOCKETIO = "/icons/socket-io-icon.svg",
  SUPERTEST = "/icons/test-icon.svg",
  STYLEDCOMP = "/icons/styled-icon.svg",
  TAILWIND = "/icons/tailwind-css-icon.svg",
  TYPESCRIPT = "/icons/typescript-icon.svg",
}

export const softSkills: SoftSkill[] = [
  { name: "Adaptability", image: SOFT_SKILLS_URL.ADAPT },
  { name: "Approachability", image: SOFT_SKILLS_URL.APPROACH },
  { name: "Communication", image: SOFT_SKILLS_URL.COMMUNICATION },
  { name: "Problem solving", image: SOFT_SKILLS_URL.PROBLEM_SOLVING },
  { name: "Teamwork", image: SOFT_SKILLS_URL.TEAMWORK },
  { name: "Time management", image: SOFT_SKILLS_URL.TIME_MANAG },
];

export const technologies: Technology[] = [
  { name: "Angular", image: TECH_PICURL.ANGULAR },
  { name: "CSS", image: TECH_PICURL.CSS },
  { name: "Cypress", image: TECH_PICURL.CYPRESS },
  { name: "HTML", image: TECH_PICURL.HTML },
  { name: "Javascript", image: TECH_PICURL.JAVASCRIPT },
  { name: "Jest", image: TECH_PICURL.JEST },
  { name: "JWT", image: TECH_PICURL.JWT },
  { name: "Material UI", image: TECH_PICURL.MATERIALUI },
  { name: "MongoDB", image: TECH_PICURL.MONGODB },
  { name: "Mysql", image: TECH_PICURL.MYSQL },
  { name: "Next.js", image: TECH_PICURL.NEXTJS },
  { name: "NextAuth", image: TECH_PICURL.NEXTAUTH },
  { name: "Node.js", image: TECH_PICURL.NODEJS },
  { name: "React.js", image: TECH_PICURL.REACTJS },
  { name: "Redux", image: TECH_PICURL.REDUX },
  { name: "Sass", image: TECH_PICURL.SASS },
  { name: "Socket.io", image: TECH_PICURL.SOCKETIO },
  { name: "Styled components", image: TECH_PICURL.STYLEDCOMP },
  { name: "Supertest", image: TECH_PICURL.SUPERTEST },
  { name: "Tailwind.css", image: TECH_PICURL.TAILWIND },
  { name: "Typescript", image: TECH_PICURL.TYPESCRIPT },
];

export const socialMedia: SocialMedia[] = [
  //{ media: "Ángel Hernández", image: SOCIAL_URL.FACEBOOK },
  { media: "angel-hache-de", image: SOCIAL_URL.GITHUB, link: "https://github.com/angel-hache-de" },
  { media: "angelhachede9678@gmail.com", image: SOCIAL_URL.GMAIL },
  { media: "Angel Hdz", image: SOCIAL_URL.STACKOVERFLOW, link: "https://stackoverflow.com/users/17882674/angel-hdz" },
];

export const projects: Project[] = [
  {
    name: "KOBD",
    description: "KOBD is a startup whose mission is to provide to the users historical information about boxing. I worked as frontend dev.",
    images: [
      "kobd1.png",
      "kobd2.png",
      "kobd3.png",
      "kobd4.png",
      "kobd5.png",
      "kobd6.png",
      "kobd7.png",
      "kobd8.png",
    ],
    techs: [
      TECH_PICURL.ANGULAR,
      TECH_PICURL.TYPESCRIPT,
      TECH_PICURL.TAILWIND,
    ],
  },
  {
    name: "Amazon clone",
    description: "Amazon clone with shopping cart and orders screens",
    images: [
      "https://github.com/angel-hache-de/Basic-Amazon-Clone/blob/main/screenshots/s1.png?raw=true",
      "https://github.com/angel-hache-de/Basic-Amazon-Clone/blob/main/screenshots/s2.png?raw=true",
      "https://github.com/angel-hache-de/Basic-Amazon-Clone/blob/main/screenshots/s3.png?raw=true",
      "https://github.com/angel-hache-de/Basic-Amazon-Clone/blob/main/screenshots/s4.png?raw=true",
      "https://github.com/angel-hache-de/Basic-Amazon-Clone/blob/main/screenshots/s5.png?raw=true",
    ],
    linkToSite: "https://amazon-clone-tawny-theta.vercel.app/",
    techs: [
      TECH_PICURL.NEXTJS,
      TECH_PICURL.JAVASCRIPT,
      TECH_PICURL.FIREBASE,
      TECH_PICURL.REACTJS,
      TECH_PICURL.REDUX,
      TECH_PICURL.TAILWIND,
    ],
  },
  {
    name: "Pokedex",
    description: "Pokedex app made with Next.js",
    images: [
      "https://github.com/angel-hache-de/Pokemons-App/blob/main/screenshoots/s1.png?raw=true",
      "https://github.com/angel-hache-de/Pokemons-App/blob/main/screenshoots/s2.png?raw=true",
      "https://github.com/angel-hache-de/Pokemons-App/blob/main/screenshoots/s3.png?raw=true",
      "https://github.com/angel-hache-de/Pokemons-App/blob/main/screenshoots/s4.png?raw=true",
    ],
    linkToSite: "https://pokemons-app-gamma.vercel.app/",
    techs: [
      TECH_PICURL.TYPESCRIPT,
      TECH_PICURL.MATERIALUI,
      TECH_PICURL.REACTJS,
      TECH_PICURL.NEXTJS,
    ],
  },
  //{
  //  name: "Open Jira",
  //  description: "Open Jira project made with Next.js and MongoDB",
  //  images: [],
  //  techs: [
  //    {
  //      name: "Next.js",
  //      pic: "",
  //    },
  //    {
  //      name: "MongoDB",
  //      pic: "",
  //    },
  //    {
  //      name: "Typescript",
  //      pic: "",
  //    },
  //  ],
  //},
  {
    name: "Teslo Shop",
    description:
      "Teslo Shop e-commerce app with cookies management, middlewares, payments and admin dashboard",
    images: [
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s1.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s2.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s3.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s4.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s5.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s6.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s7.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s8.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s9.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s10.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s11.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s12.png?raw=true",
      "https://github.com/angel-hache-de/teslo-shop/blob/main/screenshots/s13.png?raw=true",
    ],
    linkToSite: "https://teslo-shop-angel.herokuapp.com/",
    techs: [
      TECH_PICURL.NEXTJS,
      TECH_PICURL.MONGODB,
      TECH_PICURL.NEXTAUTH,
      TECH_PICURL.REACTJS,
      TECH_PICURL.PAYPAL,
      TECH_PICURL.TYPESCRIPT,
      TECH_PICURL.MATERIALUI,
    ],
  },
  {
    name: "Instagram clone",
    description:
      "Instagram clone where you can upload, like and comment posts. Posts are updated in real-time",
    images: [
      "https://github.com/angel-hache-de/basic-insta-clone/blob/main/screenshots/Screenshot%20from%202022-08-18%2020-28-39.png?raw=true",
      "https://github.com/angel-hache-de/basic-insta-clone/blob/main/screenshots/Screenshot%20from%202022-08-18%2020-29-12.png?raw=true",
      "https://github.com/angel-hache-de/basic-insta-clone/blob/main/screenshots/Screenshot%20from%202022-08-18%2020-29-22.png?raw=true",
      "https://github.com/angel-hache-de/basic-insta-clone/blob/main/screenshots/Screenshot%20from%202022-08-18%2020-29-41.png?raw=true",
    ],
    linkToSite: "https://basic-insta-clone.vercel.app/",
    techs: [
      TECH_PICURL.NEXTJS,
      TECH_PICURL.FIREBASE,
      TECH_PICURL.NEXTAUTH,
      TECH_PICURL.TAILWIND,
      TECH_PICURL.JAVASCRIPT,
      TECH_PICURL.REACTJS,
    ],
  },
  {
    name: "Home page of cars rentail bussiness",
    description: "Simple home page made with react and styled components",
    images: [
      "https://github.com/angel-hache-de/Home-Page-Cars/blob/main/screenshoots/s1.png?raw=true",
      "https://github.com/angel-hache-de/Home-Page-Cars/blob/main/screenshoots/s2.png?raw=true",
      "https://github.com/angel-hache-de/Home-Page-Cars/blob/main/screenshoots/s3.png?raw=true",
      "https://github.com/angel-hache-de/Home-Page-Cars/blob/main/screenshoots/s4.png?raw=true",
      "https://github.com/angel-hache-de/Home-Page-Cars/blob/main/screenshoots/s5.png?raw=true",
    ],
    linkToSite: "https://cars-rental-angel.herokuapp.com/",
    techs: [
      TECH_PICURL.REACTJS,
      TECH_PICURL.STYLEDCOMP,
      TECH_PICURL.TAILWIND,
      TECH_PICURL.TYPESCRIPT,
    ],
  },
  {
    name: "MFlix",
    description:
      "Movies app made for the course MongoDB for javascript developers on mongodb university. Search and filter movies using the aggregation framework.",
    images: [
      "https://github.com/angel-hache-de/mflix/blob/main/screenshoots/s1.png?raw=true",
      "https://github.com/angel-hache-de/mflix/blob/main/screenshoots/s2.png?raw=true",
      "https://github.com/angel-hache-de/mflix/blob/main/screenshoots/s3.png?raw=true",
      "https://github.com/angel-hache-de/mflix/blob/main/screenshoots/s4.png?raw=true",
      "https://github.com/angel-hache-de/mflix/blob/main/screenshoots/s5.png?raw=true",
    ],
    linkToSite: "https://mflix-angel.herokuapp.com/",
    techs: [
      TECH_PICURL.REACTJS,
      TECH_PICURL.JAVASCRIPT,
      TECH_PICURL.NODEJS,
      TECH_PICURL.MATERIALUI,
      TECH_PICURL.MONGODB,
    ],
  },
  {
    name: "Shortest Path Finder",
    description:
      "Deep breadth search algorithm visualizer. Find the shortest path between 2 nodes, you can add walks and generate random boards. Simple clone of Pathfinding visualizer. Responsive design in process. :)",
    images: [
      "https://raw.githubusercontent.com/angel-hache-de/Pathfinder-Visualizer/main/screenshots/c1.png",
      "https://raw.githubusercontent.com/angel-hache-de/Pathfinder-Visualizer/main/screenshots/c2.png",
      "https://raw.githubusercontent.com/angel-hache-de/Pathfinder-Visualizer/main/screenshots/c3.png",
      "https://raw.githubusercontent.com/angel-hache-de/Pathfinder-Visualizer/main/screenshots/c4.png",
      "https://raw.githubusercontent.com/angel-hache-de/Pathfinder-Visualizer/main/screenshots/c5.png",
    ],
    linkToSite: "https://pathfinder-visualizer-angel.herokuapp.com/",
    techs: [
      TECH_PICURL.REACTJS,
      TECH_PICURL.MATERIALUI,
      TECH_PICURL.JAVASCRIPT,
    ],
  },
  {
    name: "Messenger clone",
    description:
      "Chat app. You can send/receive messages with text, emojis and images. The message status (unseen/seen) is updated in real time. You can click on images to amplify them. Right now the responsive desing is in progress. :)",
    images: [
      "https://raw.githubusercontent.com/angel-hache-de/messenger-app/main/screenshots/c1.png",
      "https://raw.githubusercontent.com/angel-hache-de/messenger-app/main/screenshots/c2.png",
      "https://raw.githubusercontent.com/angel-hache-de/messenger-app/main/screenshots/c3.png",
      "https://raw.githubusercontent.com/angel-hache-de/messenger-app/main/screenshots/c4.png",
      "https://raw.githubusercontent.com/angel-hache-de/messenger-app/main/screenshots/c5.png",
    ],
    linkToSite: "https://messenger-angel.herokuapp.com/messenger/login",
    techs: [
      TECH_PICURL.CYPRESS,
      TECH_PICURL.JEST,
      TECH_PICURL.JWT,
      TECH_PICURL.MONGODB,
      TECH_PICURL.NODEJS,
      TECH_PICURL.REACTJS,
      TECH_PICURL.REDUX,
      TECH_PICURL.SASS,
      TECH_PICURL.SOCKETIO,
      TECH_PICURL.SUPERTEST,
      TECH_PICURL.TYPESCRIPT,
    ],
  },
];
