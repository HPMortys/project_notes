import React, { useState } from 'react'
import {Button, Typography, Paper, Grid, TextField} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

import {Cards} from "./Cards"



export function NotesViewer({notes, onRemove, onEdit, onAdd, searchNotes}) {
    
    const user = JSON.parse(localStorage.getItem('profile'));
    const [search, setSearch] = useState([]);

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
                    label='Search Notes'
                    fullWidth 
                    value={search}
                    onChange={(e) => {setSearch(e.target.value)}}
                />
                
                <Button 
                    onClick={() => searchNotes(search)} 
                    color="primary"
                    variant="contained" 
                    fullWidth 
                    > 
                    Search 
                </Button>

               
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
