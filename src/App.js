import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="header">

      <h1 className="App-title">Trip me</h1>
      </div>

        

          <Travels/>
      </div>
    );
  }
}

export default App;