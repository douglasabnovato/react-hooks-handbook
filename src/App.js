import React from "react";

import "./styles/App.css";

import Card from "./components/Card";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";
import UseCallback from "./components/UseCallback";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";

export default function App(props) {
  return (
    <div className="App">
      <h1>Hooks React</h1>
      <div className="Cards">
        <Card titulo="#00 - Hooks useState" color="#E7E014">
          <UseState />
        </Card>
        <Card titulo="#01 - Components Lifecycle useEffect" color="#AF601A">
          <UseEffect />
        </Card>
        <Card
          titulo="#02 - Consumindo Contextos com useContext"
          color="#168A2B"
        >
          <UseContext />
        </Card>
        <Card
          titulo="#03 - Manipulando múltiplos state ao mesmo tempo com useReducer"
          color="#0D3BE6"
        >
          <UseReducer />
        </Card>
        <Card
          titulo="#04 - Memorizando funções com useCallback"
          color="#B9006E"
        >
          <UseCallback />
        </Card>
        <Card titulo="#05 - Memorizando dados com useMemo" color="#921E28">
          <UseMemo />
        </Card>
        <Card titulo="#06 - Entendendo referências no React" color="#FFC300">
          <UseRef />
        </Card>
      </div>
      <h5>@douglasabnovato</h5>
    </div>
  );
}
