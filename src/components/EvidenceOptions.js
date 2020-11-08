import React from 'react';
import PropTypes from 'prop-types';
import { Chip, IconButton, Grid } from '@material-ui/core';
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
                        label={evidence[e].name}>
                    </Chip>
                </Grid>
            )}
            <Grid item xs={12} md align="center">
                <IconButton edge="start" onClick={props.reset}>
                    <HighlightOffIcon />
                </IconButton>
            </Grid>
        </Grid>
    }

    return (
        <Grid container md={6}>
            {renderEvidence()}
        </Grid>
    )
}

EvidenceOptions.propTypes = {
    toggleEvidence: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    evidence: PropTypes.object.isRequired
}

export default EvidenceOptions;