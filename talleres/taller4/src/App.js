import React from "react";
import Layout from "./components/layout";
import Button from "./components/button";
import Container from "./components/container";
import AdviceCounter from "./components/AdviceCounter";
import useFetch from "./hooks/useFetch";
import "./App.css";

const App = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.adviceslip.com/advice"
  );

  const advice = data?.slip?.advice;

  return (
    <div className="layout-generator">
      <Container>
        <AdviceCounter />
        {error && <p>Error: {error}</p>}
        {isLoading ? <p>Cargando consejo...</p> : <Layout advice={advice} />}
        <Button onClick={() => window.location.reload()} />
        <div className="divider"></div>
      </Container>
    </div>
  );
};

export default App;
