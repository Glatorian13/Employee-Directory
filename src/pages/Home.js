import React from "react";
import Jumbo from "../components/Jumbo";
import SearchBox from "../components/SearchBox";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";

export default function Home() {
  return (
    <div>
      <Jumbo >
      <h1>Employee Directory</h1>
      <h2>Search Below</h2>
      <SearchBox>Search</SearchBox>
      </Jumbo>
    </div>
  )
}