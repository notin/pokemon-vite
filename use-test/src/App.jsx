import { experimental_use as use, Suspense, useState, useEffect } from "react";

import GPS from "./gps";
import PokemonList from "./components/PokemonList.tsx";

const idsFetch = fetch("/ids.json").then(async (res) => ({
  status: res.status,
  data: res.status === 200 ? await res.json() : null,
}));

const cachedFetches = {};
const cachedFetch = (url) => {
  if (!cachedFetches[url]) {
    cachedFetches[url] = fetch(url).then(async (res) => ({
      status: res.status,
      data: res.status === 200 ? await res.json() : null,
    }));
  }
  return cachedFetches[url];
};

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    async function init() {
      const ids = await cachedFetch("/ids.json");
      await Promise.all(ids.data.map((id) => cachedFetch(`/${id}.json`)));
      setInitialized(true);
    }
    init();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonList />
      </Suspense>
    </div>
  );
}

export default App;
