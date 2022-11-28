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
      <h2>Contact Us</h2>
      <p>
        At Acuity Behavior Solutions, we specialize in In-Home ABA Services &
        Autism Treatment in Orange County CA. Quality Behavior Intervention for
        Lasting Change Currently Accepting Cases in OC & LA Counties
      </p>
      <ContactUs /> 
      <Location />
      <FollowUs />
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin: 170px auto 30px;
  font-family: Raleway, Arial, Helvetica, sans-serif;
  text-align: center;
  p{
    margin: 30px auto;
    width: clamp(300px, 95%, 800px);

  }

  h2 {
    color: var(--purple);
    font-size: 1.7rem;
  }
  @media screen and (min-width: 905px) {
    margin: 155px auto 50px;

  }
  `
export default Contact