import React from 'react'; 

const AdviceCounter = ({adviceNumber}) => {
  // const [adviceNumber, setAdviceNumber] = useState(1);

  // const incrementAdvice = () => {
  //   setAdviceNumber(adviceNumber + 1);
  // };

  return (
    <div >
      <h2 className="advice-id">ADVICE #{adviceNumber}</h2>
    </div>
  );
};

export default AdviceCounter;

