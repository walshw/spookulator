import React from 'react';
import PropTypes from 'prop-types';

const ListContainer = (props) => {
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

ListContainer.propTypes = {
}

export default ListContainer;