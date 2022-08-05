import toped from "../companyLogo/tokopedia.png";
import tauria from "../companyLogo/tauria.png";
import okta from "../companyLogo/okta.png";
import fluent from "../projectImage/fluent.png";
import goosenet from "../projectImage/goosenet.png";
import realtimeq from "../projectImage/realtimeq.png";
import flappyShip from "../projectImage/FlappyShip.png";
import openapp from "../projectImage/openapp.png";
import biquadris from "../projectImage/biquadris.png";
import hansahalim from "../img/hansa_halim.jpg";

export const landingInfo = {
  nameTitle: "Hansa Halim",
  subtitles: ["University of Waterloo Math '22", "Incoming New Grad Software Engineer at Okta"],
  image: hansahalim,
  linkedIn: "https://linkedin.com/in/hansahalim",
  github: "https://github.com/hansahalim",
  resume: "resume.pdf", // This redirects to https://currentdomain/resume
};

export const workExperience = [
  {
    companyLogo: okta,
    companyName: "Okta",
    companyWebsite: "https://www.okta.com",
    location: "Toronto, Canada",
    jobTitle: "Software Engineer Intern",
    jobDate: "Apr. 2021 - Aug. 2021",
    description:
      "Okta is the World's #1 Identity Platform. Enabling organizations to securely connect the right people to the right technologies at the right time. I worked in their Feature Framework team creating a phased feature rollout system.",
    techStack: [
      "Java",
      "Spring",
      "JavaScript",
      "Backbone.js",
      "MySQL",
    ],
  },
  {
    companyLogo: tauria,
    companyName: "Tauria",
    companyWebsite: "https://www.tauria.com",
    location: "Waterloo, Canada",
    jobTitle: "Junior Software Developer",
    jobDate: "Apr. 2020 - Aug. 2020",
    description:
      "Tauria is a fully encrypted business platform providing secure messaging, video conferencing and more. I worked closely with their marketing and analytics team to improve user experience, onboarding, and customer retentions.",
    techStack: [
      "TypeScript",
      "Node",
      "Express",
      "Python",
      "JavaScript",
      "React",
      "Apollo",
      "GraphQL",
      "React Native",
      "D3",
      "PostgreSQL",
      "SQLite",
      "Docker",
      "REST API",
    ],
  },
  {
    companyLogo: toped,
    companyName: "Tokopedia",
    companyWebsite: "https://www.tokopedia.com",
    location: "Jakarta, Indonesia",
    jobTitle: "Software Engineer Intern",
    jobDate: "May 2019 - Aug. 2019",
    description: `Tokopedia is Indonesia's largest e-commerce startup valued at 7 billion US dollar backed by Alibaba Group. I worked in their Fintech team working on lending platform, insurance and credit card.`,
    techStack: [
      "Golang",
      "REST API",
      "gRPC",
      "MySQL",
      "PostgreSQL",
      "JavaScript",
      "jQuery",
      "Jenkins",
    ],
  },
];

export const myProjects = [
  {
    projectImage: fluent,
    projectName: "Fluent",
    projectWebsite: "https://fluent.id/",
    githubLink: "https://github.com/fluent-git",
    projectDate: "Jun. 2019 - Oct. 2019",
    description:
      "Anonymous platform connecting people to practice English via peer to peer voice calls.",
    techStack: [
      "React",
      "JavaScript",
      "NextJS",
      "PeerJS",
      "Bulma",
      "REST",
      "Python",
      "Django",
      "SQLite",
      "WebRTC",
    ],
  },
  {
    projectImage: goosenet,
    projectName: "GooseNet",
    projectWebsite:
      "https://devpost.com/software/goosenet-an-anonymous-community-for-your-apartment",
    githubLink: "https://github.com/hack-the-loo-2019",
    projectDate: "September 2019",
    description:
      "Anonymous social network for your apartment to talk with each other, ask for help, and borrow stuffs. Submitted to Hack The North 2019",
    techStack: [
      "React",
      "REST API",
      "JavaScript",
      "NextJS",
      "Node",
      "Express",
      "Firebase",
    ],
  },
  {
    projectImage: realtimeq,
    projectName: "Real Time Mobile Queuing System",
    projectWebsite: "https://devpost.com/software/queuesystem",
    githubLink: "https://github.com/kiranmanoj2000/QueueSystem",
    projectDate: "January 2019",
    description:
      "Won Best Internet of Things award at StarterHacks 2019, a virtual queuing system where people can line up for a service without having to be physically present.",
    techStack: ["Java", "Firebase", "Dragonboard", "Android", "ZXing"],
  },
  {
    projectImage: openapp,
    projectName: "OpenApp",
    projectWebsite: "https://devpost.com/software/openapp",
    githubLink: "https://github.com/HansaHalim/QRentry",
    projectDate: "February 2020",
    description:
      "Unified access system to replace all physical cards into a single app. Submitted to MakeHarvard 2020.",
    techStack: [
      "Golang",
      "REST API",
      "MySQL",
      "Google Cloud",
      "TypeScript",
      "React",
    ],
  },
  {
    projectImage: biquadris,
    projectName: "Multiplayer Tetris",
    projectWebsite: "https://github.com/HansaHalim/Biquadris-Demo",
    githubLink: "https://github.com/HansaHalim/Biquadris-Demo",
    projectDate: "November 2018",
    description:
      "Imitation of Tetris with multiplayer functionality and special actions.",
    techStack: ["C++"],
  },
  {
    projectImage: flappyShip,
    projectName: "Flappy Ship",
    projectWebsite: "/FlappyShipv1.4/game.html",
    githubLink: "https://github.com/HansaHalim/Flappy-Ship",
    projectDate: "June 2017",
    description: "Similar to Flappy Bird but using a Space Ship!",
    techStack: ["ActionScript", "Adobe Flash"],
  },
];

export const contactInfo = {
  phoneNumber: "add phone number here",
  email: "add email here",
  formSpreeLink: "add form spree info here",
};
