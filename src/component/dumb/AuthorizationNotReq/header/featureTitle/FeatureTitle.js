import React from 'react'
import './featureTitle.css'
export default function FeatureTitle({ children, ...restProps}) {
  return (
    <h1 {...restProps}>{children}</h1>
  )
}
