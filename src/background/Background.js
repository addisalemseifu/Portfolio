import React from 'react';
import '../styles/background.css';
import video from '../assets/bg-universe.mp4';
import fallbackImage from '../assets/fallback-image.png';

export default function Background() {
  return (
    <>
      <div className="shadow-overlay" />
      <video playsInline muted autoPlay loop preload="auto" id="bg" poster={fallbackImage}><source src={video} type="video/mp4" /></video>
    </>
  );
}
