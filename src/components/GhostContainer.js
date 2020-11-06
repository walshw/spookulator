import React from 'react';
import PropTypes from 'prop-types';

const GhostContainer = (props) => {
    let renderContents = () => {
        return props.ghosts.length > 0
            ?
            <div className="listContainer">
                {props.ghosts.map(ghost =>
                    <div
                        key={ghost.name}>
                        <div>
                            <a href={ghost.link}>{ghost.name}</a>
                        </div>
                        <ul>
                            <li><b>Strength: </b>{ghost.strength}</li>
                            <li><b>Weakness: </b>{ghost.weakness}</li>
                        </ul>
                    </div>)}
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