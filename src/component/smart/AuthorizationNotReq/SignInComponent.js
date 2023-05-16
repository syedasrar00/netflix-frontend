import React from 'react'
import './CSS/signInComponent.css'
import SignTitle from '../../dumb/AuthorizationNotReq/sign/signTitle/SignTitle'
import SignInput from '../../dumb/AuthorizationNotReq/sign/signInput/SignInput'
import SignButton from '../../dumb/AuthorizationNotReq/sign/signButton/SignButton'

export default function SignInComponent() {
  return (
    <div className='signin-container'>
      <SignTitle >Sign In</SignTitle>
      <SignInput 
        type='text'
        placeholder='Email'
        >Email Id</SignInput>
        <SignInput 
        type='password'
        placeholder='Password'
        >Password</SignInput>
        <SignButton>Sign In</SignButton>
        <div className='rem-container'>
          <div className='checkbox'>
            <input className='remember-me' type="checkbox" id="remember" name="remember" value="Remember me" />
            <label htmlFor="remember" className='remember-me-text'> Remember me</label></div>
          <p className='need-help'>Need Help?</p>
        </div>
        <div className='sign-footer'>
            <div className='signup'>
              <p className='signup-text'>New to Netflix?</p><a className='signup-link' href='/signup'>Sign up now.</a>
            </div>
            <div className='learnmore'>
              <p className='learn-more-text'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href='https://policies.google.com/terms' className='learn-more'>Learn more.</a></p>
            </div>
        </div>
    </div>
  )
}
