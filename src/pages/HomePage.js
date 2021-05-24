import React from "react";
import Banner from "../components/sections/Banner";
import Details from "../components/sections/Details";
import Counter from "../components/sections/CounterUp";
import UpperBanner from '../components/sections/UpperBanner'

function HomePage() {
  return (
    <div>
      <UpperBanner />
      <Counter />
      <Banner />
      <Details />
    </div>
  );
}

export default HomePage;
