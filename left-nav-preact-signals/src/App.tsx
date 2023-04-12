import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import PokemonList from "./components/PokemonList";

const App = () => (
  <div className="container">
    <PokemonList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
