import React from 'react'
import styled from "styled-components"
import Hero from "../components/Hero"
import InfoBanners from "../components/InfoBanners"
import FollowUs from "../components/FollowUs"
import Location from "../components/Location"
import ServicesInclude from '../components/ServicesInclude'

const Home = () => {
  document.title = 'ABA Therapy In Orange County | Acuity Behavior Solutions'

  return (
    <Wrapper>
      <Hero />
      <FollowUs />
      <InfoBanners />
      <ServicesInclude />
      <Location />
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin: 145px auto;
  text-align: center;
  @media screen and (min-width: 650px) {
    margin: 125px auto;

  }
  @media screen and (min-width: 905px) {
  }
`
export default Home