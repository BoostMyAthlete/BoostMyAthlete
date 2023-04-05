import React from "react";
import StepByStepCards from "@components/Timeline/Timeline";
import CardList from "@components/LandingContent/LandingContent";
import UserTestimonials from "@components/Testimonials/Testimonials";




function HomePage() {
  return (

    <div>
      <CardList />
      <StepByStepCards />
      <UserTestimonials />
      
    </div>
  );
}

export default HomePage;
