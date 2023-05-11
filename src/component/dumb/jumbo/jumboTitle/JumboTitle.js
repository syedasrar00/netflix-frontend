import React from 'react'
import './jumboTitle.css'

export default function JumboTitle({ children, ...restProps}) {
  return (
    <h1 className='jumbo-title' {...restProps}>{children}</h1>
  )
}
