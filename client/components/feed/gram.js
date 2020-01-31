import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import Axios from 'axios';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: '1rem'
    },
  }));

export default function Gram(props) {
    const { gram } = props;
    const classes = useStyles();
    const [likes, setLikes] = useState(gram.likes || 0);

    const handleClick = async() => {
        await Axios.put(`/api/gram/${gram.id}`, { likes: (likes + 1) });
        setLikes(likes + 1);
    }

    return (
        <Grid item xs={6}>
            <Card className={classes.card}>
                <CardMedia>
                    <img src={gram.imageUrl} width="400" height="400" />
                </CardMedia>
                <CardActions disableSpacing>
                    <IconButton color="primary" aria-label="add like" onClick={handleClick}>
                        <Icon>favorite</Icon>
                        {likes}
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>

    )
}
