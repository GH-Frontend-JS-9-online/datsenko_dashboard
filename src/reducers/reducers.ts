enum ActionsDashboard {
    User = 'UPDATE_USER',
    Projects = 'UPDATE_PROJECTS',
    Messages = 'UPDATE_MESSAGES'
}

export const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case ActionsDashboard.User:
            return {}
        case ActionsDashboard.Projects:
            return {...state,  projects: [...state.projects, action.payload]}
        case ActionsDashboard.Messages:
            return {...state, allThreadMessages: [...state.allThreadMessages, action.payload]}
        default:
            return state
    }
}

export const updateProjects = (project: any) => ({
    type: ActionsDashboard.Projects,
    payload: project
})

export const updateMessages = (message: any) => ({
    type: ActionsDashboard.Projects,
    payload: message
})


