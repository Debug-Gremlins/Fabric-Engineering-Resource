import React from "react";
import Banner from "../components/customs/Banner";
import Details from "../components/customs/Details";
import Counter from "../components/customs/CounterUp";
import UpperBanner from '../components/customs/UpperBanner'

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
