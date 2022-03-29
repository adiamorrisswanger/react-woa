import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import { Units } from './units';
import { Calendars } from './calendars';
import { Workshops } from './workshops';
import { ContactForm } from './forms';
import { Auth } from './auth';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            units: Units,
            calendars: Calendars,
            workshops: Workshops,
            auth: Auth,
            ...createForms({
                contactForm: ContactForm
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
}
