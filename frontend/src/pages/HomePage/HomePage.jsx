import React from "react";
import StepByStepCards from "@components/Timeline/Timeline";
import CardList from "@components/LandingContent/LandingContent";
import UserTestimonials from "@components/Testimonials/Testimonials";
import HomeCarousel from "@components/HomeCarousel/HomeCarousel";


function HomePage() {
  return (

    <div>
      <CardList />
      <StepByStepCards />
      <HomeCarousel />
      <UserTestimonials />

    </div>
  );
}

export default HomePage;
