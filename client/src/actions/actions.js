import {ADD_NOTE, AUTH, DELETE_NOTE, GET_NOTES, UPDATE_NOTE} from "../constants/actionTypes";
import * as api from '../api/api_index.js';
import {convertFromRaw, convertToRaw, EditorState} from "draft-js";


export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({type: AUTH, data});
        history.push('/')
    } catch (error) {
        console.log(error)
        alert(error.response.data.message)
    }
}



export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({type: AUTH, data})
        history.push('/')
    } catch (error) {
        console.log(error)
        alert(error.response.data.message)
    }
}



export const getNotes = (userData) => async (dispatch) => {
    try {
        let { data } = await api.fetchPosts(userData)
        dispatch({type: GET_NOTES, data})
    } catch (error) {
        console.log(error)
    }
}


export const createNote = (formData) => async (dispatch) => {
    try {
        console.log('createNote', formData.id, formData.user_id)
        const res = await api.createPost({
            ...formData,
            text: JSON.stringify(convertToRaw(formData.text.getCurrentContent()))
        })
        let { data } = await api.fetchPosts(formData.user_id)
        dispatch({type: ADD_NOTE, data})
    } catch (error) {
        console.log(error)
    }
}

export const updateNote = (formData) => async (dispatch) => {
    try {
        console.log('updateNote', formData.id, formData.user_id)
        const res = await api.updatePost({
            ...formData,
            text: JSON.stringify(convertToRaw(formData.text.getCurrentContent()))
        })
        let { data } = await api.fetchPosts(formData.user_id)
        dispatch({type: UPDATE_NOTE, data})
    } catch (error) {
        console.log(error)
    }
}


export const deleteNote = (userId, postId) => async (dispatch) => {
    try {
        const res = await api.deletePost(userId, postId)
        let { data } = await api.fetchPosts(userId)
        dispatch({type: DELETE_NOTE, data})
    } catch (error) {
        console.log(error)
    }
}
