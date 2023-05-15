import React from 'react'
import './subscribeEmail.css'

export default function SubscribeEmail({ placeholder ,...restProps }) {
  return (
    <div className='email-box-container'>
      <input className='subscribe-email' placeholder={placeholder} {...restProps}/>
      <span class="floating-label">{placeholder}</span>
    </div>
  )
}
