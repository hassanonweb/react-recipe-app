import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

function Filter() {
  const [filterItem, setFilterItem] = useState([]);
  const params = useParams();

  const getFilterItem = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_RECIPE}&query=${name}`
    );
    const data = await api.json();
    setFilterItem(data.results);
  };

  useEffect(() => {
    getFilterItem(params.query);
  }, [params.query]);
  return (
    <div>
      <h1 className="title-font text-2xl font-mono uppercase font-semibold text-gray-800 mb-2 mx-6 md:mx-10">
        Search results for: "{params.query}"
      </h1>
      {filterItem == "" ? (
        <div className="flex justify-center mt-6 text-gray-500">
          <img src=".././404.webp" className="w-4/12" />
        </div>
      ) : (
        ""
      )}
      <div className="grid md:grid-cols-4 gap-4 justify-center mx-6 overflow-hidden mb-2 md:mb-10">
        {filterItem.map((rec) => {
          return (
            <Card
              title={rec.title}
              image={rec.image}
              cat={rec.glutenFree}
              key={rec.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
