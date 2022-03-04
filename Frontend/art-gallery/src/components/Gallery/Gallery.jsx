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

  React.useEffect(() => {
    dispatch(getPaintings());
  }, [dispatch]);

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

  return (
    <div className="gallery-container">
      <Filters />
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
