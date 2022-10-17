import React from 'react'
import styled from "styled-components"
import Location from '../components/Location'
import ContactUs from '../components/ContactUs'
import FollowUs from '../components/FollowUs'

const Contact = () => {
  return (
    <Wrapper>
      <ContactUs /> 
      <Location />
      <FollowUs />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin: 170px auto 30px;
  text-align: center;
  @media screen and (min-width: 905px) {
    margin: 155px auto 50px;

  }
  `
export default Contact