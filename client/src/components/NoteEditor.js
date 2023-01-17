import React, {useRef, useState} from 'react'
import '../App.css'
import {v4 as uuid} from 'uuid'

import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import TitleIcon from '@material-ui/icons/Title'
import DeleteIcon from "@material-ui/icons/Delete"

import {Cards} from "./Cards"
import {createNote} from "../actions/actions";

export function NoteEditor({onSave, onCancel, note}) {

    const [editorState, setEditorState] = useState(() =>
        note
            ? EditorState.createWithContent(note.text.getCurrentContent())
            : EditorState.createEmpty()
    )
    const cardRef = useRef(null)

    const [titleState, setTitleState] = useState(note ? note.title : '')

    const onTitleStateChange = e => {
        setTitleState(e.target.value)
    }

    const onEditorStateChange = editorState => {
        cardRef.current = editorState
        setEditorState(editorState)
    }

    const onSaveBtn = () => {
        onSave({
            title: titleState,
            text: editorState
        }, note ? note.id : null)
    }

    return (
        <div className="form">

            {/* Edit Title */}
            <div className='title'>
                <Grid
                    container
                    spacing={1}
                    alignItems="flex-end"
                    justify="center"
                    alignContent='center'
                >
                    <Grid item>
                        <TitleIcon style={{color: '#282c34'}}/>
                    </Grid>
                    <Grid item>
                        <TextField
                            value={titleState}
                            onChange={onTitleStateChange}
                            label="Title"
                        />
                    </Grid>
                </Grid>
            </div>

            {/* Edit Note */}
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />

            {/* Save/Cancel buttons */}
            <div className="btn-group">
                <ButtonGroup
                    variant="contained"
                    color='primary'
                >
                    {/* Save Note */}
                    <Button
                        startIcon={<SaveIcon />}
                        style={{
                            backgroundColor: '#229c00',
                        }}
                        onClick={() => onSaveBtn()}
                    >
                        Save
                    </Button>
                    {/* Cancel Note */}
                    <Button
                        startIcon={<DeleteIcon />}
                        color='secondary'
                        onClick={() => onCancel()}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </div>

            {/* Cards */}
            {/*<Cards*/}
            {/*    details={[*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#FEC006", category: "Personal"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#2196F3", category: "Sport"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#FE5621", category: "Hobby"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#673AB7", category: "Work"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#2196F3", category: "Goal"},*/}
            {/*        { text: createMarkup(cardRef.current), title: titleState, color: "#FEC006", category: "ToDO"},*/}
            {/*    ]} />*/}

        </div>
    )

}
