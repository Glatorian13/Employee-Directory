import React, { useState, useEffect, useMemo } from 'react'
import API from '../../utils/API'
import Search from '../SearchBox'
import sortHook from '../../utils/sortHook'
import "./style.css"


export default function EmpContainer() {
  //const [sortOrder, setSortOrder] = useState("");
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

 //useEffect called only once due to empty []
  useEffect(
    () => {
      API.searchEmp()
      .then(res => {
       setResults(res.data.results)
      }).catch(err => console.log(err))
    }, [])

  console.log(results);

  //for search term input, need to call function in html portion, e is for event
  const handleSearchInput = e => {
    setSearch({ search: e.target.value.toLowerCase() })
  }

  //sort functions

  


  ///////////
  
  //different sort function using imported hook
  const employeeTable = (props) => {
    const { results } = props;
    const { items, requestSort } = sortHook(results);
    // const getClassNamesFor = (name) => {
    //   if (!sortConfig) {
    //     return
    //   }
    //   return sortConfig.key === name ? sortConfig.direction : undefined;
    //}
    return (
      <div>
        <Search handleSearchInput={handleSearchInput}
        search={search} />

        <div className="table">
          <table className="table table-stiped table-responsive text-center table-hover">
            <thread>
              <tr>
                <th>Image</th>
                <th>First Name<button  onClick={() => requestSort('name.first')} ></button></th>
                <th>Last Name<span className="downArrow"></span></th>
                <th>Phone </th>
                <th>Email </th>
              </tr>
            </thread>
            <tbody>
              {items.map((item) => item.toLowerCase().includes(search)(
                <tr key={item.login.uuid}>
                <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /> </td>
                  <td>{item.name.first}</td>
                  <td>{item.name.last}</td>
                  <td>{item.phone} </td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  }