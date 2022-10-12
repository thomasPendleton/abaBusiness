import React from 'react'
import styled from "styled-components"

const Contact = () => {
  return (
    <Wrapper>
      <h1>Contact</h1>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin: 0 auto;
  text-align: center;
  width: clamp(200px, 50%, 600px);
`
export default Contact