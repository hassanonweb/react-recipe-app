import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "./Card";
import { Link } from "react-router-dom";

function Veggies(props) {
  const [veggies, setVeggies] = useState([]);
  useEffect(() => {
    getVeggies();
  }, []);
  const getVeggies = async () => {
    const check = localStorage.getItem("veggies");
    if (check) {
      setVeggies(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_RECIPE}&number=8&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggies", JSON.stringify(data.recipes));
      setVeggies(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div>
      <h1 className="title-font text-3xl font-mono font-semibold text-gray-800 mb-2 mx-6 md:mx-10">
        {props.category}
      </h1>
      <div className="flex justify-center mx-6 overflow-hidden mb-2 md:mb-10">
        <Splide
          options={{
            rewind: true,
            perPage: 4,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          {veggies.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <Link to={"/recipe/" + rec.id}>
                  <Card
                    title={rec.title}
                    image={rec.image}
                    cat={rec.glutenFree}
                  />
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Veggies;
