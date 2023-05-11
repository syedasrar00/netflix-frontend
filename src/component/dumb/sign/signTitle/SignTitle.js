import React from 'react'
import './signTitle.css'

export default function SignTitle({ children, ...restProps}) {
  return (
    <h1 className='sign-title' {...restProps}>{children}</h1>
  )
}
