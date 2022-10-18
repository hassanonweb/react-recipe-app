import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("summary");
  let params = useParams();

  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_RECIPE}`
    );
    const data = await api.json();
    setRecipe(data);
  };

  useEffect(() => {
    getRecipe();
  }, [params.name]);
  return (
    <div className="flex flex-col md:flex-row mx-6">
      <div className="flex-1 p-5">
        <h1 className="text-4xl font-semibold font-mono mb-9">
          {recipe.title}
        </h1>
        <img src={recipe.image} className="rounded-lg" />
      </div>
      <div className="flex-1 p-5">
        <button
          className={`btn + ${activeTab == "summary" ? "btn-active" : ""}`}
          onClick={() => setActiveTab("summary")}
        >
          summary
        </button>
        <button
          className={`btn + ${activeTab == "instructions" ? "btn-active" : ""}`}
          onClick={() => setActiveTab("instructions")}
        >
          Recipe
        </button>
        {activeTab === "summary" && (
          <div dangerouslySetInnerHTML={{ __html: recipe.summary }}></div>
        )}
        {activeTab === "instructions" && (
          <>
            <br />
            <div
              dangerouslySetInnerHTML={{ __html: recipe.instructions }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}

export default Recipe;
