const rootReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return {}
        case 'UPDATE_PROJECTS':
            return {}
        case 'UPDATE_MESSAGES':
            return {}
        default:
            return state
    }
}

export default rootReducer
