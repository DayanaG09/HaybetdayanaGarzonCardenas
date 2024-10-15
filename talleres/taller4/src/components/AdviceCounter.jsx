import React, { useState } from 'react'; // Asegúrate de importar useState
import Button from './button';

const AdviceCounter = () => {
  const [adviceNumber, setAdviceNumber] = useState(1);

  const incrementAdvice = () => {
    setAdviceNumber(adviceNumber + 1);
  };

  return (
    <div className="advice-container">
      <h2 className="advice-id">ADVICE #{adviceNumber}</h2>
      <Button onClick={incrementAdvice} />
    </div>
  );
};

export default AdviceCounter;

