import React from 'react'
import HeaderWrapper from '../../dumb/AuthorizationNotReq/header/headerWrapper/HeaderWrapper'
import NavBar from '../../dumb/AuthorizationNotReq/header/navbar/NavBar'
import Logo from '../../dumb/AuthorizationNotReq/header/logo/Logo'
import FeatureWrapper from '../../dumb/AuthorizationNotReq/header/featureWrapper/FeatureWrapper'
import FeatureTitle from '../../dumb/AuthorizationNotReq/header/featureTitle/FeatureTitle'
import SignInButton from '../../dumb/AuthorizationNotReq/header/SignInButton/SignInButton'
import SubscribeWrapper from '../../dumb/AuthorizationNotReq/form/subscribe/subscribewrapper/SubscribeWrapper'
import SubscribeEmail from '../../dumb/AuthorizationNotReq/form/subscribe/subscribeemail/SubscribeEmail'
import SubscribeButton from '../../dumb/AuthorizationNotReq/form/subscribe/subscribebutton/SubscribeButton'
import FeatureDescription from '../../dumb/AuthorizationNotReq/header/featureDescription/FeatureDescription'
import SubscribeTitle from '../../dumb/AuthorizationNotReq/form/subscribe/subscribeTitle/SubscribeTitle'
import JumboComponent from '../../dumb/AuthorizationNotReq/jumbo/jumboComponent/JumboComponent'

function HeaderComponent() {
  return (
    <>
      <HeaderWrapper>
          <NavBar className='navbar-sign'>
              <Logo maxWidthOfImage='125px'/>
              <SignInButton />
          </NavBar>
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