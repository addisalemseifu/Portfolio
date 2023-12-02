/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import AboutMenueItem from './AboutMenuItem';
import AboutSubheading from './AboutSubheading';
import subheadingData from './subheadingData';
import personalIcon from '../assets/moebius-triangle.png';
import educationIcon from '../assets/upgrade.png';
import careerIcon from '../assets/triple-corn.png';
import '../styles/aboutMenu.css';

export default function AboutMenu() {
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const [activeSubheading, setActiveSubheading] = useState(1);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setActiveSubheading(1);
  };

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading);
  };

  const menuItems = ['PERSONAL', 'EDUCATION', 'CAREER'];
  const activeMenuTitle = menuItems[activeMenuItem - 1];
  const activeMenuIcon = activeMenuTitle === 'PERSONAL' ? personalIcon : activeMenuTitle === 'EDUCATION' ? educationIcon : careerIcon;

  const subheading = subheadingData[activeMenuItem];
  return (
    <>
      <div className="menu">
        {menuItems.map((item, index) => (
          <AboutMenueItem
            key={Math.random()}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => handleMenuItemClick(index + 1)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
          <h3>{activeMenuTitle}</h3>
        </div>
        {subheading.map((subheading, index) => (
          <AboutSubheading
            key={Math.random()}
            title={subheading.title}
            content={subheading.content}
            active={activeSubheading === index + 1}
            onClick={() => handleSubheadingClick(index + 1)}
            menuItem={activeMenuItem}
          />
        ))}
      </div>
    </>
  );
}
