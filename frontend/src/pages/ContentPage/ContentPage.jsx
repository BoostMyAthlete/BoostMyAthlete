/* eslint-disable import/no-unresolved */
import React from "react";
import CommunityPage from "@pages/CommunityPage/CommunityPage";
import ContactPage from "@pages/ContactPage/ContactPage";
import HomePage from "@pages/HomePage/HomePage";
import SignIn from "@pages/SignIn/SignIn";
import SearchPage from "@pages/SearchPage/SearchPage";
import { Routes, Route } from "react-router-dom";
import AthleteDetails from "../../components/AthleteDetails/AthleteDetails"

function ContentPage() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/profile/:id" element={<AthleteDetails />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
export default ContentPage;
