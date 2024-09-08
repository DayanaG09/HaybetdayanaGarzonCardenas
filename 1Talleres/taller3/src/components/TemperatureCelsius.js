import React from "react";

function TemperatureCelsius({ valor, setValor }) {
  return (
    <div>
      <label> ENTER TEMPERATURA IN CELSIUS: </label>
      <input
        type="Number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Temperature en °C"
      />
    </div>
  );
}

export default TemperatureCelsius;
