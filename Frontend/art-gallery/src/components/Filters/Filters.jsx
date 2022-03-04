import React from "react";
import { BiDollarCircle } from "react-icons/bi";
import { MdOutlinePhotoSizeSelectLarge } from "react-icons/md";
import { BsPersonBadge } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
import { GiWoodFrame } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";

import Title from "../utils/Title";
import ContainerRange from "../utils/ContainerRange";
import ListArtist from "../utils/ListArtist";

import "./Filters.css";

const { artists } = require("../../assets/Json/artists.json");
const { paintings } = require("../../assets/Json/paintings.json");

let technique = [];

for (let obra of paintings) {
  technique.push(obra.technique);
}

//Datos no repetidos
technique = technique.filter(
  (item, index) => technique.indexOf(item) === index
);

let elemen = [];
for (let i = 0; i < technique.length; i++) {
  elemen.push({ id: i, name: technique[i] });
}

function Filters() {
  return (
    <div className="filter-container">
      <select className="order">
        <option value="">AtoZ</option>
        <option value="">ZtoA</option>
      </select>
      <Title
        texto="PRECIO"
        logo={<BiDollarCircle className="icon" />}
        mostrar={() => mostrar(0)}
      />
      <div className="container-range">
        <ContainerRange texto="De" />
      </div>
      <Title
        texto="DIMENSIONES"
        logo={<MdOutlinePhotoSizeSelectLarge className="icon" />}
        mostrar={() => mostrar(1)}
      />
      <div className="container-range">
        <ContainerRange texto="Alto" />
        <ContainerRange texto="Ancho" />
      </div>
      <Title
        texto="ARTISTA"
        logo={<BsPersonBadge className="icon" />}
        mostrar={() => mostrar(2)}
      />
      <div className="container-range">
        <ListArtist data={artists} search="true" />
      </div>
      <Title
        texto="TECNICA"
        logo={<FaPaintBrush className="icon" />}
        mostrar={() => mostrar(3)}
      />
      <div className="container-range">
        <ListArtist data={elemen} />
      </div>
      <Title
        texto="ORIENTACIÓN"
        logo={<GiWoodFrame className="icon" />}
        mostrar={() => mostrar(4)}
      />
      <div className="container-range">
        <div className="listArtist">
          <input type="checkbox" name="" id="" />
          <label>HORIZONTAL</label>
        </div>
        <div className="listArtist">
          <input type="checkbox" name="" id="" />
          <label>VERTICAL</label>
        </div>
        <div className="listArtist">
          <input type="checkbox" name="" id="" />
          <label>CUADRADO</label>
        </div>
      </div>
      <div className="btnFilter">
        <div className="contBtn">
          <MdCleaningServices className="btnClean" />
          <button>Limpiar Filtros</button>
        </div>
      </div>
    </div>
  );
}

export default Filters;

function mostrar(num) {
  const title = document.getElementsByClassName("slider-title");
  const containerRange = document.getElementsByClassName("container-range");
  const btn = document.getElementsByClassName("btn");

  containerRange[0].style.height = "25%";
  containerRange[3].style.height = "30%";
  containerRange[4].style.height = "15%";

  title[num].classList.toggle("color");
  containerRange[num].classList.toggle("select");

  if (containerRange[num].style.display === "none") {
    containerRange[num].classList.remove("select");
  }

  btn[num].innerHTML = btn[num].innerHTML === "▲" ? "▼" : "▲";
}
