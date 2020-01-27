import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import NavBar from './NavBar';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFC001',
        },
        secondary: {
            main: '#01D0C0'
        },
        warning: {
            main: '#E681FF'
        },
        error: {
            main: '#FF4C6C'
        }
    },
});

const Root = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <NavBar>
                        {/* <Switch>
                            <Route path='/user/:id' component={UserPage} />
                            <Route path='/' component={Feed} />
                            <Route component={Feed} />
                        </Switch> */}
                    </NavBar>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default Root;