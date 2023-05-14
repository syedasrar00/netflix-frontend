import React from 'react'
import './billboard.css'
import { BsFillPlayFill} from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function Billboard({ children, ...props}) {
  return (
    <div className='billboard-container' {...props}>
        <img src='images/home/bg-img-title.png' alt='' className='billboard-title-img'/>
        <p className='billboard-desc'>{children}</p>
        <div className='btn-container'>
          <button className='play-button'><BsFillPlayFill className='play-btn-icon' />Play</button>
          <button className='more-info-button'><AiOutlineInfoCircle className='more-info-btn-icon' />More Info</button>
        </div>
    </div>
  )
}
