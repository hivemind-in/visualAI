import { SIGNUP_PAGE, LOGIN_PAGE } from "./type";

function setSignup() {
    return {
        type: SIGNUP_PAGE,
        payload: {
            signup: true,
            isError: false,
            error: ""
        }
    }
}

function setLogin() {
    return {
        type: LOGIN_PAGE,
        payload: {
            signup: false,
            isError: false,
            error: ""
        }
    }
}