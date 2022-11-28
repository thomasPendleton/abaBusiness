import React from "react"
import styled from "styled-components"
const ContactForm = () => {
  return (
    <Wrapper>
      <form action="" className="message-form">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" required />
        </div>

        <div className="email">
          <label htmlFor="name">Email Address</label>
          <input name="email" type="text" required />
        </div>

        <div className="subject">
          <label htmlFor="name">Subject</label>
          <input name="subject" type="text" required/>
        </div>

        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea rows={8} name="message" type="text" />
        </div>
        <button className="btn">Send a message</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 20px auto;
  
  .message-form {
    /* width: 95%; */
    /* margin: 0 auto; */
    text-align: left;
    display: grid;
    grid: auto / 1fr 1fr;
    gap: 10px;
    /* border: 2px solid var(--purple); */
    .name {
      grid-area: 1 / 1;
    }
    .email {
      grid-area: 1 / 2;
    }
    .subject {
      grid-area: 2 / 1 / 2 / span 2;
    }
    .message {
      grid-area: 3 / 1 / 3 / span 2;
    }
    label {
      position: absolute;
    }
    input {
      /* border-radius: 10px; */
      padding: 10px 10px;
      margin-top: 25px;
      border: 1px solid var(--purple);
      border-radius: 1px;
      width: 100%;
      font-size: 1.2rem;
    }
    textarea {
      margin-top: 25px;
      border: 1px solid var(--purple);
      border-radius: 1px;
      font-size: 1.2rem;
      width: 100%;
      padding: 10px 10px;
      resize: none;
    }
    .btn {
      cursor: pointer;
      grid-column: 1 / span 2;
      margin: 5px 0;
      padding: 5px 10px;
      border-radius: 1px;
      background-color: var(--color-primary);
      color: #fff;
      font-size: 1.5rem;
      &:hover{
        filter: brightness(1.1);
      }
      &:active{
        filter: brightness(0.9)
      }
    }
  }
`
export default ContactForm
