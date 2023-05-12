import axios from 'axios';
import { loginStart, loginSuccess, loginFailure, logout } from '../redux/authRedux'

export const login = async (dispatch, data) =>{
    let res;
    dispatch(loginStart())
    try {
        res = await axios({method:'post',url:`${process.env.REACT_APP_API_URL}/users/login`, data:data})
        dispatch(loginSuccess(res.data))
        return res
    } catch (error) {
        console.log(error);
        dispatch(loginFailure())
        return res
    }
}