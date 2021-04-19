import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";




export default function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}