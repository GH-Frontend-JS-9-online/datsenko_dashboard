import {IUser} from '../interfaces/IUser'
import {IProject} from '../interfaces/IProject'

class DashboardApiServices {
    apiBase: string;
    constructor() {
        this.apiBase = `https://geekhub-frontend-js-9.herokuapp.com/api`
    }

    signUp(user: IUser) {
        return fetch(`${this.apiBase}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    login(user: IUser) {
        return fetch(`${this.apiBase}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    resetPassword(user: IUser) {
        let token: string = localStorage.getItem('token') as any
        return fetch(`${this.apiBase}/users/reset_password`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    getAllProjects() {
        let token: string = localStorage.getItem('token') as any
        return fetch(`${this.apiBase}/projects/`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
    }

    createProject(project: IProject) {
        let token: string = localStorage.getItem('token') as any
        return fetch(`${this.apiBase}/projects/`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
    }

}
const dashboardApiServices = new DashboardApiServices()
export default dashboardApiServices
