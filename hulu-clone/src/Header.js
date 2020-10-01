import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import HomeIcon from '@material-ui/icons/Home'

function Header() {
    return (
        <div className="header">
            <div className="header__icons">
                <HomeIcon/>

            </div>
            <img src="https://press:hulu.com/wp.content/uploads/2020/02/hulu-white.png" alt="logo"/>
        </div>
    )
}

export default Header
