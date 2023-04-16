import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium"> Full Stack Web Developer</p>
      <hr />
      <img
        className="my-pic"
        src={process.env.PUBLIC_URL + "/images/profile2.jpg"}
        alt="Samuel Clay Oaks"
      />
      <p className="content">
      Hi I'm Sam, and welcome to my portfolio! I'm a student in The Ohio State
        Full Stack Development bootcamp. I've created this site in order to showcase the projects ive completed
        with my ever expanding skills using technologies such as HTML, CSS,
        Javascript, React, etc.
      </p>
    </div>
  );
}

export default About;
