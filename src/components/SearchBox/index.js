import React from "react";
import "./style.css";

export default function SearchBox(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="empName">Employee Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="empName"
          list="names"
          type="text"
          className="form-control"
          placeholder='Type Employee Name'
          id="empName"
          />
          <datalist id="names">
            {props.names.map(empName => (
              <option value={empName} key={empName}/>
            ))}
          </datalist>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
            Search
          </button>
      </div>
    </form>
  );
}