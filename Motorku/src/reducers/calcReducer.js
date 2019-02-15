import {
    INCREMENT_VALUE,
    DECREMENT_VALUE,
    CLEAR_VALUE,
    SET_VALUE
} from '../Actions/types';

const CalcReducer = (state = 0, action) => {
    switch(action.type){
        case INCREMENT_VALUE: 
            return state + action.payload;
        case DECREMENT_VALUE:
            return state - action.payload;
        case CLEAR_VALUE:
            return 0;
        case SET_VALUE:
            return action.payload;
        default:
          return state;
    }
}

export default CalcReducer;