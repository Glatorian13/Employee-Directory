import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import Search from '../SearchBox'
import "./style.css"


export default function EmpContainer() {
  const [sortOrder, setSortOrder] = useState("");
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
 
//   //call api and generate users object
//  useEffect(() => {
//   API.searchEmp()
//   .then(res => {
//     setResults({ results: res.data.results })
//     console.log(results)
//   }).catch(err => console.log(err))
//   })


//below works but infinetly calls api
  // useEffect(
  //   () => {
  //     API.searchEmp()
  //     .then(res => {
  //       setResults(res.data.results)
  //     }).catch(err => console.log(err))
  //   })

  //for search term input, need to call function in html portion, e is for event
  const handleSearchInput = e => {
    setSearch({ search: e.target.value.toLowerCase() })
  }

  //sort functions
  const sortFirstName = () => {
    const sortedEmp = results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1
      }
      if (a.name.first > b.name.first) {
        return 1
      }
      return 0;
    });

    if (sortOrder === "DESC") {
      sortedEmp.reverse();
      setSortOrder({ results: "ASC" });
    } else {
      setSortOrder({ results: "DESC" });
    }
    setResults({ results: sortedEmp })
  }

  const sortLastName = () => {
    const sortedEmp = results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1
      }
      if (a.name.last > b.name.last) {
        return 1
      }
      return 0;
    });
    if (sortOrder === "DESC") {
      sortedEmp.reverse();
      setSortOrder({ results: "ASC" });
    } else {
      setSortOrder({ results: "DESC" });
    }
    setResults({ results: sortedEmp })
  }

  //render???
    return (
      <div>
        <Search handleSearchInput={handleSearchInput}
        search={search} />

        <div className="table-responsive">
          <table className="table table-stiped table-responsive text-center table-hover">
            <thread>
              <tr>
                <th>Image</th>
                <th>First Name <span className="downArrow" onClick={sortFirstName}></span></th>
                <th>Last Name <span className="downArrow" onClick={sortLastName}></span></th>
                <th>Phone </th>
                <th>Email </th>
              </tr>
            </thread>
            {
              results && results.map(item =>
              item.name.first.toLowerCase().includes(search) ?
              <tbody key={item.login.uuid}>
                <tr>
                  <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /> </td>
                  <td>{item.name.first}</td>
                  <td>{item.name.last}</td>
                  <td>{item.phone} </td>
                  <td>{item.email}</td>
                </tr>
              </tbody>
              :
              item.name.last.toLowerCase().includes(search) ?
              <tbody key={item.login.uuid}>
                <tr>
                  <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /> </td>
                  <td>{item.name.first}</td>
                  <td>{item.name.last}</td>
                  <td>{item.phone} </td>
                  <td>{item.email}</td>
                </tr>
              </tbody>
              :
              null

              )}
          </table>
        </div>
      </div>
    )
  }