import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Grid, Paper, Avatar, Button, TextField, AppBar, Typography, Link} from '@material-ui/core';

const SignUp = () => {
        const paperStyle={padding:  20, height: 430,width:280, margin: "5px auto"}
        const avatarStyle = {backgroundColor: "#1bbd7e"}
        const questionpassStyle = {margin: "8px 0px 0px 140px"}
        const btnStyle = {margin: '8px 0'}
      return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
            {/* <Dialog
              open
              fullWidth
              maxWidth='sm'
            > */}
  

            <Grid align='center'>
                <Avatar src="" style={avatarStyle}> </Avatar>
                <h2>Sign Up</h2>   
                <Typography variant='caption'>Please fill this form to create an account !</Typography>     
            </Grid>

            <form>
            <TextField
                placeholder="Enter Your Username"
                label="Username"
                margin="normal"
                fullWidth
                required
              />

             <TextField
                placeholder="Enter Your Email"
                label="Email"
                margin="normal"
                fullWidth
                required
              />    
            
             <TextField
                placeholder="Enter Your "
                label="Password"
                margin="normal"
                type="password"
                fullWidth
                required
              />
              <Typography variant='caption'>Make sure it's at least 8 characters</Typography>  
   


              <Button
                color="primary"
                variant="contained"
                type="submit"
                style={btnStyle}
              >Sign Up</Button>
            </form>

          {/* </Dialog> */}
          </Paper>
        </Grid>
        
      );
    }
  
  
  export default SignUp;