
// type of methods
export const HttpMethods = {
    get:'GET',
    post:'POST',
    put:'PUT'
}
// base headers 

export const BaseHeaders = {
    ClientTag:'4E573923-5367-4225-9BFC-94D1F9A13D19',
    ApplicationName: '4AD77557-2B49-4A77-80A3-AC9AD76542A3',
}

// base params 

export const BaseParams = {
    ApplicationName: '4AD77557-2B49-4A77-80A3-AC9AD76542A3',
    OperatingSystem: '1',
    UserVersion: '1.0',
    AccountType: '1',
    DeviceType: '0'
}

export const  BaseHeadersWithContentType = {
    ClientTag:'4E573923-5367-4225-9BFC-94D1F9A13D19',
    ApplicationName: '4AD77557-2B49-4A77-80A3-AC9AD76542A3',    "Authorization": "",
    "Content-Type": "application/json",
    "Authorization": "",
}

export const AccountType = {
     astra : "1",
     facebook: "2",
     google : "3",
     unknown : "0"
}

export const APIType = {
     display : "Display",
     displayAll : "DisplayAll",
     edit : "Edit",
     remove : "Remove",
     add : "Add",
}


// root urls 
export const HOME_URL = "https://astrauserprofiledevelopment.azurewebsites.net";
export const API_URL = "https://astramotorkudevelopment-mobile.azurewebsites.net";










// sub urls
export const SIGN_IN_URL = "/token"
export const PROFILE_URL = "/api/myprofile"
export const GET_BRANCH = "/api/dealer/all";