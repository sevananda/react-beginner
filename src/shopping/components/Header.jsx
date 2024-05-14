import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className='title'>
                <h2>Ajio</h2>
            </div>

        </div>
        <div className='center'>
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
            </ul>

        </div>
        <div className="search">
            <input type = "text" placeholder='search. '/>
        </div>
        <div className="right">
            <div className='signin'>
                Sign in / Signup
            </div>
            <div className='cart'>
                Cart
            </div>

        </div>
    </div>
  )
}

export default Header