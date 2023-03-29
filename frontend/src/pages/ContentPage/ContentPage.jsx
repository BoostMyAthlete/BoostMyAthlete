import CommunityPage from '@pages/CommunityPage/CommunityPage'
import ContactPage from '@pages/ContactPage/ContactPage'
import HomePage from '@pages/HomePage/HomePage'
import ProfilePage from '@pages/ProfilePage/ProfilePage'
import SearchPage from '@pages/SearchPage/SearchPage'
import SignIn from '@pages/SignIn/SignIn'
import React from 'react'

const ContentPage = () => {
  return (
    <div>
        <HomePage />
        <SignIn />
        <SearchPage />
        <ProfilePage />
        <CommunityPage />
        <ContactPage />
    </div>
  )
}

export default ContentPage