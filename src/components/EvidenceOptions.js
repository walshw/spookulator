import React from 'react';
import PropTypes from 'prop-types';
import { Chip, IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const EvidenceOptions = (props) => {
    const renderEvidence = () => {
        const { toggleEvidence, evidence } = props;

        return <div className="evidenceOptionsContainer">
            {Object.keys(evidence).map(e =>
                <Chip
                    color={evidence[e].isSelected ? "primary" : ""}
                    key={e}
                    disabled={evidence[e].isDisabled}
                    onClick={() => toggleEvidence(e)}
                    label={evidence[e].name}>
                </Chip>)}
            <IconButton edge="start" onClick={props.reset}>
                <HighlightOffIcon />
            </IconButton>
        </div>
    }

    return (
        <div>
            {renderEvidence()}
        </div>
    )
}

EvidenceOptions.propTypes = {
    toggleEvidence: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    evidence: PropTypes.object.isRequired
}

export default EvidenceOptions;