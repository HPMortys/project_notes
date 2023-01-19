import React, {useRef, useState} from 'react'
import '../App.css'

import {EditorState} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import TitleIcon from '@material-ui/icons/Title'
import DeleteIcon from "@material-ui/icons/Delete"


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
        </div>
    )

}
