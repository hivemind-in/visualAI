import { OPEN_PROJECT, CLOSE_PROJECT } from "../actions/type/open"

const initState = {
    type: OPEN_PROJECT,
    payload: {
        open: false
    }
}

const openProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_PROJECT:
            return {
                ...state,
                type: OPEN_PROJECT,
                payload: {
                    open: action.payload.open
                }
            }
    
        default:
            return state
    }
}

export default openProjectReducer;