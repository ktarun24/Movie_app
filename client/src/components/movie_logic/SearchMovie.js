import React from "react";

const SearchMovie = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "50%",
        margin: "15px",
      }}
    >
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type movie name to search..."
      ></input>
    </div>
  );
};

export default SearchMovie;
