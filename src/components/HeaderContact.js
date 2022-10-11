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
  background-color: #aaf2d4;
  display: flex;
  justify-content: center;
  text-align: center;
  height: 4.7rem;
  ul{
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

  @media screen and (min-width: 905px) {
    display: flex;
    justify-content: center;
    height: 3rem; 
    background-color: #aaf2d4;
    color: #fff;
    font-size: 1.4rem;
    .contact-header {
      margin: 5px;
      flex-direction: row;
    }
  }
  .phone {
    display: block;
  }
  ul .phone {
    margin-top: 4px;
  }
`

export default HeaderContact
