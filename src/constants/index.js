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
  aiimage,
  tripguide,
  threejs,
  flutter,
  dart,
  cpp,
  githubfinder,
  collector,
  carparking,
  todo,
  codeeditor,
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
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Open Source",
    icon: creator,
  },
];

const technologies = [
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
    name: "javascript",
    icon: javascript,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "dart",
    icon: dart,
  },
  {
    name: "cpp",
    icon: cpp,
  },
];

const projects = [
  {
    name: "Collector Videos",
    description:
      "Web-based platform that allows users make collection of youtube videos by using video links in different buckets",
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
    image: collector,
    source_code_link: "https://github.com/MaYaNkKashyap681/Collector-Video-App",
    videolink:
      "https://drive.google.com/file/d/13hn8N9WN7eGRghsno-CA3Apo8ShUhZXH/view?usp=share_link",
  },
  {
    name: "Ai Image Generator",
    description:
      "Ai Image generator using Dalle Ai, in which you can generate image by text and share with the community.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Dalle AI",
        color: "pink-text-gradient",
      },
    ],
    image: aiimage,
    source_code_link:
      "https://github.com/MaYaNkKashyap681/Ai-Image-Generator-Project",
    videolink: "",
  },
  {
    name: "Github Finder",
    description:
      "A web App to find github users profile by their name and to view their profile in detail.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "github Api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: githubfinder,
    source_code_link:
      "https://github.com/MaYaNkKashyap681/Github-Profile-Finder",
    videolink:
      "https://drive.google.com/file/d/1vc1tjWwx2h78a4uaSw2TCNZM8ylZxJtl/view?usp=share_link",
  },
  {
    name: "Image Based Car Parking",
    description:
      "A Web App where user can book the parking lot from image, and check availability",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: carparking,
    source_code_link:
      "https://github.com/MaYaNkKashyap681/ImageCarParkingSystem",
    videolink:
      "https://drive.google.com/file/d/1LQ9y_WqccUr6oeahG_6m4I8BYzqswjwV/view?usp=share_link",
  },
  {
    name: "3D Todo Application",
    description:
      "A Todo Application using three.js, you can perform CRUD opertations and store your daily tasks",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link:
      "https://github.com/MaYaNkKashyap681/Mini-Three.js-Application",
    videolink:
      "https://drive.google.com/file/d/1WY5wNezaAIeqZl3bXLSCf1WlNyaxLj0m/view?usp=sharing",
  },
  {
    name: "Codecollab",
    description:
      "A Realtime code editor build using Socket.io, with multiple themes and languages options",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: codeeditor,
    source_code_link:
      "git@github.com:MaYaNkKashyap681/CodeCollab-Realtime-Editor.git",
    videolink:
      "",
  },
];


/*  */
export { services, technologies, projects };
