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
    .catch(error => dispatch(unitsFailed(error.message)));
};

export const unitsLoading = () => ({
    type: ActionTypes.UNITS_LOADING
});

export const unitsFailed = errMess => ({
    type: ActionTypes.UNITS_FAILED,
    payload: errMess
});

export const addUnits = units => ({
    type: ActionTypes.ADD_UNITS,
    payload: units
})

export const fetchWorkshops = () => dispatch => {
    dispatch(workshopsLoading());

    return fetch(baseUrl + 'events')
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
    .then(workshops => dispatch(addWorkshops(workshops)))
    .catch(error => dispatch(workshopsFailed(error.message)));
};

export const workshopsLoading = () => ({
    type: ActionTypes.WORKSHOPS_LOADING
});

export const workshopsFailed = errMess => ({
    type: ActionTypes.WORKSHOPS_FAILED,
    payload: errMess
});

export const addWorkshops = workshops => ({
    type: ActionTypes.ADD_WORKSHOPS,
    payload: workshops
});

/* export const fetchCalendars = () => dispatch => {
    dispatch(calendarsLoading());

    return fetch(baseUrl + 'events')
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
    .then(calendars => dispatch(addCalendars(calendars)))
    .catch(error => dispatch(calendarsFailed(error.message)));
};

export const calendarsLoading = () => ({
    type: ActionTypes.CALENDARS_LOADING
});

export const calendarsFailed = errMess => ({
    type: ActionTypes.CALENDARS_FAILED,
    payload: errMess
});

export const addCalendars = calendars => ({
    type: ActionTypes.ADD_CALENDARS,
    payload: calendars
});
 */


export const requestLogin = creds => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = response => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const loginError = message => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = creds => dispatch => {
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
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
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

export const logoutUser = () => dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(receiveLogout())
}

export const postContact = (firstName, lastName, phoneNum, email, contactType, message) => dispatch => {

    const contact = {
        firstName: firstName,
        lastName: lastName,
        phoneNum: phoneNum,
        email: email,
        contactType: contactType,
        message: message
    }
    console.log('Contact ', contact);

    return fetch(baseUrl + 'contact', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
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
    .then(response => dispatch(addContact(response)))
    .catch(error => {
        console.log('contact', error.message);
        alert('Could not submit contact\nError: ' + error.message);
    });
};

export const addContact = contact => ({
    type: ActionTypes.ADD_CONTACT,
    payload: contact
})