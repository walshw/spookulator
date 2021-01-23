import React from 'react';
import { IconButton, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    icon: {
        fill: "#673ab7"
    },
    iconsGrid: {
        flexDirection: "row-reverse"
    }
}));

const SocialMediaLinks = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <Grid container lg={6} className={classes.iconsGrid}>
                <Grid item>
                    <IconButton href="https://www.linkedin.com/in/williamdwalsh/" target="_blank">
                        <LinkedInIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                    <IconButton href="https://github.com/walshw"target="_blank">
                        <GitHubIcon className={classes.icon} fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SocialMediaLinks;