import React from "react";

function ContainerRange({ texto, orderBy, max, min, filter, handleOnChange }) {
  return (
    <div className="subcontainer-range">
      <div className="select-range">
        <input
          type="range"
          min="0"
          max="3000"
          /* {Aqui ira el valor maximo} */ step="1" /* De paso en paso */
        />
      </div>
      <div className="text-range">
        <label>Digita tu rango: {texto}</label>
        <input
          name={min}
          type="number"
          onChange={(e) => handleOnChange(e, orderBy)}
          placeholder="Desde"
          value={filter[min]}
        />
        <input
          name={max}
          type="number"
          onChange={(e) => handleOnChange(e, orderBy)}
          placeholder="Hasta"
          value={filter[max]}
        />
      </div>
    </div>
  );
}

export default ContainerRange;
