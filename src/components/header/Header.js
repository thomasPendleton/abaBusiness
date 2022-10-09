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

        <div className="burger-wrapper">
          <div class="burger ten activated">
            <span></span>
            <span></span>
          </div>
        </div>


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
    height: 40px;
    cursor: pointer;
  }
  .header-nav{
    display: flex;
    align-items: center;
    
    justify-content: space-around;
  }


  .burger-wrapper {
    
  }
  .burger-wrapper .item {
    width: calc(33% - 30px);
    padding: 15px;
  }
  .burger {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 30px;
    padding: 10px;
    cursor: pointer;
    overflow: hidden;
  }
  .burger span {
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: all 0.25s;
  }

  .burger.ten {
    justify-content: space-around;
  }
  .burger.ten.activated span:nth-child(1) {
    transform: translateY(4px) rotate(45deg);
  }
  .burger.ten.activated span:nth-child(2) {
    transform: translateY(-1px) rotate(-45deg);
  }
  @keyframes burger {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  .nav-links {
    display: none;
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

  @media screen and (min-width: 504px) {
    .header-nav {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 10px;
    }
    .burger-wrapper{
      display: none;
    }
    .nav-links {
      display: flex;
      gap: 1rem;
      font-size: 0.85rem;
      font-weight: 700;
    }
  }
  @media screen and (min-width: 660px) {
    .nav-links {
      display: flex;
      gap: 1.8rem;
      font-size: 1.1rem;
      font-weight: 700;
    }
    .App-logo {
      height: 50px;
      cursor: pointer;
    }
  }
`

export default Header
