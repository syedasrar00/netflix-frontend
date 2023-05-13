import React from 'react'
import HeaderComponent from '../component/smart/AuthorizationNotReq/HeaderComponent'
import AccordianComponent from '../component/dumb/AuthorizationNotReq/accordian/accordianComponent/AccordianComponent'
import FooterComponent from '../component/dumb/AuthorizationNotReq/footer/footerComponent/FooterComponent'


function SignHomepage() {
  return (
    <div className='homepage' style={{backgroundColor:'black'}}>
        <HeaderComponent />
        <AccordianComponent />
        <FooterComponent textColor='rgb(94, 94, 94)'/>
    </div>
  )
}

export default SignHomepage