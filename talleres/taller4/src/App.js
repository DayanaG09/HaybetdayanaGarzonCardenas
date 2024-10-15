import React, { useState } from "react";
import Layout from "./components/layout";
import Button from "./components/button";
import Container from "./components/container";
import AdviceCounter from "./components/AdviceCounter";
import getAdvise from "./hooks/useFetch";

import "./App.css";

const App = () => {
  // var data = { data: null, error: null };

  const [advise, setAdvise] = useState({ data: { slip: null }, error: null });

  const [adviceNumber, setAdviceNumber] = useState(0);

  const getAdvises = async () => {
    setAdvise(await getAdvise());
    setAdviceNumber(adviceNumber + 1);
  };

  return (
    <div className="layout-generator">
      <Container>
        <AdviceCounter adviceNumber={adviceNumber} />
        {advise.error && <p>Error: {advise.error}</p>}
        <Layout advice={advise.data.slip?.advice} />

        <Button getAdvises={getAdvises} />
        <div className="divider"></div>
      </Container>
    </div>
  );
};

export default App;
