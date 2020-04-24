import { INPUT_ACTIVE, INPUT_DEACTIVE } from "./type/input";

function setInputText(text){
    return {
        type: INPUT_ACTIVE,
        payload: {
            isActive: true,
            value: text
        }
    }
}