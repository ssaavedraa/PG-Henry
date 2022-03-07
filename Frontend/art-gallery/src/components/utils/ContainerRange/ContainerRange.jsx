import React from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import "./ContainerRange.css";

function ContainerRange({ max,texto, maxName, minName, filter, handleOnChange }) {
  return (
    <div className="subcontainer-range">
      <div className="range-slider">
        <RangeSlider
          min={0}
          max={max}
          nameMin={minName}
          nameMax={maxName}
          filter={filter}
          handleOnChange={handleOnChange}
        />
      </div>
      <div className="text-range">
        <label>Type your rank: {texto}</label>
        <input
          name={minName}
          type="number"
          onChange={handleOnChange}
          placeholder="From"
          value={filter[minName]}
        />
        <input
          name={maxName}
          type="number"
          onChange={handleOnChange}
          placeholder="To"
          value={filter[maxName]}
        />
      </div>
    </div>
  );
}

export default ContainerRange;
