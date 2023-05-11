import React from 'react'
import { RxPlus, RxCross1} from 'react-icons/rx'
import './accordianTitle.css'

export default function AccordianTitle({ children, isOpen, handleClick, ...restProps }) {
  return (
    <div className='accordian-title' onClick={() => handleClick()}>
      {children}
      {!isOpen && <RxPlus className='accordian-icon' />}
      {isOpen && <RxCross1 className='accordian-icon'/>}
    </div>
  )
}
