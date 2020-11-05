import React from 'react';
import PropTypes from 'prop-types';

const GhostContainer = (props) => {
    let renderContents = () => {
        return props.ghosts.length > 0
            ?
            <div className="listContainer">
                {props.ghosts.map(ghost =>
                    <a href={ghost.link}>
                        <div
                            key={ghost.name}>
                            {ghost.name}
                        </div>
                    </a>)}
            </div>
            :
            <div>{props.emptyText}</div>
    }

    return (
        <div>
            <h2>{props.title}</h2>
            {renderContents()}
        </div>
    )
}

GhostContainer.propTypes = {
    title: PropTypes.string.isRequired,
    ghosts: PropTypes.array.isRequired
}

export default GhostContainer;