import * as ActionTypes from './ActionTypes';

export const Calendars = (state = {
    isLoading: true,
    errMess: null,
    calendars: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CALENDARS:
            return {...state, isLoading: false, errMess: null, calendars: action.payload};
        case ActionTypes.CALENDARS_LOADING:
            return {...state, isLoading: true, errMess: null, calendars: []};
        case ActionTypes.CALENDARS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}