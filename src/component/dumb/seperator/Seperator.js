import React from 'react'
import './seperator.css'

export default function Seperator({ children, ...restProps }) {
  return (
    <div className='seperator' {...restProps}>
        {children}
    </div>
  )
}
