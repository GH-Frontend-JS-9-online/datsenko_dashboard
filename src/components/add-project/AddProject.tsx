import React, {useState} from 'react'
import './AddProject.scss'
import dashboardApiServices from '../../services/DashboardServices'
import {useSelector, useDispatch} from 'react-redux'
import {IProject} from '../../interfaces/IProject'
import {updateProjects} from '../../reducers/reducers'

interface IAddProject {
    addProjectDisplay: string
    close(): void
}

const AddProject:React.FC<IAddProject> = props => {
    const projects = useSelector((state: any) => state.projects)
    const dispatch = useDispatch()

    const [title, setTitle] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [cost, setCost] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')

    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const companyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompany(event.target.value)
    }
    const costHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCost(event.target.value)
    }
    const deadlineHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeadline(event.target.value)
    }
    const newProject: IProject = {
        title: title,
        company: company,
        cost: `$${cost}`,
        deadline: deadline,
        assigned: JSON.parse(localStorage.getItem('user') as string)._id
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        dashboardApiServices
            .createProject(newProject)
            .then(response => response.json())
            .then(response => {
                dispatch(updateProjects(response))
                dashboardApiServices
                    .getAllProjects()
                    .then(response => response.json())
                    .then(response => {
                        localStorage.setItem('projects', JSON.stringify([...localStorage.getItem('projects') as any, response]))
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
        setTitle('')
        setCompany('')
        setCost('')
        setDeadline('')
    }

    return (
        <div className="add-project" style={{display: props.addProjectDisplay}}>
            <div className="close" onClick={props.close}></div>
            <h1>Create new project</h1>
            <form action="#" onSubmit={handleSubmit} className="add-project__form">
                <input type="text" onChange={titleHandler} value={title} placeholder="Title..." required />
                <input type="text" onChange={companyHandler} value={company} placeholder="Company..." required />
                <input type="number" onChange={costHandler}  value={cost} placeholder="Cost..." min="0" required />
                <input type="tex" onChange={deadlineHandler} value={deadline} placeholder="Deadline..." required />
                <button type="submit">Add new Project</button>
            </form>
        </div>
    )
}

export default AddProject
