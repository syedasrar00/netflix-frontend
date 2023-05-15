import React, { useEffect } from 'react'
import './subscribeButton.css'
import { IoIosArrowForward } from 'react-icons/io'


export default function SubscribeButton({ children, ...restProps}) {
  const redirect = () => {
    location.href = './sign-up'
  }
  
  return (
    <div className='subscribe-btn-container' onClick={redirect}>
        <a className='subscribe-btn' href='./signup' {...restProps}>
            {children} 
        </a>
        <IoIosArrowForward className='subscribe-btn-arrow' />
    </div>
  )
}