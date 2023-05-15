import React, { useState, useEffect } from 'react'
import './navbar.css'


function Navbar({ children, ...restProps}) {
    const [navBg, setNavBg] = useState(false);
    const changeNavBg = () =>
    {
      window.scrollY >= 40 ? setNavBg(true) : setNavBg(false);
    }
    
    useEffect(() => {
      window.addEventListener('scroll', changeNavBg);
      return () => {
        window.removeEventListener('scroll',changeNavBg)
      }
    }, [])
    
    return (
      <nav className={ navBg ?'navbar-home scroll':'navbar-home'} {...restProps}>
          {children}
      </nav>
      
    )
  }
  
  export default Navbar