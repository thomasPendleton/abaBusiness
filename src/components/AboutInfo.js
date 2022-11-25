import React from "react"
import styled from "styled-components"
import Family from "../assets/familyClear.webp"
const AboutInfo = () => {
  return (
    <Wrapper>
      <img src={Family} alt="family" />
      <div className="container">
        <h2>
          We are passionate about making a difference in the lives of our
          clients
        </h2>
        <h3>Family Focused Education & Therapy</h3>
        <p>
          Our mission is to provide quality, research-based interventions to our
          clients and their families. We do this by providing individualized
          programs for each child, informational and hands on caregiver
          training, and a variety of resources for the families we serve.
          <br />
          Call us at (714) 696-2862 or email us at
          info@acuitybehaviorsolutions.com to schedule a consult.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  font-family: Raleway, Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  .container {
    margin: 0 auto;
      width: 95%;
  }
  h2 {
    color: var(--purple);
    margin: 0;
  }
  img {
    width: 100%;
    /* margin: 20px; */
  }

  @media screen and (min-width: 1205px) {
      text-align: left;
      display: grid;
      grid-template-columns: 50% 50%;
      font-size: 1.5rem;
      place-items: center;
      .container {
        margin: 20px;
    }
  }
`

export default AboutInfo
