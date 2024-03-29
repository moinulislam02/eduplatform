import axios from 'axios';
import { loginStart, loginSuccess, loginFailure, logout } from '../redux/authRedux'
import { getPostFailur, getPostStart, getPostSuccess } from '../redux/postRedux';
import { getMyPostStart, getMyPostSuccess, getMyPostFailur } from '../redux/myPostRedux';

export const login = async (dispatch, data) =>{
    let res;
    dispatch(loginStart())
    try {
        res = await axios({method:'post',url:`${process.env.REACT_APP_API_URL}/users/login`, data:data})
        dispatch(loginSuccess(res.data?.data))
        return res
    } catch (error) {
        console.log(error);
        dispatch(loginFailure())
        return res
    }
}

export const addPost = async (data, vartoken) =>{
    let res;
    try {
        res = await axios({method:'post',url:`${process.env.REACT_APP_API_URL}/posts/`, data:data ,headers:{token: 'Bearer '+ vartoken}})
        return res
    } catch (error) {
        console.log(error);
        return res
    }
}

export const updatePost = async (id, data, vartoken) =>{
    let res;
    try {
        res = await axios({method:'patch',url:`${process.env.REACT_APP_API_URL}/posts/${id}`, data:data ,headers:{token: 'Bearer '+ vartoken}})
        return res
    } catch (error) {
        console.log(error);
        return res
    }
}

export const getAllPost = async (dispatch) =>{
    let res;
    dispatch(getPostStart())
    try {
        res = await axios({method:'get',url:`${process.env.REACT_APP_API_URL}/posts/`})
        dispatch(getPostSuccess(res.data?.data))
        return res
    } catch (error) {
        console.log(error);
        dispatch(getPostFailur())
        return res
    }
}

export const uploadMedia = async (data) =>{
    let res;
    try {
        res = await axios({method:'post',url:`${process.env.REACT_APP_API_URL}/uploads/`, data:data })
        return res
    } catch (error) {
        console.log(error);
        return res
    }
}

export const getMyPosts = async (dispatch, id, vartoken) =>{
    let res;
    dispatch(getMyPostStart())
    try {
        res = await axios({method:'get',url:`${process.env.REACT_APP_API_URL}/posts/user/${id}`, headers:{token: 'Bearer '+ vartoken}})
        dispatch(getMyPostSuccess(res.data?.data))
        return res
    } catch (error) {
        dispatch(getMyPostFailur())
        console.log(error);
        return res
    }
}

export const deleteMyPost = async (id, vartoken) =>{
    let res;
    try {
        res = await axios({method:'delete',url:`${process.env.REACT_APP_API_URL}/posts/${id}`, headers:{token: 'Bearer '+ vartoken}})
        return res
    } catch (error) {
        console.log(error);
        return res
    }
}

export const updateUser = async (id, vartoken, data) =>{
    let res;
    try {
        res = await axios({method:'patch',url:`${process.env.REACT_APP_API_URL}/users/${id}`,data:data , headers:{token: 'Bearer '+ vartoken}})
        return res
    } catch (error) {
        console.log(error);
        return res
    }
}