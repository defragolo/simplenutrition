import * as types from '../constant/const'

const initialState = {
    user: {logged : false},
    error: ''
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_USER_SUCCESS:
            return {
                ...state,
                success: true,
                email : action.email,
                id : action.id

            }
        case types.CREATE_USER_FAIL:
            return {
                ...state,
                error: action.payload.message,
            };
        default: return state;
    }
}

export default user;