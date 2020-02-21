import {createStore} from 'redux'
import {rootReducer} from '../reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

let initialState: any = {
    user: [{...JSON.parse(<any>localStorage.getItem('user'))} || {}],
    projects: [...JSON.parse(<any>localStorage.getItem('projects')) || []],
    allThreadMessages: [...JSON.parse(<any>localStorage.getItem('allThreadMessages')) || []]
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools()
)

export default store
