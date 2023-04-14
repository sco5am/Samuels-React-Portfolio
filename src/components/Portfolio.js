import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Sound Shelf",
    languages: "html, css, js, handlebars",
    packages: "express, dotenv, inquirer, sequelize, mysql, rater-js, bcrypt",
    image: "/img/pocket-traders.png",
    description:
      "This app allows you to rate your favorite songs, and share them with your friends",
    repo: "https://github.com/sco5am/music-rating-app",
    live: "/",
  },
  {
    id: 1,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/techtopics.png",
    description:
      "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/sco5am/Server-Side-API-Weather-Dashboard",
    live: "https://sco5am.github.io/Server-Side-API-Weather-Dashboard/",
  },
  {
    id: 2,
    title: "The Comic-Book",
    languages: "html, css, js",
    packages: "none",
    image: "/img/quizam.png",
    description:
      "The first team project i worked on, The Comic-Book allows users to share their favorite comic book characters, take daily quizes, and intigrates the Marvel API as well as the OMDB API.",
    repo: "https://github.com/sco5am/team5-project1",
    live: "https://sco5am.github.io/team5-project1/",
  },
  {
    id: 3,
    title: "KidStarter",
    languages: "react, jsx, css, js",
    packages: "jwt-decode, graphQL, apollo-server-express, mongoose, stripe, express, bcrypt, react-router-dom ",
    image: "/img/noheadphones.png",
    description:
      "This site is a concept that would allow kids (with adult supervision) to advertise and stream line their fundraisers.",
    repo: "https://github.com/sco5am/KidStarter",
    live: "",
  },
  {
    id: 4,
    title: "Note Taker App",
    languages: "html, css, js",
    packages: "Express.js",
    image: "",
    description:
      "A basic Note taking app that allows you to write, save, and delete notes.",
    repo: "https://github.com/sco5am/Note_Taker_App",
    live: "https://damp-island-37114.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
