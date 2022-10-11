import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../assets/logo.png"
import { FaTimes } from "react-icons/fa"
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }
  console.log(sidebar)
  return (
    <Wrapper>
      <aside className={sidebar ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <img className="logo" src={Logo} alt="logo" />
          <button className="close-btn" onClick={() => toggleSidebar()}>
            <FaTimes />
          </button>
        </div>

        <ul>
          <li><Link to='/' >Home</Link></li>
        </ul>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  .sidebar {
    border-top: 1px solid grey;
    position: fixed;
    top: 4.7rem;
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
  }
  .logo {
    max-height: 45px;
    justify-self: center;
  }
  .close-btn {
    border: transparent;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;

    svg {
      margin-top: 0.4rem;
      align-items: center;
      color: red;
    }
  }
  @media screen and (min-width: 905px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
