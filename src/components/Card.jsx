import React from "react";
import '/home/image-search-app/src/components/styles.css'
const Card = ({ title, link }) => {
  return (
    <div id="card">
      <img id="img" srcSet={link} alt="" />
      <div id="title-container">
        <p id="title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
