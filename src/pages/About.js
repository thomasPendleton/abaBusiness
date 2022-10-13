import React from 'react'
import styled from "styled-components"
import Location from '../components/Location'

const About = () => {
  return (
    <Wrapper>
      <h1>About</h1>
      <Location />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 170px auto;
  text-align: center;
  @media screen and (min-width: 905px) {
    margin: 155px auto;

  }
`
export default About