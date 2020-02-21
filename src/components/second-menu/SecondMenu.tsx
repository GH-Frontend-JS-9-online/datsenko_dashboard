import React from 'react'
import './SecondMenu.scss'
import {useSelector} from 'react-redux'

const SecondMenu:React.FC = () => {
    const projects = useSelector((state: any) => state.projects)
    return (
        <nav className="second-nav">
            <ul className="second-nav__menu">
                <ul className="second-nav__left-menu">
                    <li className="second-nav__left-menu__item">
                        <a href="#" className="second-nav__left-menu__link">
                            {`All Projects (${projects.length})`}
                        </a>
                    </li>
                    <li className="second-nav__left-menu__item">
                        <a href="#" className="second-nav__left-menu__link">
                            Workflow
                        </a>
                    </li>
                </ul>
                <ul className="second-nav__right-menu">
                    <li className="second-nav__right-menu__item">
                        <a href="#" className="second-nav__right-menu__link">
                            Show projects:
                        </a>
                    </li>
                    <li className="second-nav__right-menu__item">
                        <a href="#" className="second-nav__right-menu__link">
                            All
                        </a>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}

export default SecondMenu
