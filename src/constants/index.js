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
    source_code_link: "https://github.com/",
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
];

export { services, technologies, projects };
