import React from "react";

const Card = ({ title, link }) => {
  return (
    <div id="card">
      <img id="img" srcSet={link} alt="" width={"200px"} />
      <h4 id="title">{title}</h4>
    </div>
  );
};

export default Card;
