import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'babel-polyfill';
import NavBar from './NavBar';
import { Feed } from '../feed';

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
                <div>
                    <NavBar />
                    <Feed />
                </div>
        </ThemeProvider>
    )
}

export default Root;