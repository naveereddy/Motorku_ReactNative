import { AsyncStorage } from 'react-native'

export const saveAccessToken = token => {
    AsyncStorage.setItem('access_token', token)
}

export const saveEmail = email => {
    AsyncStorage.setItem('email',email)
}

export const saveRefreshToken = refresh_token => {
    AsyncStorage.setItem('refresh_token', refresh_token)
}

export const saveProfileImage = imageData => {
    AsyncStorage.setItem('profileImage', imageData)
}

export const saveApnsPushToken = pushToken => {
    AsyncStorage.setItem('ApnsToken', pushToken)
}
