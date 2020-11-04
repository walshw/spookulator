import React from 'react';
import PropTypes from 'prop-types';

const EvidenceOptions = (props) => {
    console.log("rerendered")
    let renderEvidence = () => {
        const { toggleEvidence, evidence } = props;

        return <div className="evidenceOptionsContainer">
            {Object.keys(evidence).map(e =>
                <div
                    className={evidence[e].isSelected ? "glow" : ""}
                    key={e}
                    onClick={() => toggleEvidence(e)}>
                    {evidence[e].name}
                </div>)}
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
    evidence: PropTypes.object.isRequired,
}

export default EvidenceOptions;