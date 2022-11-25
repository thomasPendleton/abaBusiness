import React from 'react'
import styled from "styled-components"
import AboutInfo from '../components/AboutInfo'
import FollowUs from '../components/FollowUs'
import Location from '../components/Location'

const About = () => {

  document.title = 'About ABA Therapy In Orange County | Acuity Behavior Solutions'

  return (
    <Wrapper>

      <AboutInfo />

      {/* Add another component here */}
      <Location />
      <FollowUs />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 170px auto 50px;
  text-align: center;
  @media screen and (min-width: 905px) {
    margin: 155px auto 50px;

  }
`
export default About