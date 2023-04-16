import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/sco5am" target="_blank" rel="noreferrer">
            Samuel Clay Oaks
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/samuel-oaks-429451272/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>
          <hr />
          <a
            href="https://github.com/sco5am?tab=repositories"
            target="_blank" rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;