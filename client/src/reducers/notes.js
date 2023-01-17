import {GET_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE} from '../constants/actionTypes'
import {convertFromRaw, convertToRaw, EditorState} from "draft-js"


const notesReducer = (state = { authData: null } , action) => {
    switch (action.type) {
        case GET_NOTES:
            localStorage.setItem('notes', JSON.stringify(action?.data))
            return { ...state, authData: null}
        case ADD_NOTE:
            localStorage.setItem('notes', JSON.stringify(action?.data))
            return { ...state, authData: null}
        case DELETE_NOTE:
            localStorage.setItem('notes', JSON.stringify(action?.data))
            return { ...state, authData: null}
        case UPDATE_NOTE:
            localStorage.setItem('notes', JSON.stringify(action?.data))
            return { ...state, authData: null}
        default:
            return state;
    }
}


export default notesReducer
