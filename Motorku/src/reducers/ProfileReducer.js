import {
    GET_USER_REQUEST
} from '../Actions/types'

const initialState = {}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_USER_REQUEST :
            return {
                ... state, userDetailsResponse: action.payload
            }
        default:
            return {
                ... state
            }
    }
}