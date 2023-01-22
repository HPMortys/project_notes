import React from 'react'
import {Grid, Paper, Avatar, Typography} from "@material-ui/core"
import EmailRounded from '@material-ui/icons/EmailRounded'



const Verification = () => {
    const paperStyle={padding:  20, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', margin: 20};
    const textStyle = {color: "white", padding: "15px 20px", border: "3px solid black", borderRadius: "10px"}
    const iconStyle = {backgroundColor: "#1bbd7e"};

    return (
        <Paper elevation={10} style={paperStyle}>
            <Grid style={textStyle} align='center'>
                    <Avatar> <EmailRounded style={iconStyle}/> </Avatar>
                    <h2>Email Verification</h2>   
                    <Typography> 
                        <b>
                            Please check email to activate your Acount !!!
                            <br />
                            Then you can <a color='#1bbd7e' href='/auth'> sign In </a>
                        </b>                 
                    </Typography>     
            </Grid>
          </Paper>
    );
}


export default Verification;