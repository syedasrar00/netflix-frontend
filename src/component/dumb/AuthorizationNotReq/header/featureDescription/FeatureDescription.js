import React from 'react'
import './featureDescription.css'

export default function FeatureDescription({ children, ...restProps}) {
  return (
    <h3 className='feature-description-home' {...restProps}>{children}</h3>
  )
}
