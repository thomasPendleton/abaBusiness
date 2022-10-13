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
  margin: 0 auto;
  text-align: center;

  `
export default Contact