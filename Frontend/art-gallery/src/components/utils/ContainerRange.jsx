import React from "react";

function ContainerRange({texto}) {
  return (
    <div>
      <div className="select-range">
        <input
          type="range"
          min="0"
          max="3000"
          /* {Aqui ira el valor maximo} */ step="1" /* De paso en paso */
        />
        <label>{texto}: 0 a 3000</label>
      </div>
      <div className="text-range">
        <label>o digita tu rango: </label>
        <input type="number" placeholder="Desde" />
        <input type="number" placeholder="Hasta" />
      </div>
    </div>
  );
}

export default ContainerRange;
