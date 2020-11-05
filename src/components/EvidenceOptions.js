import React from 'react';
import PropTypes from 'prop-types';

const EvidenceOptions = (props) => {
    console.log("rerendered")
    
    const renderEvidence = () => {
        const { toggleEvidence, evidence } = props;

        return <div className="evidenceOptionsContainer">
            {Object.keys(evidence).map(e =>
                <button
                    className={evidence[e].isSelected ? "glow" : ""}
                    key={e}
                    disabled={evidence[e].isDisabled}
                    onClick={() => toggleEvidence(e)}>
                    {evidence[e].name}
                </button>)}
        </div>
    }

    return (
        <div>
            <h2>Click the Evidence Names Below to Begin</h2>
            {renderEvidence()}
        </div>
    )
}

EvidenceOptions.propTypes = {
    toggleEvidence: PropTypes.func.isRequired,
    evidence: PropTypes.object.isRequired,
}

export default EvidenceOptions;