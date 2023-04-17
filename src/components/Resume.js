import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />

        <a
          className="button is-secondary"
          href={process.env.PUBLIC_URL + "/Resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>JQuery, Bootstrap, Node.js</li>
            <li>MYSQL, MongoDB, Express</li>
            <li>Handelbars.js, React.js</li>
            <li>Git</li>
            <li>Github Repo Management</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;