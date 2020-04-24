
import { KEYBOARD_ACTIVE , KEYBOARD_DEACTIVE} from './type/keyboard'

function setActive() {
    return {
        type: KEYBOARD_ACTIVE,
        payload: {
            isActive: true,
            hasError: false,
            isNum: false,
            error: ""
        }
    }
}

function setDeactive() {
    return {
        type: KEYBOARD_DEACTIVE,
        payload: {
            isActive: false,
            hasError: false,
            inNum: false,
            error: ""
        }
    }
}