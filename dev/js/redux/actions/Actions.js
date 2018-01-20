// Redux ActionTypes for informing reducer which switchcase to perform
import * as Types from './actionTypes';

// local data for dev environment
import { Data } from '../store/devData';

// Redux Action to change the timeWindow of charts being displayed in trendchart
export function initialData(pageName) {   
    return function(dispatch) {
            dispatch({
                type: Types.NEW_ACTION_TYPE,
                payload: {pageName: pageName, data: Data}
        }
    )}
}