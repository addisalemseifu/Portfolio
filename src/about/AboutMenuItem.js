/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import '../styles/aboutMenu.css';

export default function AboutMenuItem({ title, active, onClick }) {
  return (
    <div className={classNames('item', { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
}
