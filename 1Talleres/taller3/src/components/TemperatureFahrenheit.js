import React from "react";

function TemperatureFahrenheit({ valor, setValor }) {
  return (
    <div>
      <label> ENTER TEMPERATURA IN CELSIUS: </label>
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
