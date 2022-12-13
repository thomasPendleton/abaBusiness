import React from "react"
import styled from "styled-components"
import image from "../assets/learning-1.png"
const Methodologies = () => {
  return (
    <Wrapper>
      <div className="content">
        <h2>Methodologies</h2>
        <p>
          Acuity Behavior Solutions uses these common methodologies, as well as
          other research-based methods, to increase appropriate behavior and
          reduce inappropriate behavior
        </p>
        <p>DTT, or Discrete Trial Training</p>
        <p>Natural Environment Training (NET)</p>
        <p>Errorless Teaching</p>
      </div>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--purple);
  color: #fefefe;
  .content {
  }
  .image-container {
    width: 100%;
    img {
      width: 100%;
    }
  }
`
export default Methodologies
