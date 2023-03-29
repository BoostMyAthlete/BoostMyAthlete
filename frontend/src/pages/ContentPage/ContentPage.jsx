/* eslint-disable import/no-unresolved */
import React from "react";
import CommunityPage from "@pages/CommunityPage/CommunityPage";
import ContactPage from "@pages/ContactPage/ContactPage";
import HomePage from "@pages/HomePage/HomePage";
import SignIn from "@pages/SignIn/SignIn";
import SearchPage from "@pages/SearchPage/SearchPage";
import ProfilePage from "@pages/ProfilePage/ProfilePage";

function ContentPage() {
  return (
    <div>
      <HomePage />
      <SignIn />
      <SearchPage />
      <ProfilePage />
      <CommunityPage />
      <ContactPage />
    </div>
  );
}
export default ContentPage;
