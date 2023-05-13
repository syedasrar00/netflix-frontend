import React from 'react'
import './subscribeWrapper.css'

export default function SubscribeWrapper({ children, ...restProps}) {
  return (
    <div {...restProps}>{children}</div>
  )
}
