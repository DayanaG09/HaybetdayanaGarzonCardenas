import React from "react";

function TemperatureFahrenheit({ valor, setValor }) {
  return (
    <div>
      <label> ENTER TEMPERATURA IN FAHRENHEIT: </label>
      <input
        type="Number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Temperature en °F"
      />
    </div>
  );
}
export default TemperatureFahrenheit;
