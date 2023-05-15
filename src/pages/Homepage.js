import React from 'react'
import HeaderComponent from '../component/smart/AuthorizationReq/HeaderComponent'
import './CSS/homepage.css'
import BodyComponent from '../component/smart/AuthorizationReq/BodyComponent'

export default function Homepage() {
  return (
    <div className='homepage-container'>
        <HeaderComponent />
        <BodyComponent />
    </div>
  )
}
