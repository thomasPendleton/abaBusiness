import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { BsClockHistory } from "react-icons/bs"
import image from "../assets/blog1.png"
const SingleBlog = () => {
  return (
    <Wrapper>
      <div className="image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3>
          New Year Resolutions & Positive Goals for Behavior Analysis Services
        </h3>
        <p>
          Why this year's Resolutions and Positive Goals will and SHOULD be
          different! It's been a few weeks into the New Year and we heard an
          overwhelming ...<Link to="..">Read More</Link>
        </p>
        <p className="author">Lindsay Nguyen </p>
        <small>
          January 28, 2021 <BsClockHistory className="clock-icon" /> 3 min read
        </small>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 20px auto;
  background-color: #fff;
  border-radius: 10px;
  object-fit: cover;
  text-align: start;
  box-shadow: 4px 4px 10px 0px rgba(37, 47, 63, 0.5);
  &:hover {
  }
  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .content {
    width: 95%;
    margin: 0 auto 20px;
    padding-bottom: 20px;
    a {
      cursor: pointer;
      color: var(--black);
    }
    small {
      display: flex;
      align-items: center;
    }
    .author{
        margin: 10px auto;
    }
    .clock-icon {
      /* position: absolute; */
      align-items: center;
      padding: 0;
      margin: 0px 5px 0 10px;
    }
  }
`
export default SingleBlog
