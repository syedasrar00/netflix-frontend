import React from 'react'
import './footerLink.css'

export default function FooterLink({ children, textColor, ...restProps}) {
  return (
    <a href='/' className='footer-link' style={{color:textColor}} {...restProps}>{children}</a>
  )
}
