import React from 'react'
import styled from "styled-components"

const About = () => {
  return (
    <Wrapper>
      <h1>About</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 0 auto;
  text-align: center;
  width: clamp(200px, 50%, 600px);
    //Remove height
    height: calc(100vh - 18rem);
`
export default About