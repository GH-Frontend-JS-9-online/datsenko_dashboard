import React from 'react'
import './AppHeader.scss'
import TopMenu from '../top-menu/TopMenu'
import logo from '../../assets/images/logo.svg'
import {NavLink} from 'react-router-dom'

const AppHeader:React.FC = () => {
    const topMenuIcons: Array<string> = ['plus', 'search', 'bell', 'circle']
    return (
        <header className="header">
            <nav className="top-nav">
                <NavLink to="/" className="top-nav__logo">
                    <img src={logo} alt="logo"/>
                </NavLink>
                <TopMenu topMenuIcons={topMenuIcons}/>
            </nav>
        </header>
    )
}

export default AppHeader
