import React from "react";

function Card(props) {
  return (
    <div className="p-4">
      <div className="h-full bg-white shadow-md border-2 border-gray-200 border-opacity-60 overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={props.image}
          alt={props.title}
        />
        <div className="p-6">
          <h2
            className={`tracking-widest text-xs title-font font-medium text-gray-400 mb-1 +
        ${props.glutenFree ? "text-red-400" : "text-green-400"}`}
          >
            {props.glutenFree ? "Contains Gluten" : "Gluten-free"}
          </h2>
          <h1 className="title-font text-xl font-mono font-semibold text-gray-800 mb-3">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
