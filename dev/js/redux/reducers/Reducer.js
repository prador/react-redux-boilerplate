// Redux ActionTypes for informing reducer which switchcase to perform
import * as Types from '../actions/actionTypes';

// Initial state object which remains immutable.
import * as Init from '../store/initialState';

// Reducers are pure functions which return versioned objects of the store state based on the Action call
export default function reducer(
    state = Init.initialState,
    action = {}) {
    switch (action.type) {
        // Reducer to load data for the containers
        case Types.NEW_ACTION_TYPE: {
            return {...state,
                pageName: action.payload.pageName,
                data: action.payload.data
            }
        }
        default: return state;
    }
}