import KEYBOARD_ACTIVE from '../actions/type/keyboard'

const initalState = {
    type: KEYBOARD_ACTIVE,
    payload: {
        isActive: false,
        hasError: false,
        isNum: false,
        error: ""
    }
}

const keyboard_reducer = (state = initalState, action) => {
    switch (action.type) {
        case KEYBOARD_ACTIVE:
            return {
                ...state,
                type: KEYBOARD_ACTIVE,
                payload: {
                    isActive: true,
                    hasError: false,
                    isNum: false,
                    error: ""
                }
            }

        default: return state
    }
}