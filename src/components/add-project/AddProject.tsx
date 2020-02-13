import React, {useContext, useState} from 'react'
import './AddProject.scss'
import dashboardApiServices from '../../services/DashboardServices'
import {IProject} from '../../interfaces/IProject'
import {ProjectContext} from '../../services/ProjectContext'

interface IAddProject {
    addProjectDisplay: string
}

const AddProject:React.FC<IAddProject> = props => {

    const updateProjects = useContext(ProjectContext)

    const [title, setTitle] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [cost, setCost] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')
    const [assigned, setAssigned] = useState<string>('')

    const addProject: any = React.createRef()
    const close = ():void => {
        addProject.current.style.display = 'none'
    }

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
    const assignedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAssigned(event.target.value)
    }

    const newProject: IProject = {
        title: title,
        company: company,
        cost: `$${cost}`,
        deadline: deadline,
        assigned: assigned
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
              dashboardApiServices
            .createProject(newProject)
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('projects', JSON.stringify(response))
                console.table(response)
            })
            .catch(err => console.error(err))
        console.log(newProject)
        setTitle('')
        setCompany('')
        setCost('')
        setDeadline('')
        setAssigned('')
        updateProjects()
    }

    return (
        <div ref={addProject} className="add-project" style={{display: props.addProjectDisplay}}>
            <div className="close" onClick={close}></div>
            <h1>Create new project</h1>
            <form action="#" onSubmit={handleSubmit} className="add-project__form">
                <input type="text" onChange={titleHandler} value={title} placeholder="Title..." required />
                <input type="text" onChange={companyHandler} value={company} placeholder="Company..." required />
                <input type="number" onChange={costHandler}  value={cost} placeholder="Cost..." min="0" required />
                <input type="tex" onChange={deadlineHandler} value={deadline} placeholder="Deadline..." required />
                <input type="text" onChange={assignedHandler} value={assigned} placeholder="Assigned..." required />
                <button type="submit">Add new Project</button>
            </form>
        </div>
    )
}

export default AddProject
