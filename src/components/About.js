import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
        fill: "#673ab7"
    }
}));

const About = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <Typography variant="h3" color="primary">About</Typography>
            We have a blurb of text on the left side
            With a phasmophobia logo on the right?
            probs be contained in a card
            <br/>
            <h3> potentially how this was made?</h3>
            Look into mui cards and CardMedia
        </Box>
    )
}

export default About;