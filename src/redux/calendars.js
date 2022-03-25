import * as ActionTypes from './ActionTypes';

export const Calendars = (state = { isLoading: true,
                                        errMess: null,
                                        promotions: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CALENDARS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.CALENDARS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};

        case ActionTypes.CALENDARS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};