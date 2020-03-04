import React from 'react'
import {useSelector} from 'react-redux'

const MiniProjects = () => {
    const projects = useSelector((state: any) => state.projects)
    return (
        <>
            <div className="mini-projects-header">
                Your projects
            </div>
            <div className="mini-projects-wrapper">
                {projects.map((item: any) => {
                    return (
                        <div className="project-card">
                            <div className="project-card-photo">
                                <i className="fas fa-circle"></i>
                            </div>
                            <div className="project-card-info">
                                <h4>{item.title}</h4>
                                <span>{item.company}</span>
                                <span><i className="fas fa-circle"></i></span>
                                <span>{item.cost}</span>
                            </div>
                            <div className="project-card-menu">
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default MiniProjects
