import React from "react";
import Vector from "../components/sections/Vector";
import Banner from "../components/sections/Banner";
import Details from "../components/sections/Details";
import Counter from "../components/sections/CounterUp";

function HomePage() {
  return (
    <div>
      <Vector />
      <Counter />
      <Banner />
      <Details />
    </div>
  );
}

export default HomePage;
