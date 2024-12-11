import React, { useEffect, useRef } from 'react'
import "./NavBar.css"
import Logo from "../../assets/logo.png"
import SearchIcon from "../../assets/search_icon.svg"
import BellIcon from "../../assets/bell_icon.svg"
import ProfileImg from "../../assets/profile_img.png"
import CaretIcon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase'

const NavBar = () => {

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('nav-dark');
        } else {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Clean up event listener
  }, []);
  

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={Logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={SearchIcon} alt="" className='icons'/>
        <p>Children</p>
        <img src={BellIcon} alt="" className='icons'/>
        <div className="navbar-profile">
            <img src={ProfileImg} alt="" className='profile'/>
            <img src={CaretIcon} alt=""/>
            <div className="dropdown">
                <p onClick={() => {logout()}}>Sign Out of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
