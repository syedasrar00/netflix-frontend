import React from 'react'
import './signButton.css'

function SignButton({ children, ...restProps}) {
  return (
    <button className='sign-button' {...restProps}>{children}</button>
  )
}

export default SignButton