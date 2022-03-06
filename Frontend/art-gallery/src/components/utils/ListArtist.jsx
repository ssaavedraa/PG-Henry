import React from "react";

function ListArtist({ data, search }) {
  return (
    <div className="subcontainerartist">
      {search && (
        <div className="search-artist">
          <input type="text" placeholder="Search your artist!" />
        </div>
      )}
      <div className="artists">
        {data?.map((d) => (
          <div key={d.id} className="listArtist">
            <input type="checkbox" name="" id="" />
            <label>{d.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListArtist;
