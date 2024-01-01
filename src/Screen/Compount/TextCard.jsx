// Card.js

import React from 'react';

const TextCard = ({  title, description }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default TextCard;
