import React from 'react'
import HeaderWrapper from '../dumb/header/headerWrapper/HeaderWrapper'
import Navbar from '../dumb/header/navbar/Navbar'
import Logo from '../dumb/header/logo/Logo'
import FeatureWrapper from '../dumb/header/featureWrapper/FeatureWrapper'
import FeatureTitle from '../dumb/header/featureTitle/FeatureTitle'
import SignInButton from '../dumb/header/SignInButton/SignInButton'
import SubscribeWrapper from '../dumb/form/subscribe/subscribewrapper/SubscribeWrapper'
import SubscribeEmail from '../dumb/form/subscribe/subscribeemail/SubscribeEmail'
import SubscribeButton from '../dumb/form/subscribe/subscribebutton/SubscribeButton'
import FeatureDescription from '../dumb/header/featureDescription/FeatureDescription'
import SubscribeTitle from '../dumb/form/subscribe/subscribeTitle/SubscribeTitle'
import JumboComponent from '../dumb/jumbo/jumboComponent/JumboComponent'

function HeaderComponent() {
  return (
    <>
      <HeaderWrapper>
          <Navbar className='navbar-home'>
              <Logo />
              <SignInButton />
          </Navbar>
          <FeatureWrapper className='feature-wrapper-home'>
            <FeatureTitle className='feature-title-home'>
              Unlimited movies, TV shows and more.
            </FeatureTitle>
            <FeatureDescription>Watch anywhere. Cancel anytime.</FeatureDescription>
          </FeatureWrapper>
          <SubscribeTitle>Ready to watch? Enter your email to create or restart your membership.</SubscribeTitle>
          <SubscribeWrapper className='subscribe-wrapper-home'>
            <SubscribeEmail type='email' placeholder='Email Address'/>
            <SubscribeButton >Get Started</SubscribeButton>
          </SubscribeWrapper>
      </HeaderWrapper>
      <JumboComponent />
    </>
  )
}

export default HeaderComponent