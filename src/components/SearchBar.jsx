import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const inputElement = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputElement.current.focus();
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/filter/" + search);
  };
  return (
    <form class="flex justify-center mb-6" onSubmit={submitHandler}>
      <div class="mb-3 w-3/4 md:w-4/12">
        <input
          type="search"
          class="
  form-control
  block
  w-full
  px-3
  py-2
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  shadow-md
  border border-solid border-gray-300
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Biryani, Munchurian, Steaks..."
          ref={inputElement}
        />
      </div>
    </form>
  );
}

export default SearchBar;
