const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {}
        case 'UPDATE_PROJECTS':
            return {...state,  projects: [...state.projects, action.payload]}
        case 'UPDATE_MESSAGES':
            return {...state, allThreadMessages: [...state.allThreadMessages, action.payload]}
        default:
            return state
    }
}

export default rootReducer
