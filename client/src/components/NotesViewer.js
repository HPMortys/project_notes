import React, { useState } from 'react'
import {Button, Typography, Paper, Grid, TextField} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import Search from "@material-ui/icons/Search"

import {Cards} from "./Cards"
import ChipInput from 'material-ui-chip-input';



export function NotesViewer({notes, onRemove, onEdit, onAdd, searchNotes}) {
    
    const user = JSON.parse(localStorage.getItem('profile'));
    const [search, setSearch] = useState([]);
    const [tags, setTags] = useState([])

    const handleAddChip = (tag) => setTags([...tags, tag]);

    const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));


    
    // styles
    const paperStyle={padding:  20, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', margin: 20};
    const textStyle = {color: "white", padding: "15px 20px", border: "3px solid black", borderRadius: "10px"}
      
    if (!user?.result) {
        return (
          <Paper elevation={2} style={paperStyle}>
            <Typography style={textStyle} variant="h4" align="center">
                <b>SimpleNotes</b> is easy way to create own notes.<br /><b>Sign in to start</b>
            </Typography>
          </Paper>
        );
      }

    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>

                <div style={textStyle}>
                    <Button 
                        variant="contained" 
                        color='secondary'     
                        startIcon={<AddIcon/>}
                        onClick={onAdd}
                        fullWidth
                    >
                        Add
                    </Button>
                    <TextField 
                            name="search"
                            label='Title'
                            fullWidth 
                            value={search}
                            onChange={(e) => {setSearch(e.target.value)}}
                        />
                    <ChipInput 
                        value={tags}
                        onAdd={(chip) => handleAddChip(chip)}
                        onDelete={(chip) => handleDeleteChip(chip)}
                        label="Tags"/>
                        
                    
                    <Button 
                        onClick={() => searchNotes(search, tags)} 
                        color="primary"
                        variant="contained" 
                        startIcon={<Search/>}
                        fullWidth 
                        > 
                        Search 
                    </Button>
                </div>

               
            </Grid>

            <Grid item xs={10}>
                <Cards
                    onRemove={onRemove}
                    onEdit={onEdit}
                    notes={notes}
                />
            </Grid>
        </Grid>
    )

}
