import { AUTH_ERROR, AUTH_LOGOUT, AUTH_START, AUTH_SUCCESS } from "../actions/actionTypes";

const initialState = {
    email: '',
    token: null,
    isError: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                email: action.email,
            }

        case AUTH_START:
            return {
                ...state,
                isError: action.isError
            }
        case AUTH_ERROR:
            return {
                ...state,
                isError: action.isError

            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}