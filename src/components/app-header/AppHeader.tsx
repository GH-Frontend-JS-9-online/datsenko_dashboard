import React from 'react'
import './AppHeader.scss'
import TopMenu from '../top-menu/TopMenu'
import logo from '../../assets/images/logo.svg'
import {A} from 'hookrouter'

const AppHeader:React.FC = () => {
    const topMenuIcons: Array<string> = ['plus', 'search', 'bell', 'circle']
    return (
        <header className="header">
            <nav className="top-nav">
                <A href="/" className="top-nav__logo">
                    <img src={logo} alt="logo"/>
                </A>
                <TopMenu topMenuIcons={topMenuIcons}/>
            </nav>
        </header>
    )
}

export default AppHeader
