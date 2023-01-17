import React, {useEffect, useState} from 'react'
import './App.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Container } from "@material-ui/core"
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import FormContainer from './containers/index_form'
import {NoteEditor} from "./components/NoteEditor"
import {NotesViewer} from "./components/NotesViewer"
import { createNote, getNotes, deleteNote, updateNote } from "./actions/actions"
import {EditorState, convertFromRaw} from "draft-js"
import { useDispatch } from "react-redux"

const deserialize = data => !data.length
    ? data
    : data.map(obj => (
        { ...obj, text: EditorState.createWithContent(convertFromRaw(JSON.parse(obj.text))) }
    ))

const getRandomInt = (max= 100000) => Math.floor(Math.random() * max)

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [isEditing, setIsEditing] = useState(false)
    const [notes, setNotes] = useState([])
    const dispatch = useDispatch()
    const [editorState, setEditorState] = useState({text: null, title: null, id: null})

    useEffect(() => {
        if (user !== null) 
            dispatch(getNotes(user.result._id))
                .then(_ => updateNotes())
        else 
            localStorage.setItem('notes', JSON.stringify([]))
        }, [])

    const updateNotes = () => setNotes(deserialize(JSON.parse(localStorage.getItem('notes'))))

    const onSave = (data, id=null) => {
        id === null
            ? dispatch(createNote({...data, id: getRandomInt().toString(), user_id: user.result._id}))
                .then(_ => updateNotes())
            : dispatch(updateNote({...data, id: id.toString(), user_id: user.result._id}))
                .then(_ => updateNotes())
        setIsEditing(!isEditing)
    }

    const onCancel = () => {
        setEditorState(null)
        setIsEditing(!isEditing)
    }

    const onAdd = () => {
        setEditorState(null)
        setIsEditing(!isEditing)
    }

    const onRemove = (id) => {
        dispatch(deleteNote(user.result._id, id.toString()))
            .then(_ => updateNotes())
    }

    const onEdit = (id) => {
        setEditorState(notes.find(value => value.id === id))
        setIsEditing(!isEditing)
    }

    return (
            <BrowserRouter>
                <Container maxWidth="lg">
                    {/* Header Part */}
                    <Header/>

                    <Switch>
                        <Route exact path="/">
                            {/* Text Editor or List of Notes */}
                            {
                            isEditing ?
                                <NoteEditor
                                    onSave={onSave}
                                    onCancel={onCancel}
                                    note={editorState}
                                /> :
                                <NotesViewer
                                    onAdd={onAdd}
                                    onRemove={onRemove}
                                    onEdit={onEdit}
                                    notes={notes}
                                />
                            }
                        </Route>
                        {/* Sign In Sign Up */}
                        <Route path="/auth" exact component={FormContainer}/>
                    </Switch>

                    {/* Footer Part */}
                    <Footer />
                </Container>
            </BrowserRouter>

    )

}

export default App
