import React from "react";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Recipe from "./pages/Recipe";
import Header from "./components/Header";
import Cateory from "./components/Cateory";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Filter from "./pages/Filter";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Cateory />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/filter/:query" element={<Filter />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
      <div className="w-full bg-gradient-to-r from-green-400 to-pink-600 text-lg text-white mt-20 py-12 text-center">
        <h1>
          Made with &#10084; by{" "}
          <a href="https://github.com/hassanonweb" className="underline">
            Hassan
          </a>
        </h1>
      </div>
    </div>
  );
}

export default App;
