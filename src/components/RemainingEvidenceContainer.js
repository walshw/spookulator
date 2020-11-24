import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    remainingEvidenceContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        margin: "15px"
    },
    evidenceContainer: {
        textAlign: "center",
        width: "100px"
    },
    evidenceImage: {
        borderRadius: "15px",
        height: "100px",
        width: "100px"
    }
})

const RemainingEvidenceContainer = (props) => {
    const classes = useStyles();

    let renderContents = () => {

        return (
            <div className={classes.remainingEvidenceContainer}>
                {props.contentList.map(content =>
                    <div className={classes.evidenceContainer} key={content.name}>
                        <img className={classes.evidenceImage} src={content.image} alt="image" />
                        <Typography>{content.name}</Typography>
                    </div>)}

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

RemainingEvidenceContainer.propTypes = {
    title: PropTypes.string.isRequired,
    contentList: PropTypes.array.isRequired,
    emptyText: PropTypes.string
}

export default RemainingEvidenceContainer;