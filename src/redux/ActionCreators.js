import * as ActionTypes from './ActionTypes';


export const fetchUnits = () => dispatch => {
    dispatch(unitsLoading());
    dispatch(addUnits);
}

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

export const addFeedback = (firstName, lastName, email, phoneNum, contactType, message) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNum: phoneNum,
            contactType: contactType,
            message: message
    }
});