import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography, Link, IconButton, Paper } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const GhostContainer = (props) => {

    let renderContents = () => {
        return props.ghosts.length > 0
            ?
            <Box>
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
                        </ul>
                    </Card>)}
            </Box>
            :
            <div>{props.emptyText}</div>
    }

    return (
        <Box>
            <Typography variant="h3" color="primary">{props.title}</Typography>
            {renderContents()}
        </Box>
    )
}

GhostContainer.propTypes = {
    title: PropTypes.string.isRequired,
    ghosts: PropTypes.array.isRequired
}

export default GhostContainer;