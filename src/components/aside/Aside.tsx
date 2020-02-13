import React from 'react'
import './Aside.scss'

interface IAside {
    asideMenuIcons: Array<string>
}

const Aside:React.FC<IAside> = props => {
    return (
        <aside className="aside">
            <nav className="aside__nav">
                <ul className="aside__nav__menu">
                    {props.asideMenuIcons.map((item, index) => {
                        return (
                            <li key={index} className="aside__nav__menu__item">
                                <a href="#" className="aside__nav__menu__link" >
                                    <i className={`fas fa-${item}`}></i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Aside
