import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';


const NavBar = (props) => {
    return(
        <AppBar position="static">
            <Toolbar
            style={{ 
                display: 'flex',
                justifyContent: 'center'
            }}
            >
                <Link to='/'>
                    <Icon
                        style={{ 
                            fontSize: '2.5rem'
                        }}
                    >
                        home
                    </Icon>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;