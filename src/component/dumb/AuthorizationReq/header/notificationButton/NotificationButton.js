import React from 'react'
import './notificationButton.css'
import { FaRegBell } from 'react-icons/fa'

export default function NotificationButton({ children, notificationIsOpen, toggleClick , ...props }) {
  return (
    <div>
      <FaRegBell className='notification-icon' onClick={toggleClick} />
      <div className='notification-box'>  
        {notificationIsOpen && 
          <div>
              <span className='arrow' /> 
              <span className='notification-container' {...props}>
                No recent notifications
              </span>
          </div>
        }
      </div>
    </div>
  )
}
