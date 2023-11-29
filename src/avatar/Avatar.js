import React from 'react';
import PropTypes from 'prop-types';
import avatarImage from '../assets/my-img2.png';
import '../styles/avatar.css';

export default function Avatar({ page }) {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay ${page}`;
  return (
    <>
      <span className={spanClass} />
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
}

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};
