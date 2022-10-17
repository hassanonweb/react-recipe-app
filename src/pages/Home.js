import React from "react";
import Popular from "../components/Popular";
import Veggies from "../components/Veggies";

function Home() {
  return (
    <div>
      <Popular category="Popular Picks" />
      <Veggies category="Vegetarian" />
    </div>
  );
}

export default Home;
