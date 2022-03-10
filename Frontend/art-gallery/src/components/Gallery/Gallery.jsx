import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getPaintings } from "../../redux/actions/actions";
import Filters from "../Filters/Filters";
import CardsPaints from "../../containers/CardsPaints/CardsPaints";
import Pagination from "../Pagination/Pagination";
import "./Gallery.css";

function Gallery() {
  const dispatch = useDispatch();
  const paintings = useSelector((state) => state.paintings);
  const navigate = useNavigate();

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("query");

  useEffect(() => {
    dispatch(getPaintings());
  }, [dispatch]);
  //Filters
  const [filter, setFilter] = useState({
    order: "",
    minPrice: "0",
    maxPrice: "30000",
    minWidth: "0",
    maxWidth: "2000",
    minHeight: "0",
    maxHeight: "2000",
    artist: [],
    technique: [],
    orientation: "",
    name: "",
  });

  useEffect(() => {
    dispatch(getPaintings({ searchTerm: query, ...filter }));
  }, [dispatch, filter, query]);

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
    if (filter.artist.length) page.actualPage = 1;
    let orderBy;
    if (e.target.name === "order") {
      if (e.target.value !== "") orderBy = "title";
      else orderBy = "";
    } else if (e.target.name === "minPrice") {
      if (e.target.value !== "0") orderBy = "price";
      else orderBy = "";
    }

    setFilter({
      ...filter,
      orderBy,
      [e.target.name]: !value ? e.target.value : value,
    });
  }

  function addList(e, name) {
    if (filter.artist.length === 0) page.actualPage = 1;
    const seleccionado = filter[name].find((item) => item === e.target.id);
    if (!seleccionado && e.target.checked) {
      setFilter({ ...filter, [name]: [...filter[name], e.target.id] });
    } else {
      const newState = filter[name].filter((item) => item !== e.target.id);
      setFilter({ ...filter, [name]: newState });
    }
  }

  function cleanFilter() {
    let inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "checkbox" || inputs[i].type === "radio") {
        inputs[i].checked = false;
      }
    }
    setFilter({
      order: "",
      minPrice: "0",
      maxPrice: "30000",
      minWidth: "0",
      maxWidth: "2000",
      minHeight: "0",
      maxHeight: "2000",
      artist: [],
      technique: [],
      orientation: "",
      name: "",
    });
    navigate("/gallery");
  }

  return (
    <div className="gallery-container">
      <Filters
        handleOnChange={handleOnChange}
        addList={addList}
        cleanFilter={cleanFilter}
        filter={filter}
        setFilter={setFilter}
      />
      <div className="cards-container">
        {query && <p>{"searching for: " + query}</p>}
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
