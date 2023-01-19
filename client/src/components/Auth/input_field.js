import React from 'react'
import { TextField, Grid, InputAdornment, IconButton} from "@material-ui/core";
import { Visibility, VisibilityOff } from '@material-ui/icons';


const Input = ({name, label, type, placeholder, handleChange, handleShowPassword, error=null}) => {
    return (
        <Grid>
            <TextField
                {...(error && {error:true,helperText:error})}
                
                name = {name}
                label = {label}
                type = {type}
                placeholder = {placeholder}
                onChange = {handleChange}
            
                margin="normal"

                fullWidth
                required

                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <Visibility/> : <VisibilityOff/>}

                            </IconButton>
                        </InputAdornment>
                    )
                }: null}

            />

        </Grid>
    );

}

export default Input;