import React from "react"
import styled from "styled-components"
import image from "../assets/learning-1.png"
const Methodologies = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h2>Methodologies</h2>
          <p>
            Acuity Behavior Solutions uses these common methodologies, as well
            as other research-based methods, to increase appropriate behavior
            and reduce inappropriate behavior
          </p>
          <p>DTT, or Discrete Trial Training</p>
          <p>Natural Environment Training (NET)</p>
          <p>Errorless Teaching</p>
        </div>
        <div className="image-container">
          <img src={image} alt="" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 50px 0;
  padding: 10px 0 0;
  background-color: #852ebd;
  color: #fefefe;
  .content {
    margin: 0 auto;
    width: 90%;
  }
  .image-container {
    width: 100%;
    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 600px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0;
      margin: 0 auto;
      max-width: 800px;
    }
    .content {
      font-size: 0.8rem;
      text-align: start;
    }
    .image-container {
        max-height: 300px;
      place-self: center;
      
    }
  }
  @media screen and (min-width: 700px) {
    padding: 0;

    .content {
        font-size: 1.1rem;
    }
  }
`
export default Methodologies
