import React from "react";
import Banner from "../components/widgets/Banner";
import Details from "../components/widgets/Details";
import Counter from "../components/widgets/CounterUp";
import UpperBanner from '../components/widgets/UpperBanner'

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
