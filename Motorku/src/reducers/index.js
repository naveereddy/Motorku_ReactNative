import { combineReducers } from 'redux';
import  loginReducer from './loginReducer'
import  profileReducer from './ProfileReducer'
import  dealerReducer from './DealerReducer'


const reducers = combineReducers({
    login: loginReducer,
    profile: profileReducer,
    dealer: dealerReducer
});

export default reducers;