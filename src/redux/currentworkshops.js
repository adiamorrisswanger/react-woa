import * as ActionTypes from './ActionTypes';

export const CurrentWorkshops = (state = { isLoading: true,
                                        errMess: null,
                                        promotions: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CURRENTWORKSHOPS:
            return {...state, isLoading: false, errMess: null, currentworkshops: action.payload};

        case ActionTypes.CURRENTWORKSHOPS_LOADING:
            return {...state, isLoading: true, errMess: null, currentworkshops: []};

        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};