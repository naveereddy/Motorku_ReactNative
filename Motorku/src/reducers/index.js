import { combineReducers } from 'redux';
import  loginReducer from './loginReducer'
import  profileReducer from './ProfileReducer'


const reducers = combineReducers({
    login: loginReducer,
    profile: profileReducer
});

export default reducers;