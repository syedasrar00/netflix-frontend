import React, { useState } from 'react'
import './navbar.css'


function Navbar({ children, ...restProps}) {
    const [navBg, setNavBg] = useState(false);
    const changeNavBg = () =>
    {
      window.scrollY >= 40 ? setNavBg(true) : setNavBg(false);
      console.log(window.scrollY)
    }
    window.addEventListener('scroll', changeNavBg);
    return (
      <nav className={ navBg ?'navbar-home scroll':'navbar-home'} {...restProps}>
          {children}
      </nav>
      
    )
  }
  
  export default Navbar