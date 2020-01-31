import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';


const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Icon color="secondary" style={{ fontSize: '1.5rem', marginRight: '0.5rem'}}>
                    pets
                </Icon>
                <Typography variant="h5" color="secondary"> Cutiegram</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
