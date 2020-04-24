import { LOGIN_PAGE, SIGNUP_PAGE } from "../actions/type/login";

const initialState = {
    type: LOGIN_PAGE,
    paylaod: {
        signup: false,
        isError: false,
        error: ""
    }
}

const  toggleLogin_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_PAGE: return {
            type: SIGNUP_PAGE,
            paylaod: {
                signup: true,
                isError: false,
                error: ""
            }
        }
        case LOGIN_PAGE: return {
            type: LOGIN_PAGE,
            paylaod: {
                signup: false,
                isError: false,
                error: ""
            }
        }
    
        default: return state
    }
}