import React from 'react'
import './footerLink.css'

export default function FooterLink({ children, ...restProps}) {
  return (
    <a href='#' className='footer-link' {...restProps}>{children}</a>
  )
}
