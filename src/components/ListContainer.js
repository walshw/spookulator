import React from 'react';
import PropTypes from 'prop-types';

const ListContainer = (props) => {
    let renderContents = () => {

        return props.contentList.length > 0
            ?
            <div className="listContainer">
                {props.contentList.map(content =>
                    <div
                        key={content.name}>
                        {content.name}
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

ListContainer.propTypes = {
    title: PropTypes.string.isRequired,
    contentList: PropTypes.array.isRequired,
    emptyText: PropTypes.string
}

export default ListContainer;