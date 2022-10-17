import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_RECIPE}&number=8&cuisine=${name}`
    );
    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div>
      <h1 className="title-font text-2xl font-mono uppercase font-semibold text-gray-800 mb-2 mx-6 md:mx-10">
        Top Results for: "{params.type}"
      </h1>
      {cuisine == "" ? (
        <div className="flex justify-center mt-6 text-gray-500">
          <img src=".././404.webp" className="w-4/12" />
        </div>
      ) : (
        ""
      )}
      <div className="grid md:grid-cols-4 gap-4 justify-center mx-6 overflow-hidden mb-2 md:mb-10">
        {cuisine.map((rec) => {
          return (
            <Link to={"/recipe/" + rec.id}>
              <Card
                title={rec.title}
                image={rec.image}
                cat={rec.glutenFree}
                key={rec.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Cuisine;
