import React, { useState } from 'react'
import Input from "./input_field";
import LockOutlineds from '@material-ui/icons/LockOutlined'
import {Grid, Paper, Avatar, Button, Typography} from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";
import { signup } from '../../actions/actions'
import { GoogleLogin } from 'react-google-login'

const initialState = { username: '', email: '', password: '' }

const SignUp = () => {
        const paperStyle={padding:  20, minHeight: 430, maxWidth:280};
        const avatarStyle = {backgroundColor: "#1bbd7e"};
        const btnStyle = {margin: '8px 0'};

        const [showPassword, setShowPassword] = useState(false);
        const [formData, setFormData] = useState(initialState)
        const [errors, setErrors] = useState({});

        const dispatch = useDispatch();
        const history = useHistory();

        const validate = () => {
          let err_temp = {};
          err_temp.password = formData.password?.length>8 ? "": "Password should be at least 8 characters";
          err_temp.username = formData.username?.length<20 ? "": "Username should not exceed 20 Characters";
          err_temp.email = !/^[A-Z0-9._%+-]+\.[A-Z]{2-4}$/i.test(formData.email?.length) ? "": "Email is not valid";
          setErrors({ ...err_temp})
          return Object.values(err_temp).every(x => x == "")
        }

        const handleShowPassword = () =>  setShowPassword((prevShowPasswprd) => !prevShowPasswprd)

        const handleSubmit = (e) => {
          e.preventDefault();
          if (validate()){
            dispatch(signup(formData, history));
          }
        };

        const handleChange = (e) => {
          setFormData({ ...formData,  [e.target.name]: e.target.value});
        };


      return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
            <Grid align='center'>
                <Avatar src="" style={avatarStyle}> <LockOutlineds /> </Avatar>
                <h2>Sign Up</h2>   
                <Typography variant='caption'>Please fill this form to create an account !</Typography>     
            </Grid>

            <form onSubmit={handleSubmit}>
              <Grid>
                <Input
                    placeholder="Enter Your Username"
                    name="username"
                    label="Username"
                    handleChange = {handleChange}
                    error={errors.username}
                  />

                <Input
                    placeholder="Enter Your Email"
                    name="email"
                    label="Email"
                    type="email"
                    handleChange = {handleChange}
                    error={errors.email}
                  />    
                
                <Input
                    placeholder="Enter Your Password"
                    name="password"
                    label="Password"
                    type = {showPassword ? "text" : "password"} 
                    handleShowPassword={handleShowPassword}
                    handleChange = {handleChange}
                    error={errors.password}
                  />

                <Typography variant='caption'>Make sure it's at least 8 characters</Typography>  
                <br />
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  style={btnStyle}
                >Sign Up</Button>

                {/* <GoogleLogin>
                  clientId="GOOGLE ID"
                  rendre
                </GoogleLogin> */}

              </Grid>       
            </form>

          </Paper>
        </Grid>
        
      );
    }
  
  
  export default SignUp;