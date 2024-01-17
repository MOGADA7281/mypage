import React from 'react';
import './HeadImg.css;';
import img1 from './Images/img1.jpg';


const HeaderImage = () => {
    return (
      <header>
        <img
          src={img1}
          alt="Header Image"
          className="header-image"
        />
      </header>
    );
  };
  
  export default HeaderImage;