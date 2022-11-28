import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import img from "../assets/not-found.svg"

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="">
        <img src={img} alt="not found" />
        <h3>Oh! Page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  img {
    width: 90vw;
    display: block;
    max-width: 600px;
  }
  a {
    color: black;
    text-decoration: underline;
    text-transform: capitalize;
  }
`
export default ErrorPage
