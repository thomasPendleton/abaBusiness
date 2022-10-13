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
  margin: 125px auto;
  text-align: center;
`
export default About