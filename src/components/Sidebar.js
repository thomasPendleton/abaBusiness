import React, { useContext } from "react"
import { sidebarContext } from "../context/SidebarContext"
import { NavLink, Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/logo.png"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(sidebarContext)

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img className="logo" src={Logo} alt="logo" />
          <h2 className="acuity">Acuity Behavior Solutions</h2>
          <button className="close-btn" onClick={() => toggleSidebar()}>
            <FaTimes />
          </button>
        </div>

        <ul className="link-list">
          <li>
            <NavLink onClick={() => toggleSidebar()} className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleSidebar()}
              className="link"
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleSidebar()}
              className="link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleSidebar()}
              className="link"
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => toggleSidebar()}
              className="link"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <a
              onClick={() => toggleSidebar()}
              className="link"
              href="tel:714-696-2862"
            >
              Call Now
            </a>
          </li>
        </ul>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;

  a {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      height: 2px;
      width: 0%;
      background-color: #33a457;
      transition: width 500ms ease;
    }
    &:hover::after {
      width: 100%;
      background-position: 0%;
    }
    &.active::after {
      width: 100%;
    }
  }

  li {
    border-bottom: 1px solid white;
    .active {
      color: var(--color-primary);
      border-color: #33a457;
    }
    &:hover {
      /* border-color: #33a457; */
    }
    .link {
      transition: all 0.3s ease;
      &:hover {
        color: #33a457;
        border-color: #33a457;
      }
    }
  }

  .link-list {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
  }
  .link {
    color: #fff;
    font-size: 3rem;
    text-decoration: none;
    filter: drop-shadow(1px 1px 1px rgba(10, 10, 10, 0.5));
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #aaf2d4;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    .acuity {
      color: #33a457;
      filter: drop-shadow(1px 1px 2px #fff);
      font-size: 1.5rem;
    }
  }
  .logo {
    max-height: 80px;
    justify-self: center;
  }
  .close-btn {
    border: transparent;
    background-color: transparent;
    font-size: 2.5rem;
    cursor: pointer;

    svg {
      margin-top: 0.4rem;
      align-items: center;
      color: red;
    }
  }

  @media screen and (min-width: 650px) {
    .sidebar {
      /* top: 3rem; */
    }
  }
  @media screen and (min-width: 905px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
