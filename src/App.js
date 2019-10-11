import React from "react";
import FilteredResults from "./components/FilteredResults";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <FilteredResults />
    </div>
  );
}

export default App;
