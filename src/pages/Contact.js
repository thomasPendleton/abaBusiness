import React from 'react'
import styled from "styled-components"
import Location from '../components/Location'
import ContactUs from '../components/ContactUs'
import FollowUs from '../components/FollowUs'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  document.title = 'Contact Us | Acuity Behavior Solutions'

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
  @media screen and (min-width: 905px) {
    margin: 155px auto 50px;

  }
  `
export default Contact