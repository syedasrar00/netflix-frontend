import React from 'react'
import './signInput.css'

export default function SignInput({ children, placeholder, ...restProps}) {
  return (
    <div className='sign-input-container' >
      <input className='sign-input' placeholder={placeholder} {...restProps}/>
      <span class="floating-label-sign">{children}</span>
    </div>
  )
}
