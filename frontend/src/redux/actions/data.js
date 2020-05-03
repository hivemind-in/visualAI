import { MODEL_DATA, DATA_DETAIL } from "./type/data";

export function setModel(val) {
    return {
        type: MODEL_DATA,
        payload: {
            name: val.name,
            learningRate: val.learningRate
        }
    }
}

export function setData(val) {
    return {
        type: DATA_DETAIL,
        payload: {
            location: val.location,
            name: val.name
        }
    }
}

export function setLayer(val) {
    return {
        type: MODEL_LAYER,
        payload: val
    }
}

