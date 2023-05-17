import React from 'react'
import './subscribeEmail.css'

export default function SubscribeEmail({ placeholder ,...restProps }) {
  return (
    <form className='email-box-container'>
      <input className='subscribe-email' autoComplete="on" placeholder={placeholder} {...restProps}/>
      <span className="floating-label">{placeholder}</span>
    </form>
  )
}
