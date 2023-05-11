import React from 'react'
import Navbar from '../component/dumb/header/navbar/Navbar'
import Logo from '../component/dumb/header/logo/Logo'
import FooterComponent from '../component/dumb/footer/footerComponent/FooterComponent'
import SignInComponent from '../component/smart/SignInComponent'

function SignInPage() {
  return (
    <div className='signin-page' style={{background:'url(images/home/Netflix-Background.jpg)',backgroundSize:'cover'}}>
        <Navbar className='navbar-home'>
              <Logo />
          </Navbar>
          <SignInComponent />
          <FooterComponent style={{backgroundColor:'black',opacity: "0.8", color:'#a0a0a0', paddingTop:'20px'}} textColor='#a0a0a0'/>
    </div>
  )
}

export default SignInPage