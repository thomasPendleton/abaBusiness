import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <Wrapper>
      <h4>Contact Us for a Free Consultation!</h4>
      <ContactForm />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-family: Raleway, Arial, Helvetica, sans-serif;
  text-align: center;
  h2 {
    color: var(--purple);
    font-size: 1.7rem;
  }
  h4 {
    margin: 0;
    color: var(--purple);
    font-size: 3rem;
    filter: drop-shadow(2px 2px 2px rgba(4, 4, 4, 0.5));
  }
  margin: 0 auto;
  width: clamp(300px, 95%, 800px);
`
export default ContactUs