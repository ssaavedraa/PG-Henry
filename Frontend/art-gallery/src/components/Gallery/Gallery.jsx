import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaintings } from "../../redux/actions/actions";

import Filters from "../Filters/Filters";
import CardsPaints from "../../containers/CardsPaints/CardsPaints";
import Pagination from "../Pagination/Pagination";

import "./Gallery.css";

function Gallery() {
  const dispatch = useDispatch();
  const paintings = useSelector((state) => state.paintings);
  console.log('soy paintings en gallery', paintings)
  React.useEffect(() => {
    dispatch(getPaintings());
  }, [dispatch]);

  //Filters
  const [filter, setFilter] = useState({
    order: "",
    minPrice: "0",
    maxPrice: "7000",
    minWidth: "0",
    maxWidth: "200",
    minHeight: "0",
    maxHeight: "200",
    artist: [],
    technique: [],
    orientation: "",
  });

  React.useEffect(() => {
    dispatch(getPaintings(filter));
  }, [dispatch, filter]);

  //------------------

  //Pagination
  const [page, setPage] = useState({
    actualPage: 1,
    paintsPerPage: 9,
  });

  const lastPaint = page.actualPage * page.paintsPerPage;
  const firstPaint = lastPaint - page.paintsPerPage;
  const actualPaints = paintings.slice(firstPaint, lastPaint);

  const paginate = (pageNumber) =>
    setPage({
      ...page,
      actualPage: pageNumber,
    });
  //----------------------

  function handleOnChange(e, value) {
    let orderBy = (e.target.name === "order" && e.target.value !== "") ? "title" : "";
    setFilter({
      ...filter,
      orderBy,
      [e.target.name]: !value ? e.target.value : value,
    });
  }

  function addList(e, name) {
    const seleccionado = filter[name].find((item) => item === e.target.id);
    if (!seleccionado && e.target.checked) {
      setFilter({ ...filter, [name]: [...filter[name], e.target.id] });
    } else {
      const newState = filter[name].filter((item) => item !== e.target.id);
      setFilter({ ...filter, [name]: newState });
    }
  }

  function cleanFilter() {

    let inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
      if(inputs[i].type === 'checkbox' || inputs[i].type === 'radio'){
        inputs[i].checked = false;
      }
    }
    setFilter({
      order: "",
      minPrice: "",
      maxPrice: "",
      minWidth: "",
      maxWidth: "",
      minHeight: "",
      maxHeight: "",
      artist: [],
      technique: [],
      orientation: "",
    });
  }

  return (
    <div className="gallery-container">
      <Filters
        handleOnChange={handleOnChange}
        addList={addList}
        cleanFilter={cleanFilter}
        filter={filter}
      />
      <div className="cards-container">
        <CardsPaints paintings={actualPaints} />
        <Pagination
          paintsPerPage={page.paintsPerPage}
          allPaintings={paintings.length}
          Paginate={paginate}
          actualPage={page.actualPage}
        />
      </div>
    </div>
  );
}

export default Gallery;
