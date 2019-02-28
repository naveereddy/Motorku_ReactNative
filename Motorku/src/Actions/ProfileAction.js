import {
    GET_USER_REQUEST
} from './types'
import { AsyncStorage } from 'react-native'
import { BaseHeadersWithContentType, HttpMethods, BaseParams, APIType, PROFILE_URL, HOME_URL } from '../Utils/Config'

import { responseHandler} from './ResponseHandler'

export const getUserProfileRequest = () => dispatch => {

 AsyncStorage.getItem('access_token').then( token => {
    BaseHeadersWithContentType['Authorization'] = `Bearer ${token}`
    console.log(JSON.stringify(BaseHeadersWithContentType))
    
    let params = BaseParams
    params['Action'] = APIType.display

    let request = {
        headers: BaseHeadersWithContentType,
        method:HttpMethods.post,
        body: JSON.stringify(params),
    }

    fetch(HOME_URL + PROFILE_URL, request).
    then(res =>{
        responseHandler(GET_USER_REQUEST, res, dispatch)
    }).catch(error => {
        alert(error)
    })
 });
}