import React from 'react'
import './jumboImage.css'

export default function JumboImage({ ...restProps }) {
  return (
    <div>
        <img className='jumbo-image' {...restProps} />
    </div>
  )
}
