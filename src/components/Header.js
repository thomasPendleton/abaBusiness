import React, {useContext} from "react"
import { sidebarContext } from "../context/SidebarContext"
import { Link } from "react-router-dom"
import styled from "styled-components"
import HeaderContact from "./HeaderContact"
import { AiOutlineBars } from "react-icons/ai"

const Header = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(sidebarContext)

  return (
    <Wrapper>
      <HeaderContact />

      <div className="nav-center">
        <div className="nav-container">
          <div className="header-nav">
            <Link to="/">
              <img
                src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2017/01/logo.png"
                className="App-logo"
                alt="logo"
              />
            </Link>

            <button
              type="button"
              className="nav-toggle"
              onClick={() => toggleSidebar()}
            >
              <AiOutlineBars />
            </button>
          </div>

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
            {/* <li>
              <Link to="call">Call Now</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: #33a457;
  color: #fff;

  .nav-center {
    margin-top: 4.7rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-container {
    width: 90vw;
    margin: 0 auto;
  }
  .App-logo {
    height: 50px;
    cursor: pointer;
  }

  .header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background-color: transparent;
    border: transparent;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
  }

  .nav-links {
    display: none;
  }

  /* blue background transition on hover */
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
  @media screen and (min-width: 650px) {
    .nav-center {
      margin-top: 3rem;
    }
  }

  
  @media screen and (min-width: 905px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      margin-top: 3rem;
    }
    .nav-container {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      /* gap: 1.8rem; */
      font-size: 1.2rem;
      font-weight: 700;
      font-family: Montserrat;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      li {
        margin: 0 0.5rem;
      }
      a {
        text-transform: capitalize;
        padding: 0.5rem;
      }
    }
    .App-logo {
      height: 70px;
      cursor: pointer;
    }
  }
`

export default Header
