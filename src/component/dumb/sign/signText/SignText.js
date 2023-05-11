import React from 'react'
import './signText.css'

export default function SignText({ children, ...restProps}) {
  return (
    <p className='sign-text' {...restProps}>{children}</p>
  )
}
