import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_SOCIALS_PENDING, 
    REQUEST_SOCIALS_SUCCESS, 
    REQUEST_SOCIALS_FAILED
} from "./constants";

const initialStateSearch = {
    searchField: ''
}

export const searchApps = (state=initialStateSearch, { type, payload } ) => {
    switch(type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state,
                    searchField: payload
                }
        default:
            return state;
    }
}

const initialStateSocials = {
    isPending: false,
    socials: [],
    error: null
}

export const requestApps = (state=initialStateSocials, action) => {
    switch(action.type) {
        case REQUEST_SOCIALS_PENDING:
            return {
                ...state,
                isPending: true
            }
        case REQUEST_SOCIALS_SUCCESS:
            return {
                ...state,
                isPending: false,
                socials: action.payload
            }
        case REQUEST_SOCIALS_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.error
            }
        default:
            return state;
    }
}