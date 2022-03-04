import React from 'react'
import {RIGHT_PAGE, LEFT_PAGE, fetchPageNumbers} from './logic.js';

import './pagination.css';

function Pagination({paintsPerPage, allPaintings, Paginate, actualPage}) {
  const pageNeighbours = 2;
  const totalPages = Math.ceil(allPaintings / paintsPerPage);
  const pages = fetchPageNumbers(pageNeighbours, actualPage, totalPages);
  
  function handleClick(page) {
    return function (e) {
      e.preventDefault();
      Paginate(page);
    };
  }

  function handleMoveLeft(e) {
    e.preventDefault();
    let maxPage = actualPage - pageNeighbours * 2 - 1;
    maxPage = maxPage < 2 ? 1 : maxPage;
    Paginate(maxPage);
  }

  function handleMoveRight(e) {
    e.preventDefault();
    let maxPage = actualPage + pageNeighbours * 2 + 1;
    maxPage = maxPage > totalPages ? totalPages : maxPage;
    Paginate(maxPage);
  }
    return (
        <div className="container">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <p key={index} className="page">
                <button
                  onClick={handleMoveLeft}
                  className="pageActive"
                >
                  &laquo;
                </button>
              </p>
            );
          if (page === RIGHT_PAGE)
            return (
              <p key={index} className={page}>
                <button
                  onClick={handleMoveRight}
                  className="pageActive"
                >
                  &raquo;
                </button>
              </p>
            );
          return (
            <p key={index} className="page">
              <button
                onClick={handleClick(page)}
                className={actualPage === page ? "pageActive" : "pageLink"}
              >
                {page}
              </button>
            </p>
          );
        })}
      </div>
  )
}

export default Pagination