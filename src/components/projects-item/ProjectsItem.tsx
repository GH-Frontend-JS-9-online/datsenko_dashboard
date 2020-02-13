import React from 'react'
import './ProjectsItem.scss'
import convertDate from '../../services/convertDate'
import {IProjectsItem} from '../../interfaces/IProjectsItem'

const ProjectsItem: React.FC<IProjectsItem> = props => {
    return (
        <>
            {props.projectsItems.map(({title, timeSpent, company, cost, deadline, progress, status, assigned, _id}) => {
                return (
                    <ul key={_id as any} className="projects" style={
                        {borderColor: (progress === 0) ? '#e2e3e8' : (progress === 100) ? '#4caf50' : '#2196f3'}
                    }>
                        <li className="projects__item">
                            <div className="title">
                                <h4>{title}</h4>
                                <p>{company}</p>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="value">
                                <h4>{cost}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="deadline">
                                <h4>{`${convertDate(deadline)}`}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="time-spent">
                                <h4>{`${timeSpent} hours`}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="progress">
                                <h4>{`${progress}%`}</h4>
                                <div>
                                    <span style={{
                                        width: `${progress}%`,
                                        background: (progress === 0) ? '#9ea3b4' : (progress === 100) ? '#4caf50' : '#2196f3'
                                    }}>
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="status">
                                <h4>{status}</h4>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="assigned">
                                <i className="fas fa-circle"></i>
                                <div>
                                    <h4>{(assigned !== null) ? assigned.name : 'not found'}</h4>
                                    <p>{(assigned !== null) ? assigned.position : 'not found'}</p>
                                </div>
                            </div>
                        </li>
                        <li className="projects__item">
                            <div className="ellipsis">
                                <i className="fas fa-ellipsis-v"></i>
                            </div>
                        </li>
                    </ul>
                )
            })}
        </>
    )
}

export default ProjectsItem
