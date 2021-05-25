import axios from 'axios';
import { authData } from "../../components/SignIn/helpers";
import { AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from "./actionTypes";

export function login(formControls, type) {
    return async dispatch => {
        try {
            const { data } = await axios.post(type, authData(formControls));


            const expirationDate = new Date(new Date().getTime() + 900 * 1000)

            localStorage.setItem('token', data.idToken)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(loginSuccess(data.idToken));
            dispatch(autoLogout(data.expiresIn));
        } catch (err) {
            dispatch(loginError(err))
        }
    }
}


export function loginSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}


export function loginError() {
    return {
        type: AUTH_ERROR,
        isError: true,

    }

}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}


export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(loginSuccess(token));
                dispatch(autoLogout(expirationDate.getTime() + 900 / 1000));
            }
        }
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}