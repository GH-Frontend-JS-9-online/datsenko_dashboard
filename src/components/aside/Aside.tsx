import React from 'react'
import './Aside.scss'
import {NavLink} from 'react-router-dom'

const Aside: React.FC = () => {
    const asideMenuIcons: Array<string> = ['home', 'bars', 'chart-line', 'envelope', 'user-friends']
    const links: Array<string> = ['/', '/projects', '/raport', '/inbox', '/authorization']
    return (
        <aside className="aside">
            <nav className="aside__nav">
                <ul className="aside__nav__menu">
                    {asideMenuIcons.map((item, index) => {
                        return (
                            <li key={index} className="aside__nav__menu__item">
                                <NavLink exact to={links[index]} activeStyle={{color: '#fff'}} className="aside__nav__menu__link" >
                                    <i className={`fas fa-${item}`}></i>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Aside


