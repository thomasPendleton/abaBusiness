import React from "react"
import styled from "styled-components"
const ContactForm = () => {
  return (
    <Wrapper>
      <form action="" className="message-form">
        <input name="name" type="text" placeholder="Your name" />
        <input name="email" type="text" placeholder="Your email" />
        <input name="subject" type="text" placeholder="Your subject" />
        <textarea rows={4} name="message" type="text" placeholder="Message" />
        <button className="btn">Send a message</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 20px auto;
  .message-form{
    /* border: 2px solid var(--purple); */
    
    input{
        border-radius: 10px;
        width: 100%;
        font-size: 2rem;
    }
    textarea{
        border-radius: 10px;
        font-size: 2rem;
        width: 100%;
    }
    .btn{
        cursor: pointer;
        margin: 5px auto;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: var(--color-primary);
        color: #fff;
        font-size: 1.5rem;
    }
  }
`
export default ContactForm
