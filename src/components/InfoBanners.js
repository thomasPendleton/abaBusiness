import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
const InfoBanners = () => {
  return (
    <Wrapper>
      <div className="infoBanner one">
        <h3>Applied Behavior Analysis (ABA)</h3>
        <img
          src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/abs.png"
          alt="banner icon"
        />
        <p>
          Language Development, Including Verbal and Non-Verbal Communication,
          Self-Help, Behavior and Social Skills.
        </p>
        <button className="btn">
          <Link to="/">See More</Link>
        </button>
      </div>

      <div className="infoBanner two">
        <h3>Family-Focused Education</h3>

        <img
          src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/fam-2.png"
          alt="banner icon"
        />
        <p>
          Parent and Caregiver Training Plans That Give You the Tools for
          Success With Your Child.
        </p>
        <button className="btn">
          <Link to="/">See More</Link>
        </button>
      </div>

      <div className="infoBanner three">
        <h3>Board Certified Behavior Analysts</h3>

        <img
          src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2016/02/certi.png"
          alt="banner icon"
        />
        <p>
          Making a Difference in the Lives of Our Clients With Our In-Depth
          History of ABA Experience.
        </p>
        <button className="btn">
          <Link to="/">See More</Link>
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* max-width: 98%; */
  /* margin: 10px auto 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  /* gap: 10px; */
  .one {
    background-color: #9d50bb;
    background: -webkit-linear-gradient(to right, #6e48aa, #9d50bb);
    background: linear-gradient(to right, #6e48aa, #9d50bb);
  }
  .two {
    background-color: #fbab73;
    background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  }
  .three {
    background-color: #f4d03f;
    background-image: linear-gradient(260deg, #f4d03f 0%, #16a085 100%);
  }

  .infoBanner {
    color: #fff;
    text-align: center;
    padding: 10px;
    p {
      max-height: 110px;
    }
    h3 {
      height: 50px;
      margin: 10px auto;
    }
    img {
      max-width: 100%;
    }
    button {
      background-color: transparent;
      font-weight: 700;
      margin-top: 40px;
      padding: 5px;
      border-radius: 99px;
      border: none;
      color: #fff;
      cursor: pointer;
      text-transform: uppercase;
      & > * {
        color: white;
        text-decoration: none;
        &:hover {
          color: #d9dddc;
        }
        &:active {
          color: gray;
        }
      }
    }
  }
  @media screen and (min-width: 550px) {
    margin: 10px auto 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .infoBanner {
      p {
        height: 110px;
      }
    }
  }
`
export default InfoBanners
