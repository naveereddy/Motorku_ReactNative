import {
    LOGIN_REQUEST,
} from './types'
import { responseHandler } from './ResponseHandler';
import {HttpMethods, HOME_URL, SIGN_IN_URL, BaseHeaders, BaseParams, AccountType} from "../Utils/Config";
import DeviceInfo from 'react-native-device-info';
import { AsyncStorage } from 'react-native'

export const loginRequest = (userData) => dispatch =>{
    if (!userData.username || !userData.password) {
        return dispatch({
            type: LOGIN_REQUEST,
            payload: {status: 'ERROR', message:'Enter required fields'}
       })
    }
    let formData = {};
    for(let key in BaseParams){
        formData[key]=BaseParams[key]
    }
    formData["grant_type"] = "password"
    formData["AccountType"] = AccountType.astra
    formData["DeviceID"] = DeviceInfo.getUniqueID()
    formData["username"] = userData["username"]
    formData["password"] = userData["password"]
    AsyncStorage.getItem("ApnsToken").then(token =>{
        formData["TokenId"]  = token
        let formBody = []
        for (let key in formData){
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(formData[key]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        let request = {
            method: HttpMethods.post,
            headers:BaseHeaders,
            body: formBody
        }
        console.log(request)
        fetch( HOME_URL + SIGN_IN_URL, request).then(res => {
            responseHandler(LOGIN_REQUEST, res, dispatch);
        }).catch(err => {
            // nothing
            alert(err);
        }); 
    })

    
}
