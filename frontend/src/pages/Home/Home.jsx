import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreOurMenu from "../../components/ExploreOurmenu/ExploreOurMenu";
import FoodDisplay from "../../components/FoodDisplayer/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import Login from "../../components/Login/Login";

const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Header />
      <ExploreOurMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
