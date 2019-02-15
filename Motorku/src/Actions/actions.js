import {
    INCREMENT_VALUE,
    DECREMENT_VALUE,
    CLEAR_VALUE,
    SET_VALUE
 } from './types'

 export const increment = value => {
     return {
         type: INCREMENT_VALUE,
         payload: value
     }
 }

 export const decrement = value => {
     return {
         type: DECREMENT_VALUE,
         payload: value
     }
 }

 export const clear = () => {
    return {
        type: CLEAR_VALUE
    }
}

export const settingValue = value => {
    return {
        type: SET_VALUE,
        payload: value 
    }
}