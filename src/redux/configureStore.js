import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Units } from './units';
import { Calendars } from './calendars';
import { Workshops } from './workshops';
import { Auth } from './auth';
import { Users } from './users';

import { InitialContact, InitialSignUp } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            units: Units,
            calendars: Calendars,
            workshops: Workshops,
            auth: Auth,
            users: Users,
            ...createForms({
                contactForm: InitialContact,
                signUpForm: InitialSignUp
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};
