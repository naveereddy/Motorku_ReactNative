import {
    GET_DEALERS_REQUEST
} from '../Actions/types'

const initialState = {}

export default function(state = initialState, action){
    switch(action.type) {
        case GET_DEALERS_REQUEST :
            return {
                ... state, dealersResponse: action.payload
            }
        default:
            return {
                ... state
            }
    }
}