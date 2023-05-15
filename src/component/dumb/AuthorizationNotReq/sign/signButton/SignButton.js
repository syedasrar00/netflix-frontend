import React, { useEffect } from 'react'
import './signButton.css'

function SignButton({ children, ...restProps}) {
  const redirect = ()=>{
      location.href = './browse'
  }
  return (
    <button onClick={ redirect } className='sign-button' {...restProps}>{children}</button>
  )
}

export default SignButton