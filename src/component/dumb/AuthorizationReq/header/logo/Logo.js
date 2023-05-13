import React from 'react'
import './logo.css'
function Logo({ ...props }) {
  return (
        <a {...props}><img className='logo' src='images/general/Netflix-Logo.png' alt='Netflix Logo'/></a>
  )
}

export default Logo