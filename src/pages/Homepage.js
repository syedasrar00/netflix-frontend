import React from 'react'
import HeaderComponent from '../component/smart/HeaderComponent'
import AccordianComponent from '../component/dumb/accordian/accordianComponent/AccordianComponent'
import FooterComponent from '../component/dumb/footer/footerComponent/FooterComponent'


function Homepage() {
  return (
    <div className='homepage' style={{backgroundColor:'black'}}>
        <HeaderComponent />
        <AccordianComponent />
        <FooterComponent textColor='rgb(94, 94, 94)'/>
    </div>
  )
}

export default Homepage