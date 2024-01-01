// Card.js

import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded overflow-hidden shadow-lg">
      <img className=" w-[400px] h-[250px]" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
