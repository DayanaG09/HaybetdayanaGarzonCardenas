import "./App.css";
import React, { useState } from "react";
import TemperatureFahrenheit from ".//components/TemperatureFahrenheit";
import TemperatureCelsius from ".//components/TemperatureCelsius";

function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const actualizarCelsius = (valor) => {
    setCelsius(valor);
    if (valor === "") {
      setFahrenheit("");
    } else {
      setFahrenheit((valor * 9) / 5 + 32);
    }
  };

  const actualizarFahrenheit = (valor) => {
    setFahrenheit(valor);
    if (valor === "") {
      setCelsius("");
    } else {
      setCelsius(((valor - 32) * 5) / 9);
    }
  };
  return (
    <div className="App">
      <center>
        <div>
          <div className="App-header">
            <h1>Enter temperature celsius </h1>
            <TemperatureCelsius valor={celsius} setValor={actualizarCelsius} />
          </div>
        </div>

        <div>
          <div className="App-far">
            <h1>Enter temperature fahrenheit </h1>
            <TemperatureFahrenheit
              valor={fahrenheit}
              setValor={actualizarFahrenheit}
            />
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
