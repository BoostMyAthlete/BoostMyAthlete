import React from "react";
import StepByStepCards from "@components/Timeline/Timeline";
import CardList from "@components/LandingContent/LandingContent";
import HomeCarousel from "@components/HomeCarousel/HomeCarousel";

function HomePage() {
  return (

    <div>
      <CardList />
      <StepByStepCards />
      <HomeCarousel />
    </div>
  );
}

export default HomePage;
