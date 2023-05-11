import React from 'react'
import HeaderComponent from '../component/smart/HeaderComponent'
import AccordianComponent from '../component/dumb/accordian/accordianComponent/AccordianComponent'

function Homepage() {
  return (
    <div className='homepage' style={{backgroundColor:'black'}}>
        <HeaderComponent /><AccordianComponent />
    </div>
  )
}

export default Homepage