import React from 'react'
import './footerComponent.css' 
import FooterLink from '../footerLink/FooterLink'

export default function FooterComponent({ children, ...restProps}) {
  return (
    <div className='footer-section'>
        <p className='heading'>Questions? Call <u>000-800-919-1694</u></p>
        <div className='footer-wrapper'>
            <div className='footer-col'>
                <FooterLink>FAQ</FooterLink>
                <FooterLink>Investor Relations</FooterLink>
                <FooterLink>Privacy</FooterLink>
                <FooterLink>Speed Test</FooterLink>
            </div>
            <div className='footer-col'>
                <FooterLink>Help Centre</FooterLink>
                <FooterLink>Jobs</FooterLink>
                <FooterLink>Cookie Preferences</FooterLink>
                <FooterLink>Legal Notice</FooterLink>
            </div>
            <div className='footer-col'>
                <FooterLink>Account</FooterLink>
                <FooterLink>Ways to Watch</FooterLink>
                <FooterLink>Corporate Information</FooterLink>
                <FooterLink>Only on Netflix</FooterLink>
            </div>
            <div className='footer-col'>
                <FooterLink>Media Centre</FooterLink>
                <FooterLink>Terms of Use</FooterLink>
                <FooterLink>Contact Us</FooterLink>
            </div>
        </div>
        <p className='footer-end'>Netflix India</p>
    </div>
  )
}
