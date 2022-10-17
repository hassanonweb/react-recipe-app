import React from "react";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Cateory() {
  return (
    <div className="w-full flex gap-4 justify-center mb-12">
      {/* <NavLink
        to={"/"}
        className={`border-solid border-2 border-yellow-600 text-yellow-600 p-3 rounded`}
      >
        <AiFillHome />
        <h3>Home</h3>
      </NavLink> */}
      <NavLink
        to={"/cuisine/italian"}
        className={`border-solid border-2 border-yellow-600 text-yellow-600 p-3 rounded + ({isActive}) => (isActive ? 'active' : 'inactive')`}
      >
        <FaPizzaSlice />
        <h3>Italian</h3>
      </NavLink>
      <NavLink
        to={"/cuisine/american"}
        className={`border-solid border-2 border-yellow-600 text-yellow-600 p-3 rounded + ({isActive}) => (isActive ? 'active' : 'inactive')`}
      >
        <FaHamburger />
        <h3>American</h3>
      </NavLink>
      <NavLink
        to={"/cuisine/thai"}
        className={`border-solid border-2 border-yellow-600 text-yellow-600 p-3 rounded + ({isActive}) => (isActive ? 'active' : 'inactive')`}
      >
        <GiNoodles />
        <h3>Thai</h3>
      </NavLink>
      <NavLink
        to={"/cuisine/chinise"}
        className={`border-solid border-2 border-yellow-600 text-yellow-600 p-3 rounded + ({isActive}) => (isActive ? 'active' : 'inactive')`}
      >
        <GiChopsticks />
        <h3>Chinise</h3>
      </NavLink>
    </div>
  );
}

export default Cateory;
