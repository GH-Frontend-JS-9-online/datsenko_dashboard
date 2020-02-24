import React from 'react'
import './Aside.scss'
import { A } from 'hookrouter'

const Aside: React.FC = () => {
    const asideMenuIcons: Array<string> = ['home', 'bars', 'chart-line', 'envelope', 'user-friends']
    const links: Array<string> = ['/', '/projects', '/raport', '/inbox', '/login']
    return (
        <aside className="aside">
            <nav className="aside__nav">
                <ul className="aside__nav__menu">
                    {asideMenuIcons.map((item, index) => {
                        return (
                            <li key={index} className="aside__nav__menu__item">
                                <A href={links[index]} className="aside__nav__menu__link" >
                                    <i className={`fas fa-${item}`}></i>
                                </A>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Aside


