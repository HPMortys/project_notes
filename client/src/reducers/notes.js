import {GET_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, SEARCH_NOTES} from '../constants/actionTypes'


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
        case SEARCH_NOTES:
            localStorage.setItem('notes', JSON.stringify(action?.data))
            return { ...state, authData: null}
        default:
            return state;
    }
}


export default notesReducer
