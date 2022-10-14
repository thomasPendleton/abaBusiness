import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
const Subheader = () => {
  return (
    <Wrapper>
      <NavLink to="/about">About</NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  /* position: absolute; */
  /* height: 50px; */
  background-color: var(--color-secondary);
  width: 100%;
  transition: all 0.5s ease;
  /* transform: translateY(-50px); */
  z-index: -100;
  a {
    color: black;
    z-index: -1;
  }
`

export default Subheader
