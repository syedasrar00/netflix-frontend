import React from 'react'
import HeaderWrapper from '../dumb/header/headerWrapper/HeaderWrapper'
import Navbar from '../dumb/header/navbar/Navbar'
import Logo from '../dumb/header/logo/Logo'
import FeatureWrapper from '../dumb/header/featureWrapper/FeatureWrapper'
import FeatureTitle from '../dumb/header/featureTitle/FeatureTitle'
import SignInButton from '../dumb/header/SignInButton/SignInButton'

function HeaderComponent() {
  return (
    <HeaderWrapper>
        <Navbar className='navbar-home'>
            <Logo />
            <SignInButton />
        </Navbar>
        <FeatureWrapper className='feature-wrapper-home'>
          <FeatureTitle className='feature-title-home'>
            Unlimited movies, TV shows and more.
          </FeatureTitle>
        </FeatureWrapper>
    </HeaderWrapper>
  )
}

export default HeaderComponent