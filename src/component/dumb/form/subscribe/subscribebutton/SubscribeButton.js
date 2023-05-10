import React from 'react'
import './subscribeButton.css'

export default function SubscribeButton({ children, ...restProps}) {
  return (
    <div>
        <a className='subscribe-btn' href='./signup' {...restProps}>
            {children}
        </a>
        <img className='subscribe-btn-arrow'
        src=''
        alt='Try Now'
        />
    </div>
  )
}
