import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Article = ({ id, position, name, image, title, quote }) => {
  return (
    <article key={id} className={position}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </article>
  );
};

export default Article;
