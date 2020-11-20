import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
    listContainer: {
        display: "flex",
        justifyContent: "space-around",
    }
})


const ListContainer = (props) => {
    const classes = useStyles();

    let renderContents = () => {

        return (
            <div className={classes.listContainer}>
                {
                    props.contentList.length > 0
                        ?
                        props.contentList.map(content =>
                            <div key={content.name}>
                                <div><img src={content.image} height="100" width="100" /></div>
                                <Typography>{content.name}</Typography>
                            </div>)
                        :
                        <Typography>{props.emptyText}</Typography>
                }

            </div>
        )
    }

    return (
        <div>
            <Typography variant="h3" color="primary">{props.title}</Typography>
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