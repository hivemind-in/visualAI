import { SEARCH } from "./type/states";


export function setSearch(val) {
    return {
        type: SEARCH,
        payload: {
            value: val
        }
    }
}