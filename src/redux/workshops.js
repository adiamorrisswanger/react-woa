import * as ActionTypes from './ActionTypes';

export const Workshops = (state = {
    isLoading: true,
    errMess: null,
    workshops: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WORKSHOPS:
            return {...state, isLoading: false, errMess: null, workshops: action.payload};
        case ActionTypes.WORKSHOPS_LOADING:
            return {...state, isLoading: true, errMess: null, workshops: []};
        case ActionTypes.WORKSHOPS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}