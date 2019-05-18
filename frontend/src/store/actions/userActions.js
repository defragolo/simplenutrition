import { sendRequest } from '../utils/ajax';
import * as types from '../constant/const'
import { push } from 'react-router-redux';

export const addUser = (email, username, password) => {
    return (dispatch) => {
        sendRequest('post', 'http://localhost:8000/user/add/', { email, username, password })
            .then(response => {
                dispatch({
                    type: types.CREATE_USER_SUCCESS,
                    payload: response.data,
                    email:email,
                    id : response.data.id
                })
            }).catch((error) => {
                let data = error.response.data;
                let msg = (data.email && `Email: ${data.email[0]}`) ||
                    (data.password && `Email : ${data.password[0]}`);
                
                if(msg ==="Email: This field must be unique."){
                    msg = "Un utilisateur avec cet email exsite déjà";
                }
                dispatch({
                    type: types.CREATE_USER_FAIL,
                    payload: new Error(msg),
                    error: true
                })
            });
    }
}

export const checkLoggedIn = () =>{
    return (dispatch) =>{
        if(!localStorage.token){
            dispatch(push('/login'));
        }
    }
}