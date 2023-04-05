import React from "react";
import StepByStepCards from "@components/Timeline/Timeline";
import CardList from "@components/LandingContent/LandingContent";

function HomePage() {
  return (
    <div>
      <CardList />
    
      <StepByStepCards />
    </div>
  );
}

export default HomePage;
