import React from 'react'
import './ProjectMenu.scss'

const ProjectMenu:React.FC = () => {

    const projectMenuItems: Array<string> = [
        'Project title',
        'Value',
        'Deadline',
        'Time spent',
        'Progress',
        'Status',
        'Assigned to',
        ''
    ]

    return (
        <ul className="projects-menu">
            {projectMenuItems.map((item, index) => {
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
