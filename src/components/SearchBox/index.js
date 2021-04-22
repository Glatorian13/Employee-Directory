import React from "react";
import "./style.css";

const SearchBox = (props) => {
  return (
    <form>
      <div className="form-group search-widget">
        <div className="input-group mb-3">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder='Type Employee Name'
          id="search"
          />
      </div>
    </div>  
    </form>
  );
}

export default SearchBox;