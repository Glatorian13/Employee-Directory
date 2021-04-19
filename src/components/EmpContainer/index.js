import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import SearchBox from '../SearchBox';
import "./style.css";


export default function EmpContainer() {
  const [sortOrder, setSortOrder] = useState("");
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
 
  //call api and generate users object
 useEffect(() => {
  API.searchEmp()
  .then(res => {
    setResults({ results: res.data.results })
    console.log(results)
  }).catch(err => console.log(err))
})

//for search term input, need to call function in html portion, e is for event
const handleSearchInput = e => {
  setSearch({ search: e.target.value.toLowerCase() })
}

//sort functions

}