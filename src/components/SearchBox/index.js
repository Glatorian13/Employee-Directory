import React from "react";
import "./style.css";

export default function SearchBox(props) {
  return (
    <form className="search">
      <div className="form-group search-widget">
        <label htmlFor="empName">Employee Name:</label>
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
    </form>
  );
}