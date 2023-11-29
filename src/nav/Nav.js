import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import astronautHelmet from '../assets/astronaut-helmet.png';
import deadEye from '../assets/dead-eye.png';
import stack from '../assets/stack.png';
import envelope from '../assets/envelope.png';
import '../styles/nav.css';

export default function Nav() {
  const location = useLocation();
  console.log(location.pathname);
  const getNavPosition = () => {
    switch (location.pathname) {
      case '/':
        return 'nav-about';
      case '/skills':
        return 'nav-skills';
      case '/projects':
        return 'nav-projects';
      case '/envelope':
        return 'nav-envelope';
      default:
        return '';
    }
  };
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'ABOUT';
      case '/skills':
        return 'SILLS';
      case '/projects':
        return 'PROJECTS';
      case '/envelope':
        return 'CONTACT';
      default:
        return '';
    }
  };

  const getNavPositionClass = getNavPosition();
  const pageTitle = getPageTitle();

  console.log(getNavPositionClass);
  console.log(pageTitle);

  const isCurrentPage = (navClass) => navClass === getNavPositionClass;

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? 'nav-link current' : 'nav-link';
    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };
  return (
    <nav className={`nav ${getNavPositionClass}`}>
      {renderNavLink('/', astronautHelmet, 'astronaut helmet icon', 'nav-about')}
      {renderNavLink('/skills', deadEye, 'deadEye icon', 'nav-skills')}
      {renderNavLink('/projects', stack, 'stack icon', 'nav-projects')}
      {renderNavLink('/envelope', envelope, 'envelope icon', 'nav-envelope')}

    </nav>

  );
}
