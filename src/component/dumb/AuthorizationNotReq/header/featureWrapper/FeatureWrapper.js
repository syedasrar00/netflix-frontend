import React from 'react'
import './featureWrapper.css'

export default function FeatureWrapper({ children, ...restProps}) {
  return (
    <div {...restProps}>
        {children}
    </div>
  )
}
