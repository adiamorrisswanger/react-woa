import * as ActionTypes from './ActionTypes';

export const Users = (state = { errMess: null,
    users: []}, action) => {
        switch (action.type) {
            case ActionTypes.ADD_USER:
                const user = action.payload;
                return {...state, users: state.users.concat(user)};
                
            default:
                return state;
        }
    };
