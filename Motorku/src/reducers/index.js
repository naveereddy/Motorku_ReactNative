import {createStore, combineReducers} from 'redux';
import  CalcReducer from './calcReducer'


const rootReducer = combineReducers({
    calcValue: CalcReducer
});

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore;