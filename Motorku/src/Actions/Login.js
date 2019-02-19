import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './types'

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

export const loginResponseSuccess = (json) => {
    return {
        type: LOGIN_SUCCESS,
        payload: json
    }
}

export const loginResponseFailure = (error) =>{
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

export const login = () => {
    return async dispatch => {
        dispatch(loginRequest());
        try {
            let response = await fetch();
            let json = response.json();
            dispatch(loginResponseSuccess(json));
        }catch(error){
            dispatch(loginResponseFailure(error));
        }
    }

}
