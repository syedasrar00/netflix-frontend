import React from 'react'
import './content.css' 
import Row from '../row/Row'
import rowData from '../Constants'

export default function Content() {
    
    return (
    <div className='content-wrapper'>
      {rowData.map((item, index) => <Row genre={item.genre} url={item.url} key={index}/>)}
    </div>
  )
}
