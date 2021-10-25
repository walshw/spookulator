import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography, IconButton, Grid } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const GhostContainer = (props) => {

    let renderContents = () => {
        return props.ghosts.length > 0
            ?
            <Grid item>
                {props.ghosts.map(ghost =>
                    <Card raised
                        key={ghost.name}>
                        <Typography variant="h4">
                            {ghost.name}
                            <IconButton href={ghost.link} target="_blank">
                                <ExitToAppIcon />
                            </IconButton>
                        </Typography>
                        <ul>
                            <li><b>Strength: </b>{ghost.strength}</li>
                            <li><b>Weakness: </b>{ghost.weakness}</li>
                            <ul>
                                {ghost.remainingEvidence.map(evidence => <li>{evidence}</li>)}
                            </ul>
                        </ul>
                    </Card>)}
            </Grid>
            :
            <Grid item>{props.emptyText}</Grid>
    }

    return (
        <Box>
            <Typography variant="h3" color="primary">{props.title}</Typography>
            <Grid container align justify="space-between">
                {renderContents()}
            </Grid>
        </Box>
    )
}

GhostContainer.propTypes = {
    title: PropTypes.string.isRequired,
    ghosts: PropTypes.array.isRequired
}

export default GhostContainer;