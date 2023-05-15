import React from 'react'
import './logo.css'
function Logo({ maxWidthOfImage, marginLeft}) {
  return (
        <img style={{maxWidth : maxWidthOfImage, marginLeft:marginLeft, filter:'brightness(0.9)'}} src='images/general/Netflix-Logo.png' alt='Netflix Logo'/>
  )
}

export default Logo