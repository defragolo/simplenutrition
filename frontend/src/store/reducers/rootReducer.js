import userReducer from './userReducers'
import profilReducer from './profilReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    user: userReducer,
    profil: profilReducer
})

export default rootReducer