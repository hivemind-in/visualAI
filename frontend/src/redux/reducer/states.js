import { SEARCH } from "../actions/type/states";

const initState = {
    type: SEARCH,
    payload: {
        search: false
    }
}


const stateReducer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                type: SEARCH,
                payload: {
                    ...state.payload,
                    search: action.payload.value
                }
            }
        default: return state
    }
}

export default stateReducer;