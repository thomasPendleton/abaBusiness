import React, { useState, useContext, useEffect, useCallback } from "react"
import { sidebarContext } from "../context/SidebarContext"
import { NavLink as navlink, Link } from "react-router-dom"
import styled from "styled-components"
import { debounce } from "../utilities/debouce"
import HeaderContact from "./HeaderContact"
import { AiOutlineBars } from "react-icons/ai"

const Header = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(sidebarContext)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = useCallback(() => {
    // console.log("scroll")

    // const currentScrollPos = window.pageYOffset

    // setVisible(
    //   (prevScrollPos > currentScrollPos &&
    //     prevScrollPos - currentScrollPos > 70) ||
    //     currentScrollPos < 10
    // )
    // setPrevScrollPos(currentScrollPos)

    const currentScrollPos = window.pageYOffset
    console.log(prevScrollPos - currentScrollPos)
    if (prevScrollPos - currentScrollPos > 0) {
      // console.log("difference ", prevScrollPos - currentScrollPos)
      // console.log("on up")
      setVisible(true)
    } else if (currentScrollPos < 150) {
      // console.log("currentscrollpos", currentScrollPos)
      setVisible(true)
    } else if (
      prevScrollPos > currentScrollPos &&
      prevScrollPos - currentScrollPos > 70
    ) {
      setVisible(true)
    } else {
      setVisible(false)
    }
    setPrevScrollPos(currentScrollPos)
  }, [prevScrollPos])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos, visible, handleScroll])

  return (
    <Wrapper style={{ top: visible ? "0" : "-150px" }}>
      <HeaderContact />

      <div className="nav-center">
        <div className="nav-container">
          <div className="header-nav">
            <Link to="/">
              <img
                src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2017/01/logo.png"
                className="app-logo"
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Our Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact Us</NavLink>
            </li>
            {/* <li>
              <NavLink to="call">Call Now</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const NavLink = styled(navlink)`
  position: relative;
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

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 0%;
    background-color: var(--color-secondary);
    transition: width 500ms ease;
  }
  &.active::after {
    width: 100%;
  }
  &:hover {
    background-position: 0%;
  }

  &.active {
    background-position: 0%;
  }
`

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 60;
  transition: top 400ms ease-in-out;

  background-color: #33a457;
  color: #fff;
  .nav-center {
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-container {
    width: 90vw;
    margin: 0 auto;
  }
  .app-logo {
     margin-top: 3px;
    height: 70px;
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
    font-size: 3rem;
  }

  .nav-links {
    display: none;
  }

  @media screen and (min-width: 650px) {
  }

  @media screen and (min-width: 905px) {
    .nav-toggle {
      display: none;
    }

    .nav-container {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      font-family: Montserrat;
      font-weight: 800;
      font-size: 1.6rem;
      justify-content: flex-end;
      li {
        margin: 0 0.9rem;
      }
      a {
        text-transform: capitalize;
        /* padding: 0.5rem; */
      }
    }
    .App-logo {
      height: 70px;
      cursor: pointer;
    }
  }
`

export default Header
