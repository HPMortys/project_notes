import React, { useState } from 'react'
import {Grid, Paper, Avatar, Button, Typography, Link} from '@material-ui/core';
import Input from "./input_field";
import LockOutlineds from '@material-ui/icons/LockOutlined'
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";
import { signin } from '../../actions/actions'

const initialState = { email: '', password: '' }

const Login = ({handleChange}) => {
        const paperStyle={padding:  20, minHeight: 430}
        const avatarStyle = {backgroundColor: "#1bbd7e"}
        const btnStyle = {margin: '8px 0'}
        const signupStyle = {padding: "15px 20px", border: "1px solid #d1d5da", borderRadius: "10px"}

      
      const [showPassword, setShowPassword] = useState(false);
      const [formData, setFormData] = useState(initialState)
      const dispatch = useDispatch();
      const history = useHistory();


      const handleShowPassword = () =>  setShowPassword((prevShowPasswprd) => !prevShowPasswprd)

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formData, history));
      };

      const handleChange_form = (e) => {
        setFormData({ ...formData,  [e.target.name]: e.target.value});
      };



      return (
          <Grid>
              <Paper elevation={10} style = {paperStyle}>

              <Grid align='center'>
                  <Avatar src="" style={avatarStyle}> <LockOutlineds /> </Avatar>
                  <h2>Sign In</h2>        
              </Grid>


              <form onSubmit={handleSubmit}>
                <Grid>
                  <Input
                    placeholder="Enter Your Email"
                    name="email"
                    label="Email"
                    type="email"
                    handleChange={handleChange_form}
                  />    
                
                  <Input
                    placeholder="Enter Your "
                    name="password"
                    label="Password"
                    type = {showPassword ? "text" : "password"} 
                    handleShowPassword={handleShowPassword}
                    handleChange = {handleChange_form}
                  />

                  <Button 
                    color="primary"
                    variant="contained"
                    type="submit"
                    fullWidth
                    style={btnStyle}

                  >Sign in</Button>
                </Grid>
              </form>


              <Typography align="center" style={signupStyle}> Do you have an account ?
                      <br />
                      <Link href="#" onClick={()=>handleChange("event",1)}>
                          Sign Up
                      </Link>
              </Typography>
        


            </Paper>
          </Grid>
       
        
      );
    }

  
  export default Login;