import React from "react";
import NavBar from "./components/includes/NavigationBar";
import Vector from "./components/sections/Vector";
import Banner from "./components/sections/Banner";
import Details from "./components/sections/Details";
import Counter from "./components/sections/CounterUp";
import Footer from "./components/includes/Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Vector />
      <Banner />
      <Counter />
      <Details />
      <Footer />
    </div>
  );
}

export default HomePage;
