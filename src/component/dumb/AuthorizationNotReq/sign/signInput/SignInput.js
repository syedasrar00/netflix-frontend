import React from 'react'
import './signInput.css'

export default function SignInput({ ...restProps}) {
  return (
    <input className='sign-input' {...restProps}/>
  )
}
