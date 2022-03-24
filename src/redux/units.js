import * as ActionTypes from './ActionTypes';

export const Units = (state = {
        isLoading: true,
        errMess: null,
        units: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_UNITS:
            return {...state, isLoading: false, errMess: null, units: action.payload};

        case ActionTypes.UNITS_LOADING:
            return {...state, isLoading: true, errMess: null, units: []};

        case ActionTypes.UNITS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};