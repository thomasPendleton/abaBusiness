import React from "react"
import styled from "styled-components"
import img from "../assets/paintHands.png"
const Helps = () => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <div className="container">
        <h3>Applied Behavior Analysis helps to reduce</h3>
        <h4>
          Problem Behavior for autism in children and Increase Your Child's
          Skills
        </h4>
        <p>
          ABA has been shown to be effective on a wide range of behaviors,
          including communication skills, social skills, academic skills,
          leisure activities, self-help skills, and reduction of inappropriate
          behaviors.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  font-family: Raleway, Arial, Tahoma, sans-serif;
  width: clamp(300px, 90%, 1200px);
  margin: 0 auto;
  img {
    width: 80%;
  }
  h3 {
    color: var(--purple);
    font-size: 1.6rem;
  }

  h4 {
    color: var(--black);
  }
  .btn {
    font-size: 1rem;
    padding: 15px 15px;
    background-color: transparent;
    color: var(--purple);
    border-radius: 2px;
    border: 1px solid var(--purple);
    cursor: pointer;
    &:hover {
      background-color: var(--purple);
      border: 1px solid #fff;
      color: #fff;
    }
  }
  @media screen and (min-width: 505px) {
    img {
        place-self: center;
      width: 55%;
    }
  }
  @media screen and (min-width: 905px) {
    display: grid;
    grid-template-columns: 50% 50%;
    width: clamp(300px, 90%, 1200px);
    img {
      margin: 0 auto;
    }
    .container {
      place-self: center;
      text-align: left;
    }
  }
`
export default Helps
