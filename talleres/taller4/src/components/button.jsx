
import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button">
      <img src="/dado.png" alt="dado" />
    </button>
  );
};

export default Button;

