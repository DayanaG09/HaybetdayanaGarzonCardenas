
import React from 'react';


const Button = ({ getAdvises }) => {
  return (
    <button onClick={getAdvises} className="button">
      <img src="/dado.png" alt="dado" />
    </button>
  );
};

export default Button;

