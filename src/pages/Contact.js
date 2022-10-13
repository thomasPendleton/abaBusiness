import React from 'react'
import styled from "styled-components"
import Location from '../components/Location'
import ContactUs from '../components/ContactUs'

const Contact = () => {
  return (
    <Wrapper>
      <ContactUs /> 
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
export default Contact