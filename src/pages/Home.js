import React from "react";
import EmpContainer from "../components/EmpContainer";
import Jumbo from "../components/Jumbo";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";

export default function Home() {
  return (
    <div>
      <Jumbo >
      <h1>Employee Directory</h1>
      <h2>Search Below</h2>
      </Jumbo>
      <EmpContainer></EmpContainer>
    </div>
  )
}