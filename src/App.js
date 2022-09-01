import React from "react";

import "./styles/App.css";

import Card from "./components/Card";
import Counter from "./components/Counter";
import InputText from "./components/InputText";

export default function App(props) {

  return (
    <div className="App">
      <h1>Hooks React com Mateus Silva</h1>
      <div className="Cards">
        <Card titulo="#00 - Hooks useState" color="#B9006E">
          <Counter />
        </Card>
        <Card titulo="#01 - Components Lifecycle useEffect" color="#AF601A">
          <InputText />
        </Card>
        <Card titulo="#02 - Consumindo Contextos com useContext" color="#168A2B">
          <h2>Parei aqui</h2>
        </Card>
      </div>
    </div>
  );
}
