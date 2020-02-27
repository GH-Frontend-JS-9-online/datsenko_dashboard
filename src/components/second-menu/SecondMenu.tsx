import React from 'react'
import './SecondMenu.scss'
import {useSelector} from 'react-redux'
import ButtonOptions from '../button-options/ButtonOptions'

const SecondMenu:React.FC = () => {
    const projects = useSelector((state: any) => state.projects)
    return (
        <nav className="second-nav">
            <ul className="second-nav_menu">

                    <li className="second-nav_menu__item">
                        <a href="#" className="second-nav_menu__link">
                            {`All Projects (${projects.length})`}
                        </a>
                    </li>
                    <li className="second-nav_menu__item">
                        <a href="#" className="second-nav_menu__link">
                            Workflow
                        </a>
                    </li>
            </ul>
            <ButtonOptions beforeButtonText="Show projects" buttonName="All"/>
        </nav>
    )
}

export default SecondMenu
