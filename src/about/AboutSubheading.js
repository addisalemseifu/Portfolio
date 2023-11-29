/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import '../styles/aboutMenu.css';

export default function AboutSubheading({
  title, content, active, onClick, menuItem,
}) {
  const subContainerClass = `sub-container-${menuItem}`;
  return (
    <div className={classNames(subContainerClass, { 'active-subheading': active })}>
      <h3 onClick={onClick}>{title}</h3>
      <div className="p-container">{content}</div>
    </div>
  );
}
