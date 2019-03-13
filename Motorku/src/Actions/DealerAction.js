import {
    GET_DEALERS_REQUEST,
} from './types'
import { responseHandler } from './ResponseHandler';
import {HttpMethods,API_URL,GET_BRANCH, BaseHeaders, BaseParams, AccountType} from "../Utils/Config";
import { AsyncStorage } from 'react-native'


export const dealerRequest = (isFavorite = false, isNearest = false, isLastDealer = false, latitude = 0.0, longitude = 0.0,
 searcKeyword = "") => dispatch => {

    let params = {}
    params["CompanyCode"] = "0005"
    params["Latitude"] = latitude
    params["Longitude"] = longitude
    params["FavDealer"] = isFavorite
    params["NearestDealer"] = isNearest
    params["SearchedDealer"] = false
    params["SearchKeyword"] = searcKeyword
    params["LastDealer"] = isLastDealer

    AsyncStorage.getItem('access_token').then( token => {
        BaseHeaders['Authorization'] = `Bearer ${token}`
        console.log('headers',BaseHeaders)
        let request = {
            method: HttpMethods.post,
            headers:BaseHeaders,
            body: JSON.stringify(params)
        }
        fetch(API_URL + GET_BRANCH , request)
        .then(res => {
            responseHandler(GET_DEALERS_REQUEST, res, dispatch)
        }).catch(error =>{
            alert(error)
        })
 });

}