import React from 'react'
import './jumboItem.css'
import JumboImage from '../JumboImage/JumboImage'
import JumboTitle from '../jumboTitle/JumboTitle'
import JumboSubTitle from '../jumboSubTitle/JumboSubTitle'
import Seperator from '../../seperator/Seperator'

export default function JumboItem({ children, title, subTitle, imageSrc, imageAlt, alignment, ...restProps }) {
  return (
    <>
        <Seperator />
        {alignment&&<div className='jumbo-item'>
            <div className='text-container'>
                <JumboTitle >{title}</JumboTitle>
                <JumboSubTitle>{subTitle}</JumboSubTitle>    
            </div>
            <div>
                <JumboImage src={imageSrc} alt={imageAlt}></JumboImage>
            </div>
        </div>}
        {!alignment &&<div className='jumbo-item'>
            <div>
                <JumboImage src={imageSrc} alt={imageAlt}></JumboImage>
            </div>
            <div className='text-container'>
                <JumboTitle >{title}</JumboTitle>
                <JumboSubTitle>{subTitle}</JumboSubTitle>    
            </div>
        </div>}
    </>
  )
}
