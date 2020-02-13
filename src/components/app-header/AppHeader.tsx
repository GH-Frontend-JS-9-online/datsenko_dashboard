import React from 'react'
import './AppHeader.scss'
import TopMenu from '../top-menu/TopMenu'
import logo from '../../assets/images/logo.svg'

const AppHeader:React.FC = () => {
    const topMenuIcons: Array<string> = ['plus', 'search', 'bell', 'circle']
    return (
        <header className="header">
            <nav className="top-nav">
                <a href="#" className="top-nav__logo">
                    <img src={logo} alt="logo"/>
                </a>
                <TopMenu topMenuIcons={topMenuIcons}/>
            </nav>
        </header>
    )
}

export default AppHeader
