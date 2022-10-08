import React from "react"
import { AiFillPhone, AiOutlineMail } from "react-icons/ai"
import styled from "styled-components"

const HeaderContact = () => {
  return (
    <Wrapper>
      <ul className="contact-header">
        <li>Acuity Behavior Solutions</li>
        <li>
          <AiFillPhone className="phone" />
        </li>
        <li>(714) 696-2862</li>
        <li>
          <AiOutlineMail className="phone" />
        </li>
        <li>info@acuitybehaviorsolutions.com</li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;

  .contact-header {
    display: flex;
    margin: 5px;
  }
  .contact-header li {
    padding-right: 10px;
    filter: drop-shadow(1px 1px 1px rgb(0, 0, 0, 0.5));
  }

  .phone {
    margin-top: 4px;
  }
  @media screen and (min-width: 905px) {
    display: block;
    display: flex;
    justify-content: center;
    background-color: #aaf2d4;
    color: #fff;
    font-size: 1.4rem;
  }
`

export default HeaderContact
