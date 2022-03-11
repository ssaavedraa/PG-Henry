import React, { useCallback, useEffect, useRef } from "react";
import classnames from "classnames";
import "./RangeSlider.css";

function RangeSlider({ min, max, nameMin, nameMax, filter, handleOnChange }) {
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  //Convertir a porcentaje
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  // Establecer la anchura del rango para disminuir desde el lado izquierdo

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(filter[nameMin]);
      const maxPercent = getPercent(+maxValRef.current.value);
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = ((maxPercent - minPercent) > 100) ? "100%":`${maxPercent - minPercent}%`;
      }
    }
  }, [filter[nameMin],filter,nameMin, getPercent]);

  // Establecer la anchura del rango para disminuir desde el lado derecho
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(filter[nameMax]);
      if (range.current) {
        range.current.style.width = ((maxPercent - minPercent) > 100) ? "100%": `${maxPercent - minPercent}%`;
      }
    }
  }, [filter[nameMax],filter,nameMin, getPercent]);


  return (
    <div className="container-inputs-range">
      <input
        type="range"
        name={nameMin}
        min={min}
        max={max}
        value={filter[nameMin]}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, filter[nameMax] - 1);
          handleOnChange(event,value);
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": filter[nameMin] > max - 100
        })}
      />
      <input
        type="range"
        name={nameMax}
        min={min}
        max={max}
        value={filter[nameMax]}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, filter[nameMin] + 1);
          handleOnChange(event,value);
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
      </div>
    </div>
  );
}

export default RangeSlider;
