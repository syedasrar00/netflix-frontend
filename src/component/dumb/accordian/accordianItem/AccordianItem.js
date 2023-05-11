import React from 'react'
import './accordianItem.css'

export default function AccordianItem({ children, ...restProps}) {
  return (
    <div className='accordian-item' {...restProps}>{children}</div>
  )
}
