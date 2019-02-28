import {
    LOGIN_REQUEST,
} from '../Actions/types'

const initialState = {}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_REQUEST :
            return {
                ...state,
                loginResponse: action.payload   
            }
        default:
            return {
                ...state
            }
    }
}