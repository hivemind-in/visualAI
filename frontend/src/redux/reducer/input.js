import { INPUT_ACTIVE, INPUT_DEACTIVE } from "../actions/type/login";

const initialState = {
    type: INPUT_DEACTIVE,
    payload: {
        isActive: true,
        value: ""
    }
}

const inputToggle_reducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_ACTIVE:
            return {
                type: INPUT_ACTIVE,
                payload: {
                    isActive: true,
                    value = ""
                }
            }   
        case INPUT_DEACTIVE:
            return {
                ...state,
                type: INPUT_DEACTIVE,
                payload: {
                    isActive: false,
                }
            }
    
        default: return state
    }
}