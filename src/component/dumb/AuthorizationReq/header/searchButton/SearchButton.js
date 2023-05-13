import React from 'react'
import './searchButton.css'
import { FaSearch } from 'react-icons/fa'

export default function SearchButton({ ...props }) {
  return (
    <FaSearch className='search-icon' {...props}/>
  )
}
