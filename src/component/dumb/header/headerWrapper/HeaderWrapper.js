import React from 'react'
import "./headerWrapper.css"

function HeaderWrapper({ children, ...restProps }) {
  return (
    <header className='header-wrapper' {...restProps}>
      {children}
    </header>
  )
}

export default HeaderWrapper