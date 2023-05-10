import React from 'react'
import './subscribeTitle.css'

export default function SubscribeTitle({ children, ...restProps}) {
  return (
    <p className='subscribe-title-home'>{children}</p>
  )
}
