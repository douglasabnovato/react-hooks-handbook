import React from "react";

import "./styles/App.css";

import Card from "./components/Card";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";

export default function App(props) {

  return (
    <div className="App">
      <h1>Hooks React</h1>
      <div className="Cards">
        <Card titulo="#00 - Hooks useState" color="#B9006E">
          <UseState />
        </Card>
        <Card titulo="#01 - Components Lifecycle useEffect" color="#AF601A">
          <UseEffect />
        </Card>
        <Card titulo="#02 - Consumindo Contextos com useContext" color="#168A2B">
          <UseContext />
        </Card>
      </div>
      <h5>@douglasabnovato</h5>
    </div>
  );
}
