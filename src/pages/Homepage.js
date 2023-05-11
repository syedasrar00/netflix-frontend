import React from 'react'
import HeaderComponent from '../component/smart/HeaderComponent'
import AccordianComponent from '../component/dumb/accordian/accordianComponent/AccordianComponent'
import SubscribeButton from '../component/dumb/form/subscribe/subscribebutton/SubscribeButton'
import SubscribeEmail from '../component/dumb/form/subscribe/subscribeemail/SubscribeEmail'
import SubscribeTitle from '../component/dumb/form/subscribe/subscribeTitle/SubscribeTitle'
import SubscribeWrapper from '../component/dumb/form/subscribe/subscribewrapper/SubscribeWrapper'

function Homepage() {
  return (
    <div className='homepage' style={{backgroundColor:'black', paddingBottom:"50px"}}>
        <HeaderComponent />
        <AccordianComponent />
        <SubscribeTitle>Ready to watch? Enter your email to create or restart your membership.</SubscribeTitle>
          <SubscribeWrapper className='subscribe-wrapper-home'>
            <SubscribeEmail type='email' placeHolder='Email Address'/>
            <SubscribeButton >Get Started</SubscribeButton>
          </SubscribeWrapper>
    </div>
  )
}

export default Homepage