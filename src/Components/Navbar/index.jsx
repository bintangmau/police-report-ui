// MODULES
import React from 'react'
import { Link } from 'react-router-dom'

// CSS
import './style.css'

// ICON
import IconProfile from '../../Images/Profile/profile.png'
import Bell from '../../Images/Profile/bell.png'

export default function Navbar() {
    return (
        <div className='navbar-container'>

            <Link>
                <img 
                    src={Bell} 
                    alt="profile-icon"
                    className='profile-icon'
                />
            </Link>
            <Link to='/profile'>
                <img 
                    src={IconProfile} 
                    alt="profile-icon"
                    className='profile-icon'
                />
            </Link>
        </div>
    )
}
