import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="created-by">Made with ❤️ by Anish Kumar</div>
      <div className="contact">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/_mr.lens_/?igshid=ZDdkNTZiNTM%3D"
          target="_blank"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://twitter.com/anishku01586975"
          target="_blank"
        >
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/Tannish"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/anish-kumar-29575a193/"
          target="_blank"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
