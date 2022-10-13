import React from 'react'
import styled from "styled-components"
import Hero from "../components/Hero"
import InfoBanners from "../components/InfoBanners"
import FollowUs from "../components/FollowUs"
import Location from "../components/Location"

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <FollowUs />
      <InfoBanners />
      <Location />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin: 153px auto;
  text-align: center;
  @media screen and (min-width: 905px) {
    margin: 125px auto;
  }
`
export default Home