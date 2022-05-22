const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jovin",
  middleName: "",
  lastName: "Angelico",
  message: "Love to update my version of myself. Strive to become better every day by learning new things.",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jovinangelico/",
    },
    {
      image: "fa-github",
      url: "https://github.com/JovinIsMe",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/djangelico/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/JovinAngelico",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profilepic.png"),
  imageSize: 375,
  message:
    "I'm currently working as Software Engineer at Vidio, largest OTT platform in Indonesia backed by PT Elang Mahkota Teknologi Tbk (Emtek).",
  resume: "https://docs.google.com/document/d/1BdkQbQbBDSosRE6n6SaqxcRid9c8A37Mx39UzTJ-tuo/edit?usp=sharing",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jovinisme",
  reposLength: 4,
  specificRepos: [],
};

const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profilepic.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profilepic.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Golang", value: 90 },
    { name: "Ruby on Rails", value: 80 },
    { name: "Java", value: 70 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 60 },
    { name: "SQL", value: 75 },
    { name: "Linux", value: 75 },
    { name: "Kubernetes", value: 65 },
    { name: "Containerization", value: 65 },
    { name: "Jenkins CI/CD", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 80 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Leadership", value: 80 },
    { name: "Management", value: 80 },
    { name: "Creativity", value: 70 },
  ],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time/part-time Software Engineering opportunities, especially remote working from abroad! Feel free to contact me on LinkedIn or email me",
  email: "jovin.angelico[at]live.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/vidio.png'),
      date: 'Jan 2019 – Present',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/bbm.png'),
      date: 'Oct 2018 – Feb 2019',
    },
  ]
}

const certificates = {
  show: true,
  heading: "Licenses & Certificates",
  data: [
    {
      title: 'Concurrency in Go (Golang)Design Microservices Architecture with Patterns & Principles',
      issuer: require('../assets/udemy.jpeg'),
      date: 'Apr 2021',
      link: 'https://www.udemy.com/certificate/UC-38159072-0fcc-4102-865d-d7f328812092/',
    },
    {
      title: 'Software Architecture & Technology of Large-Scale Systems',
      issuer: require('../assets/udemy.jpeg'),
      date: 'Mar 2022',
      link: 'https://www.udemy.com/certificate/UC-d160e834-5c59-433f-b2b6-9e3a30dac9ea/',
    },
    {
      title: 'Mastering Multithreading Programming with Go (Golang)',
      issuer: require('../assets/udemy.jpeg'),
      date: 'Nov 2021',
      link: 'https://www.udemy.com/certificate/UC-b441139d-ffd2-446d-8a0b-c21df7a999b4/',
    },
    {
      title: 'gRPC [Golang] Master Class: Build Modern API & Microservices',
      issuer: require('../assets/udemy.jpeg'),
      date: 'Nov 2021',
      link: 'https://www.udemy.com/certificate/UC-75421263-692e-4ab3-af9b-8aec1c30dc7e/',
    },
    {
      title: 'Concurrency in Go (Golang)',
      issuer: require('../assets/udemy.jpeg'),
      date: 'Sep 2021',
      link: 'https://www.udemy.com/certificate/UC-a3f4214c-2e3c-471b-bb65-cc6e043a2b11/',
    },
    {
      title: 'Qwiklabs 17 GCP Courses (JuaraGCP Season 5)',
      issuer: require('../assets/qwiklabs.jpeg'),
      date: 'Sep 2021',
      link: 'https://www.cloudskillsboost.google/public_profiles/fc59e957-4531-4770-b39a-5a656088aa40',
    },
    {
      title: 'Web Development w/ Google’s Go (Golang) Programming Language',
      issuer: require('../assets/udemy.jpeg'),
      date: 'Jun 2021',
      link: 'https://www.udemy.com/certificate/UC-4485b230-a6e0-43d8-be5b-c5fffacb5ca4/',
    },
    {
      title: 'Design Pattern in Go',
      issuer: require('../assets/udemy.jpeg'),
      date: 'Jul 2021',
      link: 'https://www.udemy.com/certificate/UC-2ffbb678-5c6d-4759-8d8b-f02a2427163e/',
    },
    {
      title: 'The Ultimate Dark Web, Anonymity, Privacy & Security Course',
      issuer: require('../assets/udemy.jpeg'),
      date: 'Jun 2021',
      link: 'https://www.udemy.com/certificate/UC-42e033f1-c3f0-457f-a753-5786661332e8/',
    },
    {
      title: 'Qwiklabs 11 GCP Courses (JuaraGCP CrashCourse)',
      issuer: require('../assets/qwiklabs.jpeg'),
      date: 'Mar 2021',
      link: 'https://www.cloudskillsboost.google/public_profiles/04187eea-991f-422c-a751-b2a366fe8fe5',
    },
    {
      title: 'Qwiklabs 32 GCP Courses (JuaraGCP Season 4)',
      issuer: require('../assets/qwiklabs.jpeg'),
      date: 'Sep 2020',
      link: 'https://www.cloudskillsboost.google/public_profiles/b3443ec2-218c-4994-8e1d-62b9c98843a6',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, certificates };
