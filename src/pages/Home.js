import React from 'react'
import Hero from "../components/Hero"
import InfoBanners from "../components/InfoBanners"
import FollowUs from "../components/FollowUs"
import Location from '../components/Location'

const Home = () => {
  return (
    <>
      <Hero />
      <FollowUs />
      <InfoBanners />
      <Location />
    </>
  )
}

export default Home