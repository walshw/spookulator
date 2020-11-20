import React from 'react';
import PropTypes from 'prop-types';
import { Chip, IconButton, Grid, Avatar, Box, Typography } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const EvidenceOptions = (props) => {
    const renderEvidence = () => {
        const { toggleEvidence, evidence } = props;

        return <Grid container spacing={2} display="flex" alignItems="center">
            {Object.keys(evidence).map(e =>
                <Grid item xs md align="center">
                    <Chip
                        color={evidence[e].isSelected ? "primary" : "default"}
                        key={e}
                        disabled={evidence[e].isDisabled}
                        onClick={() => toggleEvidence(e)}
                        label={evidence[e].name}
                        avatar={<Avatar src={evidence[e].image} />}>
                    </Chip>
                </Grid>
            )}
            <Grid item xs={12} md align="center">
                <IconButton edge="start" onClick={props.reset}>
                    <HighlightOffIcon color="primary" />
                </IconButton>
            </Grid>
        </Grid>
    }

    return (
        <Box>
            <Typography variant="h3" color="primary">{props.title}</Typography>
            <Grid container lg={6}>
                {renderEvidence()}
            </Grid>
        </Box>
    )
}

EvidenceOptions.propTypes = {
    toggleEvidence: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    evidence: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}

export default EvidenceOptions;