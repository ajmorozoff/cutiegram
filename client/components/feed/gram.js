import React, { useEffect, useState } from 'react';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { CardHeader } from '@material-ui/core';
import Axios from 'axios';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: '1rem'
    },
  }));

export default function gram(props) {
    const { gram } = props;
    const classes = useStyles();
    const [likes, setLikes] = useState(gram.likes || 0);

    const handleClick = async() => {
        setLikes(likes + 1);
    }

    return (
        <Card className={classes.card}>
            <CardMedia>
                <img src={gram.imageUrl} width="400" height="400"/>
            </CardMedia>
            <CardActions disableSpacing>
                <IconButton aria-label="add like" onClick={() => setLikes(likes + 1)}>
                    <Icon>favorite</Icon>
                    {likes}
                </IconButton>
            </CardActions>
        </Card>

    )
};