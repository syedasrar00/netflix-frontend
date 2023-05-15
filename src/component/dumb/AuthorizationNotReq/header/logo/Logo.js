import React from 'react'
import './logo.css'
function Logo({ maxWidthOfImage}) {
  return (
        <img style={{maxWidth : maxWidthOfImage}} src='images/general/Netflix-Logo.png' alt='Netflix Logo'/>
  )
}

export default Logo