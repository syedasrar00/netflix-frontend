import React from 'react'
import HeaderWrapper from '../dumb/header/headerWrapper/HeaderWrapper'
import Navbar from '../dumb/header/navbar/Navbar'
import Logo from '../dumb/header/logo/Logo'
import SignInButton from '../dumb/SignInButton/SignInButton'

function HeaderComponent() {
  return (
    <HeaderWrapper>
        <Navbar className='navbar-home'>
            <Logo />
            <SignInButton />
        </Navbar>
    </HeaderWrapper>
  )
}

export default HeaderComponent