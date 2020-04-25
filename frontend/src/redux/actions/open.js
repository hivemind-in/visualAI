import { OPEN_PROJECT} from "./type/open"

function openProjectPage(val) {
    return {
        type: OPEN_PROJECT,
        payload: {
            open: val
        }
    }
}

export default openProjectPage;