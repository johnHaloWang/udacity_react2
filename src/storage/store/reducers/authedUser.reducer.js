import * as authedUserActions from '../actions/authedUser.action';
const initialState = null;

export default function authedUser(state = initialState, action) {
    switch (action.type) {
        case authedUserActions.types.SET_AUTHED_USER:
            return action.payload;
        default:
            return state;
    }
}