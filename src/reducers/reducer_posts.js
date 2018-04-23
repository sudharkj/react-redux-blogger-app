import _ from "lodash";

import {DELETE_POST, FETCH_POST, FETCH_POSTS} from "../actions";

export default (state = {}, action) => {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POST:
            return {...state, [action.payload.data.id]: action.payload.data};
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        default:
            return state;
    }
}