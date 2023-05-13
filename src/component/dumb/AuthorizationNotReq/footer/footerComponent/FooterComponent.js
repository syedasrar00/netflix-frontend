import React from 'react'
import './footerComponent.css' 
import FooterLink from '../footerLink/FooterLink'

export default function FooterComponent({ children, style, textColor, ...restProps}) {
  return (
    <div className='footer-section' style={style}>
        <div className='heading-container'>
        <p className='heading' style={{color:textColor}}>Questions? Call <u>000-800-919-1694</u></p>
        <div className='footer-wrapper'>
            <div className='footer-col'>
                <FooterLink textColor={textColor}>FAQ</FooterLink>
                <FooterLink textColor={textColor}>Investor Relations</FooterLink>
                <FooterLink textColor={textColor}>Privacy</FooterLink>
                <FooterLink textColor={textColor}>Speed Test</FooterLink>
            </div>
            <div className='footer-col'>
                <FooterLink textColor={textColor}>Help Centre</FooterLink>
                <FooterLink textColor={textColor}>Jobs</FooterLink>
                <FooterLink textColor={textColor}>Cookie Preferences</FooterLink>
                <FooterLink textColor={textColor}>Legal Notice</FooterLink>
            </div>
            <div className='footer-col'>
                <FooterLink textColor={textColor}>Account</FooterLink>
                <FooterLink textColor={textColor}>Ways to Watch</FooterLink>
                <FooterLink textColor={textColor}>Corporate Information</FooterLink>
                <FooterLink textColor={textColor}>Only on Netflix</FooterLink>
            </div>
            <div className='footer-col'>
                <FooterLink textColor={textColor}>Media Centre</FooterLink>
                <FooterLink textColor={textColor}>Terms of Use</FooterLink>
                <FooterLink textColor={textColor}>Contact Us</FooterLink>
            </div>
        </div>
        <p className='footer-end' style={{color:textColor}}>Netflix India</p>
        </div>
    </div>
  )
}
