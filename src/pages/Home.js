import React from 'react'
import styled from "styled-components"
import Hero from "../components/Hero"
import InfoBanners from "../components/InfoBanners"
import FollowUs from "../components/FollowUs"
import Location from "../components/Location"
import ServicesInclude from '../components/ServicesInclude'
import WhereToBegin from '../components/WhereToBegin'
import Helps from '../components/Helps'
import BoardCertified from '../components/BoardCertified'
import Mission from '../components/Mission'
import ContactForm from '../components/ContactForm'
import ContactUs from '../components/ContactUs'

const Home = () => {
  document.title = 'ABA Therapy In Orange County | Acuity Behavior Solutions'

  return (
    <Wrapper>
      <Hero />
      <FollowUs />
      <InfoBanners />
      <WhereToBegin />
      <ServicesInclude />
      <BoardCertified />
      <Helps />
      <Mission />
      <ContactUs />
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