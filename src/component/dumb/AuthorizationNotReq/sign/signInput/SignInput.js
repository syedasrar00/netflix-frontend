import React from 'react'
import './signInput.css'

export default function SignInput({ children, placeholder, ...restProps}) {
  return (
    <form className='sign-input-container' >
      <input className='sign-input' autoComplete="on" placeholder={placeholder} {...restProps}/>
      <span className="floating-label-sign">{children}</span>
    </form>
  )
}
