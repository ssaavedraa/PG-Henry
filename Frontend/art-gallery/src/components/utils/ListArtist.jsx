import React from "react";

function ListArtist({ name, data, search, addList, handleOnChange,filter }) {
  return (
    <div className="subcontainerartist">
      {search && (
        <div className="search-artist">
          <input
            type="text"
            name="name"
            value={filter.name}
            placeholder="Search your artist!"
            onChange={handleOnChange}
          />
        </div>
      )}
      <div className="artists" name={name} onChange={(e) => addList(e, name)}>
        {data?.map((d) => (
          <div key={d.id} className="listArtist">
            <input type="checkbox" name="" id={d.id} />
            <label>{d.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListArtist;
