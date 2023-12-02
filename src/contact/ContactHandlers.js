import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/contactHandler.css';

const ContactHandlers = () => (
  <div className="cont-holder">
    <Link to="https://twitter.com/beidework">
      <FontAwesomeIcon icon={faTwitter} className="icons twitter" />
    </Link>
    <Link to="https://www.linkedin.com/in/addisalemseifu/">
      <FontAwesomeIcon icon={faLinkedin} className="icons linkedin" />
    </Link>
    <Link to="https://github.com/addisalemseifu">
      <FontAwesomeIcon icon={faGithub} className="icons github" />
    </Link>

    {/* <FaTwitter className="icon twitter" />
    <FaGithub className="icon github" />
    <span className="back"><FaLinkedin className="icon linkedin" /></span> */}

  </div>
);

export default ContactHandlers;
