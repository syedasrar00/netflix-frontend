import React from 'react'
import './accordianText.css'

export default function AccordianText({ children, isOpen, ...restProps}) {
    return (
    isOpen && <div className='accordian-text' {...restProps}>
        {children}
    </div>
  )
}
