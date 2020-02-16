import {IUser} from '../interfaces/IUser'
import {IProject} from '../interfaces/IProject'

class DashboardApiServices {
    apiBase: string;
    constructor() {
        this.apiBase = `https://geekhub-frontend-js-9.herokuapp.com/api`
    }

    signUp(user: IUser):Promise<any> {
        return fetch(`${this.apiBase}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    login(user: IUser):Promise<any> {
        return fetch(`${this.apiBase}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    resetPassword(user: IUser):Promise<any> {
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

    getCurrentUser():Promise<any> {
        let token: string = localStorage.getItem('token') as any
        return fetch(`${this.apiBase}/users/`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
    }

    allThreadMessages():Promise<any> {
        let token: string = localStorage.getItem('token') as any
        let id: string = JSON.parse(localStorage.getItem('user') as string)._id
        return fetch(`${this.apiBase}/threads/messages/${id}`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
    }

    sendMessage(message: string):Promise<any> {
        let token: string = localStorage.getItem('token') as any
        let id: string = JSON.parse(localStorage.getItem('user') as string)._id
        return fetch(`${this.apiBase}/threads/messages`, {
            method: 'POST',
            headers: {
                'x-access-token': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                thread: {
                    _id: id
                },
                message: {
                    body: message
                }
            })
        })
    }

    getAllProjects():Promise<any> {
        let token: string = localStorage.getItem('token') as any
        return fetch(`${this.apiBase}/projects/`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
    }

    createProject(project: IProject):Promise<any> {
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
