import { MODEL_DATA, DATA_DETAIL, MODEL_LAYER} from "../actions/type/data";

const initState = {
    type: MODEL_DATA,
    payload: {
        name: "",
        learningRate: 0,
        data: {
            name: "",
            location: "",
        },
        layers:[]
    }
}

const dataReducer = (state = initState, action) => {
    switch(action.type){
        case MODEL_DATA:
            return {
                type: MODEL_DATA,
                payload: {
                    ...state.payload,
                    name: action.payload.name,
                    learningRate: action.payload.learningRate
                }
            }
        case DATA_DETAIL:
            return {
                type: DATA_DETAIL,
                payload: {
                    ...state.payload,
                    data: {
                        ...state.payload.data,
                        location : action.payload.location,
                        name: action.payload.name
                    }
                }
            }
        case MODEL_LAYER:
            return {
                type: MODEL_LAYER,
                payload: {
                    ...state.payload,
                    layers: action.payload
                }
            }
        default: return state
    }
}

export default dataReducer;