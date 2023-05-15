import React from 'react'
import './CSS/signInComponent.css'
import SignTitle from '../../dumb/AuthorizationNotReq/sign/signTitle/SignTitle'
import SignInput from '../../dumb/AuthorizationNotReq/sign/signInput/SignInput'
import SignButton from '../../dumb/AuthorizationNotReq/sign/signButton/SignButton'

export default function SignUpComponent() {
  return (
    <div className='signin-container'>
      <SignTitle >Sign Up</SignTitle>
      <SignInput 
        type='text'
        placeholder='email'
        >Name</SignInput>
        <SignInput 
        type='text'
        placeholder='email'
        >Email Id</SignInput>
        <SignInput 
        type='password'
        placeholder='password'
        >Password</SignInput>
        <SignButton>Sign Up</SignButton>
        <div className='sign-footer'>
            <div className='signup'>
              <p className='signup-text'>Already a user?</p><a className='signup-link' href='/login'>Sign in now.</a>
            </div>
            <div className='learnmore'>
              <p className='learn-more-text'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href='https://policies.google.com/terms' className='learn-more'>Learn more.</a></p>
            </div>
        </div>
    </div>
  )
}
