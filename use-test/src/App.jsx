import { experimental_use as use, Suspense, useState, useEffect } from "react";

import GPS from "./gps";
import PokemonList from "./components/PokemonList.tsx";


function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonList />
      </Suspense>
    </div>
  );
}

export default App;
