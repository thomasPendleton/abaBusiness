import React from 'react'
import './index.css'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-info">
        <ul className="contact-header">
          <li>Acuity Behavior Solutions</li>
          <li>
            <AiFillPhone className='phone'/>
          </li>
          <li>(714) 696-2862</li>
          <li>
            <AiOutlineMail className='phone'/>
          </li>
          <li>info@acuitybehaviorsolutions.com</li>
        </ul>
      </div>
      <div className="header-nav">
        <a href="">
          <img
            src="https://www.acuitybehaviorsolutions.com/wp-content/uploads/2017/01/logo.png"
            className="App-logo"
            alt="logo"
          />
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Our Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Call Now</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
