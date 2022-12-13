import React from "react"
import styled from "styled-components"
import image from "../assets/teach-1-removebg.png"
const Contracted = () => {
  return (
    <Wrapper>
      <h4>We are contracted with various insurance companies.</h4>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <p>
        We accept many insurance plans, <b>please feel free and call for more info</b>.
        Private pay is another option for our patients who don't currently have
        insurance coverage. Our knowledgeable billing associates will determine
        what your plan covers and your financial responsibilities.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 95%;
  margin: 0 auto;
  max-width: 800px;
  font-size: 1.1rem;
  h4 {
    font-weight: 400;
  }
  .img-container {
    width: 100%;
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 905px) {
    h4{
        font-size: 1.6rem
    }
    p{
        font-size: 1.45rem;

    }
  }
`
export default Contracted
