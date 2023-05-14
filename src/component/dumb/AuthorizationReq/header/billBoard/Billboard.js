import React from 'react'
import './billboard.css'
import { BsFillPlayFill} from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function Billboard({ children, ...props}) {
  return (
    <div className='billboard-container' {...props}>
        <img src='images/home/bg-img-title.png' alt='' className='billboard-title-img'/>
        <div className='top-10-container'>
          <img src='images/general/top10.png' alt='top 10' className='top-10-icon'/>
          <p className='top-rank'>#3 in TV Shows Today</p>
        </div>
        <p className='billboard-desc'>{children}</p>
        <div className='btn-container'>
          <button className='play-button'><BsFillPlayFill className='play-btn-icon' />Play</button>
          <button className='more-info-button'><AiOutlineInfoCircle className='more-info-btn-icon' />More Info</button>
        </div>
    </div>
  )
}
