import React from 'react'
import './searchButton.css'
import { AiOutlineSearch } from 'react-icons/ai'

export default function SearchButton({ isOpen, toggleClick , ...props }) {
  return (
    !isOpen ? <AiOutlineSearch className='search-icon' onClick={toggleClick} {...props}/>
    : <div className='text-box-container'>
        <AiOutlineSearch className='search-icon' onClick={toggleClick} {...props} style={{marginRight:'-50px'}}/>
        <input type='text' placeholder='Title, people, genre' className='text-box'/>
      </div>
  )
}
