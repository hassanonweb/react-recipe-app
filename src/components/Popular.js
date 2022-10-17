import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Popular(props) {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_RECIPE}&number=5`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
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
            gap: "1rem",
          }}
        >
          {popular.map((rec) => {
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

export default Popular;
