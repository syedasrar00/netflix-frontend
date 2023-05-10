import React from 'react'
import './subscribeButton.css'
import { IoIosArrowForward } from 'react-icons/io'

export default function SubscribeButton({ children, ...restProps}) {
  return (
    <div className='subscribe-btn-container'>
        <a className='subscribe-btn' href='./signup' {...restProps}>
            {children} 
        </a>
        <IoIosArrowForward className='subscribe-btn-arrow' />
    </div>
  )
}