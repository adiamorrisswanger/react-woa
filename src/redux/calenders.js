import * as ActionTypes from './ActionTypes';

export const Calenders = (state = { isLoading: true,
                                        errMess: null,
                                        promotions: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CALENDERS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.CALENDERS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};

        case ActionTypes.CALENDERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};