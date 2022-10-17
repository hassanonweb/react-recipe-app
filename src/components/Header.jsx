import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <NavLink to={"/"}>
        <h1 className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-600 text-center mt-5 mb-6 font-roboto font-semibold">
          ترکیب
        </h1>
      </NavLink>
      <SearchBar />
    </div>
  );
}

export default Header;
