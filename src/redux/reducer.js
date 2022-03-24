import { CALENDERS } from '../shared/calenders';
import { CURRENTWORKSHOPS } from '../shared/currentworkshops';
import { UNITS } from '../shared/units';

export const initialState = {
    calenders: CALENDERS,
    currentworkshops: CURRENTWORKSHOPS,
    units: UNITS
};

export const Reducer = (state = initialState, action) => {
    return state;
};