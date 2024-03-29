import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Mian Haseeb</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <div className="me">
                <img src={ME} alt="my pic" />
            </div>

            <a className='scroll__down' href="#contact"> Scroll Down</a>
        </div>

        <HeaderSocials/>

    </header>
  )
}

export default Header
