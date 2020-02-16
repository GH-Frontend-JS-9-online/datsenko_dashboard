import React from 'react'
import './Aside.scss'
import {NavLink} from 'react-router-dom'

interface IAside {
    asideMenuIcons: Array<string>
}

const Aside: React.FC<IAside> = props => {
    const links: Array<string> = ['/', '/projects', '/raport', '/inbox', '/authorization']
    return (
        <aside className="aside">
            <nav className="aside__nav">
                <ul className="aside__nav__menu">
                    {props.asideMenuIcons.map((item, index) => {
                        return (
                            <li key={index} className="aside__nav__menu__item">
                                <NavLink to={links[index]} className="aside__nav__menu__link" >
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


