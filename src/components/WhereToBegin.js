import React from 'react'
import explainerVideo from "../assets/Final-Explainer-Video.mp4"
import styled from "styled-components"
const WhereToBegin = () => {
  return (
    <Wrapper>
      <h3>Why Choose Acuity Behavior Solutions?</h3>
      <div className="container">
        <div className="whereTo">
          <h4>Where To Begin:</h4>
          <h5>ABA Services and Autism Therapy in Orange County Ca</h5>
        </div>
        <video width="98%" controls>
          <source src={explainerVideo} type="video/mp4" />
          <source src={explainerVideo} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-family: Raleway, Arial, Helvetica, sans-serif;
margin: 110px 0;
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 2rem;
    color: var(--purple);
    margin: 15px 0;
  }
  h5 {
    margin: 5px 0 30px;
    font-size: 2rem;
  }
  @media screen and (min-width: 905px) {
    h3 {
      font-size: 2rem;
    }
    .whereTo {
      place-self: center;
    }
    .container {
      margin: 0 auto;
      width: clamp(300px, 90%, 1200px);
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
  }
  @media screen and (min-width: 1000px) {
  }
`

export default WhereToBegin