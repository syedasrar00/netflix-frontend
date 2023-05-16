import React from 'react'
import './CSS/footerComponent.css'
import { AiOutlineTwitter, AiFillYoutube, AiOutlineCopyrightCircle } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import FooterLink from '../../dumb/AuthorizationReq/footer/footerLink/FooterLink'

export default function FooterComponent({ style, textColor }) {
  return (
    <div className='footer-home-section' style={style}>
        <div className='footer-heading-container'>
          <div className='footer-social-links'>
            <a href='/' className='heading-facebook'><FaFacebookF/></a>
            <a href='/' className='heading-instagram'><BsInstagram/></a>
            <a href='/' className='heading-twitter'><AiOutlineTwitter/></a>
            <a href='/' className='heading-youtube'><AiFillYoutube/></a>
          </div>
        <div className='footer-home-wrapper'>
            <div className='footer-home-col'>
                <FooterLink textColor={textColor}>Audio Description</FooterLink>
                <FooterLink textColor={textColor}>Investor Relations</FooterLink>
                <FooterLink textColor={textColor}>Legal Notices</FooterLink>
            </div>
            <div className='footer-home-col'>
                <FooterLink textColor={textColor}>Help Centre</FooterLink>
                <FooterLink textColor={textColor}>Jobs</FooterLink>
                <FooterLink textColor={textColor}>Cookie Preferences</FooterLink>
            </div>
            <div className='footer-home-col'>
                <FooterLink textColor={textColor}>Gift Cards</FooterLink>
                <FooterLink textColor={textColor}>Terms of Use</FooterLink>
                <FooterLink textColor={textColor}>Corporate Information</FooterLink>
            </div>
            <div className='footer-home-col'>
                <FooterLink textColor={textColor}>Media Centre</FooterLink>
                <FooterLink textColor={textColor}>Terms of Use</FooterLink>
                <FooterLink textColor={textColor}>Contact Us</FooterLink>
            </div>
        </div>
        <button className='service-code'>Service Code</button>
        <p className='footer-home-end' style={{color:textColor}}><AiOutlineCopyrightCircle style={{fontSize:'10px'}}/> 1997-2023 Netflix, Inc</p>
        </div>
    </div>
  )
}
