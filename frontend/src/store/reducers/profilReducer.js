import * as types from '../constant/const'

const initialState = {
    success: '',
    error: ''
};

const profil = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_PROFIL_SUCCESS:
            return {
                ...state,
                success: true
            }
        case types.CREATE_PROFIL_ERROR:
            return {
                ...state,
                error: action.payload.message
            }
        default: return state;
    }
}

export default profil;