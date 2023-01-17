import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import { useDispatch } from "react-redux";


const Header = () => {
    const barStyle = {background: "black"}
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/auth');
        setUser(null)
    };

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    return (
        <AppBar style={barStyle} position="static">
            <Typography color="inherit" variant="h5" align="center" >
                <p>Simple<b>Notes</b> 📝</p>
            </Typography>
            <Toolbar>
                { user?.result ? (
                    <div>
                        <Typography variant="h6"> Welcome <b>{user.result.username}</b> </Typography>
                        <Button variant="contained" onClick={logout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button component={Link} to="/auth" variant="contained" color="primary">
                            Sign In
                        </Button>
                    </div>
                )}
            </Toolbar>

        </AppBar>


    );



}


export default Header;
