import React, { useEffect, useState } from 'react'
import './CSS/headerComponent.css'
import HeaderWrapper from '../../dumb/AuthorizationReq/header/headerWrapper/HeaderWrapper'
import Logo from '../../dumb/AuthorizationReq/header/logo/Logo'
import Navbar from '../../dumb/AuthorizationReq/header/navbar/Navbar'
import NavLink from '../../dumb/AuthorizationReq/header/navLinks/NavLink'
import SearchButton from '../../dumb/AuthorizationReq/header/searchButton/SearchButton'
import NotificationButton from '../../dumb/AuthorizationReq/header/notificationButton/NotificationButton'
import ProfileButton from '../../dumb/AuthorizationReq/header/profile/ProfileButton'
import Billboard from '../../dumb/AuthorizationReq/header/billBoard/Billboard'

function HeaderComponent() {
  const [isOpen , setIsOpen] = useState();
  const [notificationIsOpen , setNotificationIsOpen] = useState();
  useEffect(()=>{
    setIsOpen(false);
    setNotificationIsOpen(false);
  },[])
  return (
    <HeaderWrapper className='header'>
        <Navbar style={{color:'white'}}>
            <div className='left-nav'>
              <Logo href='./'/>
              <div className='nav-links'>
                <NavLink href='./home'>Home</NavLink>
                <NavLink href='./'>TV Shows</NavLink>
                <NavLink href='./'>Movies</NavLink>
                <NavLink href='./'>New & Popular</NavLink>
                <NavLink href='./'>My List</NavLink>
                <NavLink href='./'>Browse by Languages</NavLink>
              </div>
            </div>
            <div className='right-nav'>
              <SearchButton  
                isOpen={isOpen}
                toggleClick={() => {
                  if(isOpen)setIsOpen(false);
                  else setIsOpen(true);
              }}/>
              <a className='nav-profile' href='./'>Profile</a>
              <NotificationButton  
                notificationIsOpen={notificationIsOpen}
                toggleClick={() => {
                  if(notificationIsOpen)setNotificationIsOpen(false);
                  else setNotificationIsOpen(true);
              }}/>
              <ProfileButton />
            </div>
        </Navbar>
        <Billboard >In a dystopian future devastated by air pollution, the survival of humanity depends on the Black Knights — and they’re far from your average deliverymen.</Billboard>
    </HeaderWrapper>
  )
}

export default HeaderComponent