import React from 'react'
import './jumboSubTitle.css'

export default function JumboSubTitle({ children, ...restProps}) {
  return (
    <h2 className='jumbo-sub-title' {...restProps}>{children}</h2>
  )
}
