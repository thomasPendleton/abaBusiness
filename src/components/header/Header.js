import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import HeaderContact from "./HeaderContact"
import "./index.css"

const Header = () => {
  return (
    <Wrapper className="app-header">
      <HeaderContact />

      <div className="header-nav">
        <Link to="/">
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2017/01/logo.png"
            className="App-logo"
            alt="logo"
          />
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
            <li>
              <Link to="call">Call Now</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: #33a457;
  color: #fff;

  .App-logo {
    height: 70px;
    cursor: pointer;
  }

  .header-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .nav-links a {
    transition: 0.4s ease-in-out;

    background: linear-gradient(
      0.25turn,
      var(--color-secondary),
      var(--color-secondary),
      white 50%
    );
    background-size: 400%;
    background-position: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-links a:hover {
    background-position: 0%;
  }
`

export default Header
