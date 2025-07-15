import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your items from here</h2>
            <p>Choose from a diverse items</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default header