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
        <label>{texto}: 0 to 3000</label>
      </div>
      <div className="text-range">
        <label>or insert your range: </label>
        <input type="number" placeholder="From" />
        <input type="number" placeholder="To" />
      </div>
    </div>
  );
}

export default ContainerRange;
