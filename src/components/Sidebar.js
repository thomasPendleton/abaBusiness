import React, { useContext } from "react"
import { sidebarContext } from "../context/SidebarContext"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/logo.png"
import { FaTimes } from "react-icons/fa"

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(sidebarContext)

  console.log(isSidebarOpen, "context")

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>

        <div className="sidebar-header">
          <img className="logo" src={Logo} alt="logo" />
          <button className="close-btn" onClick={() => toggleSidebar()}>
            <FaTimes />
          </button>
        </div>

        <ul>
          <li onClick={() => toggleSidebar()}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li onClick={() => toggleSidebar()}>
            <a href="tel:714-696-2862">Call Now</a>
          </li>
        </ul>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  
  .sidebar {
    position: fixed;
    top: 4.5rem;
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
    border-top: 1px solid grey;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .logo {
    max-height: 60px;
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
    top: 3rem;
  }

  }
  @media screen and (min-width: 905px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
