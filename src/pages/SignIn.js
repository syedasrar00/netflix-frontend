import React from 'react'
import Navbar from '../component/dumb/AuthorizationNotReq/header/navbar/NavBar'
import Logo from '../component/dumb/AuthorizationNotReq/header/logo/Logo'
import FooterComponent from '../component/dumb/AuthorizationNotReq/footer/footerComponent/FooterComponent'
import SignInComponent from '../component/smart/AuthorizationNotReq/SignInComponent'

function SignIn() {
  return (
    <div className='signin' style={{background:'url(images/home/Netflix-Background.jpg)',backgroundSize:'cover'}}>
        <Navbar className='navbar-sign'>
              <Logo maxWidthOfImage='165px' marginLeft='-13px'/>
          </Navbar>
          <SignInComponent />
          <FooterComponent style={{backgroundColor:'black',opacity: "0.8", color:'#a0a0a0', paddingTop:'20px'}} textColor='#a0a0a0'/>
    </div>
  )
}

export default SignIn