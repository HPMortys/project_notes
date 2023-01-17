import React, { Component } from 'react'
// import Dialog from '@material-ui/core/Dialog';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Grid, Paper, Avatar, Button, TextField, AppBar, Typography, Link} from '@material-ui/core';
const Login = ({handleChange}) => {
        const paperStyle={padding:  20, height: 440,width:280, margin: "5px auto"}
        const avatarStyle = {backgroundColor: "#1bbd7e"}
        const questionpassStyle = {margin: "8px 0px 0px 140px"}
        const btnStyle = {margin: '8px 0'}
        const signupStyle = {padding: "15px 20px", border: "1px solid #d1d5da", borderRadius: "10px"}
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
                <h2>Sign In</h2>        
            </Grid>

        
            {/* <TextField
                placeholder="Enter Your First Name"
                label="User Name"
                margin="normal"
                fullWidth
                required
              /> */}
      
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
                <Typography  style = {questionpassStyle}>
                    <Link href="#">
                        Forgot password ?
                    </Link>
                </Typography>

              <Button style={btnStyle}
                color="primary"
                variant="contained"
                type="submit"
                variant="contained"
                fullWidth
              >Sign in</Button>

            <Typography align="center" style={signupStyle}> Do you have an account ?
                    <br />
                    <Link href="#" onClick={()=>handleChange("event",1)}>
                        Sign Up
                    </Link>
                </Typography>

          {/* </Dialog> */}
          </Paper>
        </Grid>
        
      );
    }

  
  export default Login;