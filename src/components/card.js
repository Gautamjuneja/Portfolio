import React from 'react';
import "./styles/card.css";

const Card = ({ title, content, imageUrl,websiteLink }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <br/>
      <a className = "button-49" href={websiteLink}>Website URL</a>
    </div>
  );
};

export default Card;
