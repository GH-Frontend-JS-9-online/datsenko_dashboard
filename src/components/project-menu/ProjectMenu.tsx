import React from 'react'
import './ProjectMenu.scss'

interface IProjectMenu {
    projectMenuItems: Array<string>
}

const ProjectMenu:React.FC<IProjectMenu> = props => {
    return (
        <ul className="projects-menu">
            {props.projectMenuItems.map((item, index) => {
                return (
                    <li key={index} className="projects-menu__item">
                        <h4>{item}</h4>
                    </li>
                )
            })}
        </ul>
    )
}

export default ProjectMenu
