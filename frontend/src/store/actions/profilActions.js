import { sendRequest } from '../utils/ajax';
import * as types from '../constant/const'
import { push } from 'react-router-redux';

export const updateProfil = (user, taille, poid, age) => {
    return (dispatch) => {
        sendRequest('post', `http://localhost:8000/profil`, { user, taille, poid, age })
            .then(response => {
                dispatch({
                    type: types.CREATE_PROFIL_SUCCESS,
                    payload: response.data
                })
            }).catch((error) => {
                let msg = error.response.data;
                dispatch({
                    type: types.CREATE_PROFIL_ERROR,
                    payload: new Error(msg),
                    error: true
                })
            });
    }
}