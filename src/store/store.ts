import {createStore} from 'redux'
import {rootReducer} from '../reducers/reducers'

let initialState: any = {
    user: [{...JSON.parse(<any>localStorage.getItem('user'))} || {}],
    projects: [...JSON.parse(<any>localStorage.getItem('projects')) || []],
    allThreadMessages: [...JSON.parse(<any>localStorage.getItem('allThreadMessages')) || []]
}

const store = createStore(rootReducer, initialState)

export default store
