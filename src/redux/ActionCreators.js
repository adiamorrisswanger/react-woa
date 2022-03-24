import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchUnits = () => dispatch => {
    dispatch(unitsLoading());

    return fetch(baseUrl + 'units')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
        .then(response => response.json())
        .then(units => dispatch(addUnits(units)))
        .catch(error => dispatch(unitsFailed(error.message)))
};

export const unitsLoading = () => ({
    type: ActionTypes.UNITS_LOADING
})

export const unitsFailed = errMess => ({
    type: ActionTypes.UNITS_FAILED,
    payload: errMess
})

export const addUnits = units => ({
    type: ActionTypes.ADD_UNITS,
    payload: units
})

export const loginUser = creds => dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => { throw error; }
    )
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            //dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        } else {
            const error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(favoritesFailed('Error 401: Unauthorized'));
    dispatch(receiveLogout())
}