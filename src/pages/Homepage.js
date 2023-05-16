import React, { useEffect } from 'react'
import HeaderComponent from '../component/smart/AuthorizationReq/HeaderComponent'
import './CSS/homepage.css'
import BodyComponent from '../component/smart/AuthorizationReq/BodyComponent'
import FooterComponent from '../component/smart/AuthorizationReq/FooterComponent'

export default function Homepage() {
  useEffect(()=>{
    document.title='Home - Netflix'
  },[])
  return (
    <div className='homepage-container'>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent textColor='rgb(94, 94, 94)'/>
    </div>
  )
}
