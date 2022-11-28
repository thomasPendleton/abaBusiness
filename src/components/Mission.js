import React from "react"
import styled from "styled-components"
import img from "../assets/logo.png"
const Mission = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={img} alt="logo" />
        <h2>
          Our mission is to provide quality, research-based interventions to our
          clients and their families.
        </h2>
      </div>
      <h3>
        We are passionate about making a difference in the lives of our clients!
      </h3>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 70px auto;
  width: 90%;
  h2{
    font-weight: 400;
    font-size: 1.8rem;
  }

  h3{
    font-size: 1.6rem;

    font-weight: 400;
    color: var(--purple)
  }
  @media screen and (min-width: 905px) {
    .container{
        margin: 0 auto;
        display:flex;
        align-items: center;
        width: clamp(300px, 95%, 800px);

    }
  }
`
export default Mission
