export let responseHandler = (actionType, response, dispatch) => {

    switch (response.status) {

        case 200:
            response.json().then((resJson) => {
                dispatch({ type: actionType, payload: { status: 'SUCCESS', response: resJson } })
            })
            return;

        case 204:
            dispatch({ type: actionType, payload: { status: 'SUCCESS' } })
            return;

        case 401:
            response.json().then(resJson => {
                dispatch({ type: actionType, payload: { status: 'ERROR', message: resJson.message, statusCode: response.status } })
            })
            return;

        case 403:
            dispatch({ type: actionType, payload: { status: 'ERROR', message: 'Forbidden Error' } })
            return;

        case 422:
            response.json().then(resJson => {
                dispatch({ type: actionType, payload: { status: 'ERROR', message: resJson.error ? resJson.error : resJson.errors[0] } })
            })
            return;

        case 500:
            dispatch({ type: actionType, payload: { status: 'ERROR', message: 'Server is down, please try later.' } })
            return;

        default:
            dispatch({ type: actionType, payload: { status: 'ERROR', message: 'Server error - ' + response.status } })
            return;
    }
}