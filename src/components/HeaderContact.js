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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.7rem;
  z-index: 100;
  background-color: #aaf2d499;
  color: #fff;
  font-weight: 600;
  display: flex;
  justify-content: center;
  text-align: center;
  ul {
    padding-inline-start: 0;
  }
  .contact-header {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
  ul .phone {
    display: none;
  }

  .contact-header {
    display: flex;
    margin: 5px;
  }
  .contact-header li {
    padding-right: 10px;
    filter: drop-shadow(1px 1px 1px rgb(0, 0, 0, 0.5));
  }

  @media screen and (min-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    font-size: 1rem;
    font-weight: 700;

    .contact-header {
      margin: 5px;
      flex-direction: row;
    }
  }
 

  @media screen and (min-width: 905px) {
    display: flex;
    justify-content: center;
    height: 3rem;
    font-size: 1.4rem;
    font-weight: 600;

    .contact-header {
      margin: 5px;
      flex-direction: row;
    }
    ul .phone {
      display: block;
      margin-top: 4px;
    }
  }
`

export default HeaderContact
