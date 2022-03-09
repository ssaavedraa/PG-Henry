import React from "react";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import "./SearchBar.css";

function SearchBar({ results, keyword, updateField }) {
  function updateText(text) {
    updateField("results", []);
    updateField("keyword", text, false);
  }

  function cancelSearch() {
    updateField("keyword", "");
  }

  return (
    <div className={results.length ? "div_search" : "div_searchNoResults"}>
      <div className="search_container">
        <button
          onClick={() => cancelSearch()}
          className={`cancel-btn ${keyword.length > 0 ? "active" : "inactive"}`}
        >
          x
        </button>
        <input
          type="text"
          value={keyword}
          className="search_inputNav"
          placeholder="Search your favorite artwork"
          onChange={(e) => updateField("keyword", e.target.value)}
        />
        <NavLink to={`/gallery?query=${keyword}`} className="links">
          <button className="btnSearch" onClick={() => cancelSearch()}>
            <BiSearch className="icon_search" />
          </button>
        </NavLink>
      </div>
      {results.length > 0 ? (
        <div className="search-results">
          {results.map(({ type, name, id }, index) => (
            <SearchPreview
              key={index}
              id={id}
              updateText={updateText}
              index={index}
              type={type}
              name={name}
              cancelSearch={cancelSearch}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function SearchPreview({ name, type, index, updateText, id, cancelSearch }) {
  const redirect = type === "artist" ? `/artists/${id}`: `/detailObra/${id}`;
  return (
    <NavLink to={redirect} onClick={() => cancelSearch()}>
      <div
        onClick={() => updateText(name)}
        className={`search-preview ${index === 0 ? "start" : ""}`}
      >
        <div className="first">
          <p className="name">{name}</p>
          <p className="sub-header">{type}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default SearchBar;
